// ================= НАЛАШТУВАННЯ САЙТУ (змінюйте тут) =================
const CONFIG = {
  // Ціни тарифів у доларах (лише для показу; справжню ціну бере платіжна система)
  prices: { quarter: 2.99, year: 6.99, forever: 14.99 },

  // Оплата через Paddle. Поки порожньо — кнопки «Обрати» ведуть на contactUrl (оплата вручну).
  paddle: {
    // Client-side token: Paddle → Developer tools → Authentication. «test_…» — тестовий режим (sandbox), «live_…» — справжні оплати.
    // Цей токен публічний (призначений для сайту). API-ключ і секрет сповіщень сюди НЕ додавати.
    // Порожньо — оплата вручну через Telegram (contactUrl). Тестовий токен: test_c01908f86bd05c25bb3e2da8286
    token: "",
    // ID цін («pri_…»): Paddle → Catalog → Products → ціна кожного тарифу
    prices: { quarter: "pri_01m5w7yfdq4kg1szdsz4q35jwd", year: "pri_01m5w7zy0hadnpnkvfrvptg49b", forever: "pri_01m5w817vfa787wsvy7d6tveqe" },
  },

  // Куди писати вручну: ваш Telegram, Instagram тощо
  contactUrl: "https://t.me/sidorenko1001",

  // Пошта підтримки на сторінці умов (платіжні системи вимагають контакт). Порожньо — не показувати
  supportEmail: "",

  // Пряме завантаження останньої версії з GitHub Releases
  downloadUrl: "https://github.com/sidorenko66775-cpu/DesktopOrganizer/releases/latest/download/DesktopOrganizer.exe",

  // Supabase (той самий проєкт, що й у програмі). Publishable-ключ публічний — його можна показувати.
  // Секретний ключ (service_role / secret) сюди НІКОЛИ не додавати.
  supabaseUrl: "https://dgkuxlusuhmzheofemyi.supabase.co",
  supabaseKey: "sb_publishable_07QY-Myx9kZ26hOz4ggt7w_dMV0QxU9",
};
// =====================================================================

const hasCheckout = plan => !!(CONFIG.paddle.token && CONFIG.paddle.prices[plan]);
