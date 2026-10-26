// ================= НАЛАШТУВАННЯ САЙТУ (змінюйте тут) =================
const CONFIG = {
  // Ціни тарифів у доларах (лише для показу; справжню ціну бере платіжна система)
  prices: { quarter: 2.99, year: 6.99, forever: 14.99 },

  // Посилання на оплату Lemon Squeezy для кожного тарифу (Products → Share → Checkout link).
  // Поки порожньо — кнопки «Обрати» ведуть на contactUrl (оплата вручну).
  checkout: { quarter: "", year: "", forever: "" },

  // Куди писати вручну: ваш Telegram, Instagram тощо
  contactUrl: "https://t.me/your_username",

  // Пряме завантаження останньої версії з GitHub Releases
  downloadUrl: "https://github.com/sidorenko66775-cpu/DesktopOrganizer/releases/latest/download/DesktopOrganizer.exe",

  // Supabase (той самий проєкт, що й у програмі). Publishable-ключ публічний — його можна показувати.
  // Секретний ключ (service_role / secret) сюди НІКОЛИ не додавати.
  supabaseUrl: "https://dgkuxlusuhmzheofemyi.supabase.co",
  supabaseKey: "sb_publishable_07QY-Myx9kZ26hOz4ggt7w_dMV0QxU9",
};
// =====================================================================

const hasCheckout = plan => !!CONFIG.checkout[plan];
