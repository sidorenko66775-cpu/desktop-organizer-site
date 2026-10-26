// Налаштування (ціни, посилання, оплата) — у config.js

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// ---------- Ціни, посилання ----------
$$("[data-price]").forEach(el => el.textContent = "$" + CONFIG.prices[el.dataset.price]);
// Рік проти чотирьох оплат по 3 місяці
$$("[data-save]").forEach(el => el.textContent = Math.max(0, Math.round(100 - CONFIG.prices.year / (CONFIG.prices.quarter * 4) * 100)) + "%");
// «Обрати»: з налаштованою оплатою — через особистий кабінет (вхід → оплата), інакше — написати вручну
$$("[data-buy]").forEach(a => {
  if (hasCheckout(a.dataset.buy)) a.href = `account.html?buy=${a.dataset.buy}`;
  else { a.href = CONFIG.contactUrl; a.target = "_blank"; a.rel = "noopener"; }
});
$$("[data-contact]").forEach(a => { a.href = CONFIG.contactUrl; a.target = "_blank"; a.rel = "noopener"; });
$$("[data-trial]").forEach(a => a.href = "account.html?trial=1");
$$("[data-download]").forEach(a => a.href = CONFIG.downloadUrl);
$("#year").textContent = new Date().getFullYear();

// ---------- Навігація ----------
const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20), { passive: true });
$("#burger").addEventListener("click", () => nav.classList.toggle("open"));
$$(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

// ---------- Поява при прокручуванні (сусіди — по черзі) ----------
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const siblings = $$(":scope > .reveal", e.target.parentElement);
    e.target.style.setProperty("--rd", Math.max(0, siblings.indexOf(e.target)) * 0.08 + "s");
    e.target.classList.add("in");
    io.unobserve(e.target);
  });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
$$(".reveal").forEach(el => io.observe(el));
// index.html?all — показати все одразу (для знімків сторінки)
if (location.search.includes("all")) $$(".reveal").forEach(el => el.classList.add("in"));

// ---------- Лічильники ----------
const suffixOf = el => el.dataset.suffix === "sec" ? dyn().sec : "";
const countIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, to = +el.dataset.count;
    const start = performance.now(), dur = reduce ? 1 : 1400;
    (function tick(now) {
      const p = Math.min(1, (now - start) / dur), v = Math.round(to * (1 - Math.pow(1 - p, 3)));
      el.textContent = v + suffixOf(el);
      if (p < 1) requestAnimationFrame(tick); else el.dataset.done = "1";
    })(start);
    countIO.unobserve(el);
  });
}, { threshold: 0.6 });
$$("[data-count]").forEach(el => countIO.observe(el));
langListeners.push(() => $$("[data-count][data-done]").forEach(el => el.textContent = el.dataset.count + suffixOf(el)));

// ---------- Друкований заголовок ----------
const typed = $("#typed");
const ty = { pi: 0, ci: 0, del: true };
langListeners.push(() => { ty.pi = 0; ty.ci = dyn().typed[0].length; ty.del = true; typed.textContent = dyn().typed[0]; });
if (!reduce) {
  const step = () => {
    const phrases = dyn().typed, word = phrases[ty.pi];
    ty.ci = Math.min(word.length, ty.ci + (ty.del ? -1 : 1));
    typed.textContent = word.slice(0, ty.ci);
    let wait = ty.del ? 35 : 70;
    if (!ty.del && ty.ci === word.length) { ty.del = true; wait = 2200; }
    else if (ty.del && ty.ci <= 0) { ty.del = false; ty.pi = (ty.pi + 1) % phrases.length; wait = 300; }
    setTimeout(step, wait);
  };
  setTimeout(step, 2600);
}

// ---------- Годинники в макетах ----------
function clocks() {
  const d = new Date(), loc = dyn().locale;
  const t = d.toLocaleTimeString(loc, { hour: "2-digit", minute: "2-digit" });
  const day = d.toLocaleDateString(loc, { weekday: "long", day: "numeric", month: "long" });
  ["#mockTime", "#dockTime", "#wmTime"].forEach(s => { const el = $(s); if (el) el.textContent = t; });
  ["#mockDate", "#wmDate"].forEach(s => { const el = $(s); if (el) el.textContent = day; });
}
langListeners.push(clocks);
setInterval(clocks, 15000);

// ---------- Світіння за курсором, нахил макета, магнітні кнопки ----------
const glow = $(".cursor-glow");
const screen = $(".screen.tilt");
const fine = matchMedia("(pointer: fine)").matches;
if (fine && !reduce) {
  addEventListener("pointermove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }, { passive: true });

  const hv = $("#heroVisual");
  hv.addEventListener("pointermove", e => {
    const r = hv.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    screen.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 10}deg)`;
  });
  hv.addEventListener("pointerleave", () => screen.style.transform = "");

  $$(".magnetic").forEach(b => {
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .35}px)`;
    });
    b.addEventListener("pointerleave", () => b.style.transform = "");
  });

  // Картки: підсвітка за курсором і легкий 3D-нахил
  $$(".tilt-card").forEach(c => {
    c.addEventListener("pointermove", e => {
      const r = c.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      c.style.setProperty("--mx", x + "px");
      c.style.setProperty("--my", y + "px");
      c.style.transform = `perspective(800px) rotateY(${(x / r.width - .5) * 8}deg) rotateX(${-(y / r.height - .5) * 8}deg) translateY(-4px)`;
    });
    c.addEventListener("pointerleave", () => c.style.transform = "");
  });
}

// ---------- До / після ----------
const mess = $("#mess");
const colors = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12"];
const messLabels = [];
let seed = 7;
const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
for (let i = 0; i < 44; i++) {
  const x = 2 + rnd() * 92, y = 3 + rnd() * 80;
  const t = document.createElement("i");
  t.className = "t " + colors[i % colors.length];
  t.style.left = x + "%"; t.style.top = y + "%";
  t.style.transform = `rotate(${(rnd() - .5) * 16}deg)`;
  mess.appendChild(t);
  if (i % 3 === 0) {
    const l = document.createElement("span");
    l.className = "lbl"; l.dataset.n = i % 12;
    l.style.left = `calc(${x}% - 11px)`; l.style.top = `calc(${y}% + 40px)`;
    mess.appendChild(l);
    messLabels.push(l);
  }
}
langListeners.push(() => messLabels.forEach(l => l.textContent = dyn().mess[l.dataset.n]));
const range = $("#cmpRange"), before = $("#cmpBefore"), handle = $("#cmpHandle");
const setCmp = v => { before.style.clipPath = `inset(0 ${100 - v}% 0 0)`; handle.style.left = v + "%"; };
range.addEventListener("input", () => setCmp(range.value));
setCmp(50);
// Підказка: повзунок сам «проїжджає», коли блок з'являється на екрані
if (!reduce) {
  const cmpIO = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    cmpIO.disconnect();
    const start = performance.now();
    (function anim(now) {
      const p = Math.min(1, (now - start) / 1800);
      setCmp(50 + Math.sin(p * Math.PI * 2) * 30 * (1 - p));
      if (p < 1) requestAnimationFrame(anim); else range.value = 50;
    })(start);
  }, { threshold: 0.5 });
  cmpIO.observe($("#compareBox"));
}

// ---------- Вкладки огляду ----------
const tabs = $$(".tab"), panes = $$(".pane"), ink = $("#tabInk");
function moveInk(t) { ink.style.width = t.offsetWidth + "px"; ink.style.transform = `translateX(${t.offsetLeft}px)`; }
tabs.forEach(t => t.addEventListener("click", () => {
  tabs.forEach(x => x.classList.toggle("active", x === t));
  panes.forEach((p, i) => p.classList.toggle("active", i === +t.dataset.tab));
  moveInk(t);
}));
addEventListener("load", () => moveInk($(".tab.active")));
addEventListener("resize", () => moveInk($(".tab.active")));
langListeners.push(() => requestAnimationFrame(() => moveInk($(".tab.active")))); // назви вкладок змінили ширину
$$(".sm-grid .t").forEach((t, i) => t.style.setProperty("--n", i));
$$(".spark i").forEach((t, i) => t.style.setProperty("--k", i));

// ---------- Збільшення значків панелі під курсором (як у справжній програмі) ----------
$$(".dock").forEach(dock => {
  const icons = $$(".dk", dock);
  dock.addEventListener("pointermove", e => {
    icons.forEach(ic => {
      const r = ic.getBoundingClientRect();
      const d = Math.abs(e.clientX - (r.left + r.width / 2));
      const s = 1 + Math.max(0, 1 - d / 110) * .55;
      ic.style.transform = `scale(${s}) translateY(${-(s - 1) * 14}px)`;
    });
  });
  dock.addEventListener("pointerleave", () => icons.forEach(ic => ic.style.transform = ""));
});

// ---------- Справжні знімки: мовою сайту, збільшення кліком ----------
langListeners.push(() => $$("img[data-shot]").forEach(img => img.src = `img/${lang}/${img.dataset.shot}`));
const lightbox = $("#lightbox");
$$("img[data-shot]").forEach(img => img.addEventListener("click", () => {
  $("img", lightbox).src = img.src;
  lightbox.hidden = false;
}));
lightbox.addEventListener("click", () => lightbox.hidden = true);
addEventListener("keydown", e => { if (e.key === "Escape") lightbox.hidden = true; });

initLang();
