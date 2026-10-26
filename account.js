// Особистий кабінет: вхід і реєстрація (Supabase Auth), ключі акаунта, пробний період, оплата.
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const sb = supabase.createClient(CONFIG.supabaseUrl, CONFIG.supabaseKey);
const params = new URLSearchParams(location.search);

const views = { auth: $("#authView"), reset: $("#resetView"), dash: $("#dashView") };
function show(name) {
  Object.entries(views).forEach(([k, v]) => v.hidden = k !== name);
  $("#loading").hidden = true;
}
function say(el, text, ok = false) {
  el.textContent = text;
  el.classList.toggle("ok", ok);
}

// Повідомлення Supabase й сервера — зрозумілою мовою
function explain(err) {
  const m = String(err?.message || err || "");
  if (/Invalid login credentials/i.test(m)) return t("Невірна пошта або пароль.");
  if (/Email not confirmed/i.test(m)) return t("Спочатку підтвердіть пошту — ми надіслали лист із посиланням.");
  if (/already registered|already been registered/i.test(m)) return t("Цю пошту вже зареєстровано. Увійдіть.");
  if (/Password should be at least|at least 8/i.test(m)) return t("Пароль має містити щонайменше 8 символів.");
  if (/rate limit|too many/i.test(m)) return t("Забагато спроб. Зачекайте кілька хвилин.");
  if (/TRIAL_USED/.test(m)) return t("Пробний період уже використано.");
  if (/KEY_NOT_FOUND/.test(m)) return t("Такого ключа немає або він уже доданий до іншого акаунта.");
  if (/Failed to fetch|NetworkError/i.test(m)) return t("Немає з'єднання. Перевірте інтернет.");
  if (/Could not find the function/i.test(m)) return t("Сервер ще не оновлено (update_1.21.sql).");
  return m;
}

// ---------- Вхід / реєстрація ----------
let mode = "in";
function setMode(m) {
  mode = m;
  $$(".seg button").forEach(b => b.classList.toggle("on", b.dataset.mode === m));
  $("#authSubmitText").textContent = t(m === "in" ? "Увійти" : "Створити акаунт");
  $("#password").autocomplete = m === "in" ? "current-password" : "new-password";
  $("#forgot").hidden = m !== "in";
  say($("#authMsg"), "");
}
$$(".seg button").forEach(b => b.addEventListener("click", () => setMode(b.dataset.mode)));

$("#authForm").addEventListener("submit", async e => {
  e.preventDefault();
  const email = $("#email").value.trim(), password = $("#password").value;
  const btn = $("#authSubmit");
  btn.disabled = true;
  try {
    if (mode === "in") {
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } else {
      // Після підтвердження пошти людина повернеться сюди ж (з тими самими ?buy / ?trial)
      const { data, error } = await sb.auth.signUp({ email, password, options: { emailRedirectTo: location.href.split("#")[0] } });
      if (error) throw error;
      if (!data.session) say($("#authMsg"), t("Майже готово! Відкрийте лист, який ми надіслали на пошту, і підтвердіть акаунт."), true);
    }
  } catch (err) {
    say($("#authMsg"), explain(err));
  } finally {
    btn.disabled = false;
  }
});

$("#forgot").addEventListener("click", async () => {
  const email = $("#email").value.trim();
  if (!email) return say($("#authMsg"), t("Вкажіть пошту — надішлемо посилання для нового пароля."));
  const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.href.split("#")[0].split("?")[0] });
  say($("#authMsg"), error ? explain(error) : t("Лист для зміни пароля надіслано."), !error);
});

$("#resetForm").addEventListener("submit", async e => {
  e.preventDefault();
  const { error } = await sb.auth.updateUser({ password: $("#newPassword").value });
  if (error) return say($("#resetMsg"), explain(error));
  say($("#resetMsg"), t("Пароль змінено."), true);
  recovering = false;
  setTimeout(() => render(), 900);
});

$("#signOut").addEventListener("click", async () => { await sb.auth.signOut(); render(); });

// ---------- Кабінет ----------
let user = null, keys = [];
let recovering = false; // відкрили посилання «новий пароль» — спершу форма пароля

function status(k) {
  const fmt = d => new Date(d).toLocaleDateString(dyn().locale, { day: "numeric", month: "long", year: "numeric" });
  if (k.revoked) return [t("Заблоковано"), "bad"];
  if (k.expires_at && new Date(k.expires_at) < new Date()) return [t("Термін минув"), "bad"];
  if (!k.activated_at) return [k.duration_days ? t("Не активовано") + " · " + k.duration_days + " " + t("дн. після активації") : t("Не активовано") + " · " + t("безстроковий"), "wait"];
  if (!k.expires_at) return [t("Активний") + " · " + t("безстроковий"), "good"];
  return [t("Активний до") + " " + fmt(k.expires_at), "good"];
}

function drawKeys() {
  const box = $("#keys");
  box.innerHTML = "";
  keys.forEach(k => {
    const [text, cls] = status(k);
    const row = document.createElement("div");
    row.className = "key-row";
    row.innerHTML = `<div><code></code>${k.is_trial ? `<span class="tag">${t("Пробний")}</span>` : ""}<small class="st ${cls}"></small></div>
      <button class="btn btn-ghost btn-sm"></button>`;
    $("code", row).textContent = k.key;
    $(".st", row).textContent = text;
    const copy = $("button", row);
    copy.textContent = t("Копіювати");
    copy.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(k.key); copy.textContent = t("Скопійовано ✓"); } catch { }
      setTimeout(() => copy.textContent = t("Копіювати"), 1500);
    });
    box.appendChild(row);
  });
  $("#noKeys").hidden = keys.length > 0;
  $("#trialCard").hidden = keys.some(k => k.is_trial);
}

async function loadKeys() {
  const { data, error } = await sb.rpc("my_keys");
  if (error) { say($("#dashMsg"), explain(error)); return; }
  keys = data || [];
  drawKeys();
}

$("#trialBtn").addEventListener("click", async () => {
  $("#trialBtn").disabled = true;
  const { error } = await sb.rpc("start_trial");
  $("#trialBtn").disabled = false;
  if (error) return say($("#dashMsg"), explain(error));
  say($("#dashMsg"), t("Пробний ключ готовий! Скопіюйте його й вставте в програмі."), true);
  await loadKeys();
});

$("#claimForm").addEventListener("submit", async e => {
  e.preventDefault();
  const key = $("#claimKey").value.trim();
  if (!key) return;
  const { error } = await sb.rpc("claim_key", { p_key: key });
  if (error) return say($("#dashMsg"), explain(error));
  $("#claimKey").value = "";
  say($("#dashMsg"), t("Ключ додано до акаунта."), true);
  await loadKeys();
});

// Оплата: посилання Lemon Squeezy з поштою й ID акаунта — після оплати ключ прив'яжеться сам
function checkoutUrl(plan) {
  const url = new URL(CONFIG.checkout[plan]);
  url.searchParams.set("checkout[email]", user.email);
  url.searchParams.set("checkout[custom][user_id]", user.id);
  return url.toString();
}
function buy(plan) {
  if (hasCheckout(plan)) location.href = checkoutUrl(plan);
  else window.open(CONFIG.contactUrl, "_blank", "noopener");
}
$$(".mini-plan").forEach(b => b.addEventListener("click", () => buy(b.dataset.plan)));
$$("[data-price]").forEach(el => el.textContent = "$" + CONFIG.prices[el.dataset.price]);
$$("[data-download]").forEach(a => a.href = CONFIG.downloadUrl);
if (!Object.keys(CONFIG.checkout).some(hasCheckout)) $("#payNote").textContent = t("Оплата поки вручну: після вибору тарифу напишіть нам — ключ додамо до вашого акаунта.");

async function render() {
  if (recovering) return show("reset");
  const { data } = await sb.auth.getSession();
  user = data.session?.user ?? null;
  if (!user) {
    show("auth");
    if (params.has("trial")) say($("#authHint"), t("Створіть акаунт — і отримаєте пробний ключ на 7 днів."), true);
    if (params.has("buy")) say($("#authHint"), t("Увійдіть або створіть акаунт — далі відкриється оплата."), true);
    if (params.has("trial") || params.has("buy")) setMode("up");
    return;
  }
  show("dash");
  $("#userEmail").textContent = user.email;
  await loadKeys();
  // Прийшли з кнопки на сайті: одразу виконати дію (лише раз)
  const plan = params.get("buy");
  if (plan && CONFIG.checkout[plan] !== undefined) { history.replaceState(null, "", "account.html"); buy(plan); }
  if (params.has("trial") && !keys.some(k => k.is_trial)) { history.replaceState(null, "", "account.html"); $("#trialBtn").click(); }
}

sb.auth.onAuthStateChange((event) => {
  if (event === "PASSWORD_RECOVERY") { recovering = true; show("reset"); }
  else if (event === "SIGNED_IN" || event === "SIGNED_OUT") setTimeout(render, 0);
});

langListeners.push(() => { setMode(mode); if (user) drawKeys(); });
initLang();
render();
