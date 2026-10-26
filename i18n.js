// Переклади сайту. Ключ — український текст зі сторінки, значення — [русский, English].
// Щоб змінити текст: виправте його в index.html (українською) і тут у ключі та перекладах.
const I18N = {
  // ---- Навігація й перший екран ----
  "Можливості": ["Возможности", "Features"],
  "Огляд": ["Обзор", "Overview"],
  "Переваги": ["Преимущества", "Why us"],
  "Ціни": ["Цены", "Pricing"],
  "Питання": ["Вопросы", "FAQ"],
  "Отримати": ["Получить", "Get it"],
  "Нова версія вже доступна": ["Новая версия уже доступна", "New version is out"],
  "Робочий стіл, який": ["Рабочий стол, который", "A desktop that"],
  "Desktop Organizer за секунду розкладає ярлики по категоріях, замінює панель завдань красивою панеллю, додає віджети й власне меню «Пуск» — і повністю зникає, коли ви граєте.":
    ["Desktop Organizer за секунду раскладывает ярлыки по категориям, заменяет панель задач красивой панелью, добавляет виджеты и своё меню «Пуск» — и полностью исчезает, когда вы играете.",
     "Desktop Organizer sorts your shortcuts into categories in a second, swaps the taskbar for a beautiful dock, adds widgets and its own Start menu — and fully disappears while you play."],
  "Купити ключ": ["Купить ключ", "Buy a key"],
  "Завантажити": ["Скачать", "Download"],
  "Windows 10 і 11": ["Windows 10 и 11", "Windows 10 & 11"],
  "Безпечно для ігор з античитом": ["Безопасно для игр с античитом", "Safe for anti-cheat games"],
  "🎮 Ігри": ["🎮 Игры", "🎮 Games"],
  "💼 Робота": ["💼 Работа", "💼 Work"],
  "🌐 Інтернет": ["🌐 Интернет", "🌐 Internet"],
  "📁 Документи": ["📁 Документы", "📁 Documents"],

  // ---- Біжучий рядок і цифри ----
  "Автосортування ярликів": ["Автосортировка ярлыков", "Auto-sorting shortcuts"],
  "Нижня панель": ["Нижняя панель", "Dock"],
  "Меню «Пуск»": ["Меню «Пуск»", "Start menu"],
  "11 віджетів": ["11 виджетов", "11 widgets"],
  "Ігровий режим": ["Игровой режим", "Game mode"],
  "Хмарна синхронізація": ["Облачная синхронизация", "Cloud sync"],
  "Скляні теми": ["Стеклянные темы", "Glass themes"],
  "Миттєвий пошук": ["Мгновенный поиск", "Instant search"],
  "Мікшер гучності": ["Микшер громкости", "Volume mixer"],
  "Гарячі клавіші": ["Горячие клавиши", "Hotkeys"],
  "щоб розкласти весь робочий стіл": ["чтобы разложить весь рабочий стол", "to tidy up the whole desktop"],
  "віджетів: погода, система, нотатки…": ["виджетов: погода, система, заметки…", "widgets: weather, system, notes…"],
  "мови інтерфейсу": ["языка интерфейса", "interface languages"],
  "наших вікон поверх гри": ["наших окон поверх игры", "of our windows over your game"],

  // ---- До / після ----
  "До і після": ["До и после", "Before & after"],
  "Потягніть повзунок — і побачите різницю": ["Потяните ползунок — и увидите разницу", "Drag the slider and see the difference"],
  "Сотня ярликів упереміш перетворюється на акуратні категорії. Без ручного перетягування.":
    ["Сотня ярлыков вперемешку превращается в аккуратные категории. Без ручного перетаскивания.",
     "A hundred scattered shortcuts turn into neat categories. No manual dragging."],
  "Після": ["После", "After"],
  "До": ["До", "Before"],

  // ---- Можливості ----
  "Усе, чого бракує Windows, — в одній програмі": ["Всё, чего не хватает Windows, — в одной программе", "Everything Windows is missing — in one app"],
  "Замість десятка утиліт — один легкий органайзер, який виглядає так, ніби його зробила сама Microsoft. Тільки красивіше.":
    ["Вместо десятка утилит — один лёгкий органайзер, который выглядит так, будто его сделала сама Microsoft. Только красивее.",
     "Instead of a dozen utilities — one lightweight organizer that looks like Microsoft made it. Only prettier."],
  "Категорії на робочому столі": ["Категории на рабочем столе", "Desktop categories"],
  "Ярлики самі розкладаються по групах: ігри, робота, інтернет, документи. Перетягуйте між категоріями, закріплюйте обране, створюйте портали в будь-яку папку.":
    ["Ярлыки сами раскладываются по группам: игры, работа, интернет, документы. Перетаскивайте между категориями, закрепляйте избранное, создавайте порталы в любую папку.",
     "Shortcuts sort themselves into groups: games, work, internet, documents. Drag between categories, pin favorites, create portals to any folder."],
  "Нижня панель замість панелі завдань": ["Нижняя панель вместо панели задач", "A dock instead of the taskbar"],
  "Закріплені й відкриті програми, мініатюри вікон при наведенні, перетягування значків, обране ★, трей, годинник, мова, мережа й гучність.":
    ["Закреплённые и открытые программы, миниатюры окон при наведении, перетаскивание значков, избранное ★, трей, часы, язык, сеть и громкость.",
     "Pinned and running apps, window previews on hover, drag-to-reorder, ★ favorites, tray, clock, language, network and volume."],
  "Власне меню «Пуск»": ["Своё меню «Пуск»", "Custom Start menu"],
  "Привітання, годинник, пошук, закріплені, нещодавні й усі програми. Відкривається клавішею Win з плавною анімацією.":
    ["Приветствие, часы, поиск, закреплённые, недавние и все программы. Открывается клавишей Win с плавной анимацией.",
     "Greeting, clock, search, pinned, recent and all apps. Opens with the Win key and a smooth animation."],
  "Годинник, погода, календар, нотатки, курси валют, система (процесор, відеокарта, температури), диски, мережа, ігровий час і не тільки.":
    ["Часы, погода, календарь, заметки, курсы валют, система (процессор, видеокарта, температуры), диски, сеть, игровое время и не только.",
     "Clock, weather, calendar, notes, currency rates, system (CPU, GPU, temperatures), disks, network, game time and more."],
  "Програми, файли, ігри Steam і Epic, програми з Microsoft Store — і калькулятор прямо в рядку пошуку.":
    ["Программы, файлы, игры Steam и Epic, приложения из Microsoft Store — и калькулятор прямо в строке поиска.",
     "Apps, files, Steam and Epic games, Microsoft Store apps — and a calculator right in the search box."],
  "Запустили гру — усі панелі зникають самі. Жодних оверлеїв над грою, жодних драйверів: Vanguard, VAC, EAC і BattlEye спокійні.":
    ["Запустили игру — все панели исчезают сами. Никаких оверлеев над игрой, никаких драйверов: Vanguard, VAC, EAC и BattlEye спокойны.",
     "Launch a game and every panel hides by itself. No overlays over the game, no drivers: Vanguard, VAC, EAC and BattlEye stay calm."],
  "Мікшер і трей": ["Микшер и трей", "Mixer & tray"],
  "Гучність кожної програми окремо, значки треї з назвами, перемикання мови й мережі — в оформленні вашої панелі.":
    ["Громкость каждой программы отдельно, значки трея с названиями, переключение языка и сети — в оформлении вашей панели.",
     "Per-app volume, labelled tray icons, language and network switching — all styled like your dock."],
  "Перевстановили Windows чи купили новий ПК? Введіть ключ — і категорії, панель та віджети повернуться.":
    ["Переустановили Windows или купили новый ПК? Введите ключ — и категории, панель и виджеты вернутся.",
     "Reinstalled Windows or got a new PC? Enter your key and your categories, dock and widgets come back."],
  "Теми й скло": ["Темы и стекло", "Themes & glass"],
  "Акрилове скло, власні кольори, заокруглення, прозорість, розмір значків. Налаштуйте під себе кожну панель.":
    ["Акриловое стекло, свои цвета, скругления, прозрачность, размер значков. Настройте под себя каждую панель.",
     "Acrylic glass, custom colors, corner radius, transparency, icon size. Make every panel your own."],

  // ---- Огляд ----
  "Подивіться, як це виглядає": ["Посмотрите, как это выглядит", "See how it looks"],
  "Віджети": ["Виджеты", "Widgets"],
  "Пошук": ["Поиск", "Search"],
  "⬇ Завантаження": ["⬇ Загрузки", "⬇ Downloads"],
  "🖼 Зображення": ["🖼 Изображения", "🖼 Pictures"],
  "🎵 Музика": ["🎵 Музыка", "🎵 Music"],
  "Закріплені": ["Закреплённые", "Pinned"],
  "Усі програми ›": ["Все программы ›", "All apps ›"],
  "Меню «Пуск», яке хочеться відкривати": ["Меню «Пуск», которое хочется открывать", "A Start menu you'll want to open"],
  "Клавіша Win відкриває саме його, сполучення Win+E, Win+D працюють як завжди":
    ["Клавиша Win открывает именно его, сочетания Win+E, Win+D работают как обычно", "The Win key opens it, while Win+E, Win+D work as usual"],
  "Пошук стрілками й Enter, пошук в Інтернеті, якщо програми немає":
    ["Поиск стрелками и Enter, поиск в интернете, если программы нет", "Arrow keys and Enter, web search when an app isn't found"],
  "Швидкі папки, нещодавні файли, сон, блокування, перезавантаження":
    ["Быстрые папки, недавние файлы, сон, блокировка, перезагрузка", "Quick folders, recent files, sleep, lock, restart"],
  "Правий клік: від імені адміністратора, розташування файлу, закріпити":
    ["Правый клик: от имени администратора, расположение файла, закрепить", "Right-click: run as admin, open file location, pin"],
  "Наведіть курсор на панель ↑": ["Наведите курсор на панель ↑", "Hover over the dock ↑"],
  "Панель, як у macOS, але для Windows": ["Панель как в macOS, но для Windows", "A macOS-style dock, made for Windows"],
  "Значки збільшуються під курсором, перетягуються мишею": ["Значки увеличиваются под курсором, перетаскиваются мышью", "Icons magnify under the cursor and drag with the mouse"],
  "Мініатюри відкритих вікон, «Згорнути» й «Закрити» з правого кліку":
    ["Миниатюры открытых окон, «Свернуть» и «Закрыть» по правому клику", "Open window previews, Minimize and Close from right-click"],
  "Знизу, зверху, зліва чи справа; будь-яка довжина й масштаб":
    ["Снизу, сверху, слева или справа; любая длина и масштаб", "Bottom, top, left or right; any length and scale"],
  "Може повністю замінити панель завдань Windows": ["Может полностью заменить панель задач Windows", "Can fully replace the Windows taskbar"],
  "Київ": ["Киев", "Kyiv"],
  "☁ Хмарно": ["☁ Облачно", "☁ Cloudy"],
  "Система": ["Система", "System"],
  "Нотатки": ["Заметки", "Notes"],
  "✔ Здати курсову": ["✔ Сдать курсовую", "✔ Hand in the project"],
  "✔ Купити ключ DO": ["✔ Купить ключ DO", "✔ Buy a DO key"],
  "☐ Навести лад на столі": ["☐ Навести порядок на столе", "☐ Tidy up the desktop"],
  "Ігровий час сьогодні": ["Игровое время сегодня", "Game time today"],
  "2 год 14 хв": ["2 ч 14 мин", "2 h 14 min"],
  "Віджети, які справді корисні": ["Виджеты, которые действительно полезны", "Widgets that are actually useful"],
  "Температура процесора й відеокарти, навантаження, пам'ять": ["Температура процессора и видеокарты, нагрузка, память", "CPU and GPU temperature, load, memory"],
  "Ресурс SSD і вільне місце на дисках": ["Ресурс SSD и свободное место на дисках", "SSD wear and free disk space"],
  "Скільки ви сьогодні грали — по кожній грі": ["Сколько вы сегодня играли — по каждой игре", "How long you played today — per game"],
  "Розставляйте мишею будь-де на робочому столі": ["Расставляйте мышью где угодно на рабочем столе", "Place them anywhere on the desktop"],
  "Калькулятор · Enter — скопіювати": ["Калькулятор · Enter — скопировать", "Calculator · Enter to copy"],
  "Програма": ["Программа", "App"],
  "Курсова робота.docx": ["Курсовая работа.docx", "Project report.docx"],
  "Документи": ["Документы", "Documents"],
  "Знайдіть що завгодно за пів секунди": ["Найдите что угодно за полсекунды", "Find anything in half a second"],
  "Одна гаряча клавіша — і пошук уже перед вами": ["Одна горячая клавиша — и поиск уже перед вами", "One hotkey and search is right there"],
  "Програми, ігри Steam/Epic, файли, налаштування": ["Программы, игры Steam/Epic, файлы, настройки", "Apps, Steam/Epic games, files, settings"],
  "Вбудований калькулятор": ["Встроенный калькулятор", "Built-in calculator"],
  "Нечіткий пошук: «tg» знайде Telegram": ["Нечёткий поиск: «tg» найдёт Telegram", "Fuzzy search: “tg” finds Telegram"],

  // ---- Скріншоти ----
  "Скріншоти": ["Скриншоты", "Screenshots"],
  "Так програма виглядає насправді": ["Так программа выглядит на самом деле", "What the app really looks like"],
  "Справжні знімки екрана, без монтажу. Натисніть, щоб збільшити.": ["Настоящие снимки экрана, без монтажа. Нажмите, чтобы увеличить.", "Real, unedited screenshots. Click to enlarge."],
  "Робочий стіл з категоріями й віджетами": ["Рабочий стол с категориями и виджетами", "Desktop with categories and widgets"],
  "Швидкий пошук": ["Быстрый поиск", "Quick search"],
  "Музична панель": ["Музыкальная панель", "Music bar"],
  "Налаштування": ["Настройки", "Settings"],
  "Навчання для новачків": ["Обучение для новичков", "Beginner tutorial"],

  // ---- Переваги ----
  "Чому саме ми": ["Почему именно мы", "Why us"],
  "Зроблено для тих, хто багато сидить за ПК": ["Сделано для тех, кто много сидит за ПК", "Made for people who live at their PC"],
  "Безпечно для ігор": ["Безопасно для игр", "Safe for gaming"],
  "Жодних драйверів ядра й хуків у чужі процеси. Під час гри органайзер ховає всі свої вікна, тож античит не бачить нічого підозрілого.":
    ["Никаких драйверов ядра и хуков в чужие процессы. Во время игры органайзер прячет все свои окна, так что античит не видит ничего подозрительного.",
     "No kernel drivers and no hooks into other processes. While you play, the organizer hides all its windows, so anti-cheat sees nothing suspicious."],
  "Легкий і швидкий": ["Лёгкий и быстрый", "Light and fast"],
  "Один файл без встановлення залежностей. Меню відкриваються миттєво, значки вантажаться у фоні.":
    ["Один файл без установки зависимостей. Меню открываются мгновенно, значки грузятся в фоне.",
     "A single file, no dependencies to install. Menus open instantly, icons load in the background."],
  "Оновлюється сам": ["Обновляется сам", "Updates itself"],
  "Нові можливості приходять автоматично — програма сама завантажить і встановить оновлення.":
    ["Новые возможности приходят автоматически — программа сама скачает и установит обновление.",
     "New features arrive automatically — the app downloads and installs updates by itself."],
  "Приватність": ["Приватность", "Privacy"],
  "Ваші файли нікуди не надсилаються. У хмару йдуть лише налаштування — і тільки під вашим ключем.":
    ["Ваши файлы никуда не отправляются. В облако уходят только настройки — и только под вашим ключом.",
     "Your files never leave your PC. Only settings go to the cloud — and only under your key."],
  "Пошук, робочий стіл, панель, медіа-панель — усе на клавішах, які ви оберете самі.":
    ["Поиск, рабочий стол, панель, медиа-панель — всё на клавишах, которые вы выберете сами.",
     "Search, desktop, dock, media bar — all on keys you choose yourself."],
  "Живий розробник": ["Живой разработчик", "A real developer"],
  "Знайшли помилку чи маєте ідею? Надішліть прямо з програми — ми читаємо кожне повідомлення.":
    ["Нашли ошибку или есть идея? Отправьте прямо из программы — мы читаем каждое сообщение.",
     "Found a bug or have an idea? Send it right from the app — we read every message."],

  // ---- Як почати ----
  "Як почати": ["Как начать", "Get started"],
  "Три кроки до чистого робочого столу": ["Три шага к чистому рабочему столу", "Three steps to a clean desktop"],
  "Отримайте ключ": ["Получите ключ", "Get a key"],
  "Оберіть тариф і напишіть нам у Telegram — ключ надішлемо одразу після оплати.":
    ["Выберите тариф и напишите нам в Telegram — ключ пришлём сразу после оплаты.", "Pick a plan and message us on Telegram — we'll send your key right after payment."],
  "Завантажте програму": ["Скачайте программу", "Download the app"],
  "Один файл, без встановлювача. Запустіть і введіть ключ.": ["Один файл, без установщика. Запустите и введите ключ.", "One file, no installer. Run it and enter your key."],
  "Насолоджуйтесь": ["Наслаждайтесь", "Enjoy"],
  "Майстер першого запуску сам розкладе ярлики й покаже, що де.":
    ["Мастер первого запуска сам разложит ярлыки и покажет, что где.", "The first-run wizard sorts your shortcuts and shows you around."],

  // ---- Ціни ----
  "Оберіть свій тариф": ["Выберите свой тариф", "Choose your plan"],
  "Усі можливості в кожному тарифі. Різниця лише в терміні дії.":
    ["Все возможности в каждом тарифе. Разница только в сроке действия.", "Every feature in every plan. The only difference is how long it lasts."],
  "3 місяці": ["3 месяца", "3 months"],
  "/ 90 днів": ["/ 90 дней", "/ 90 days"],
  "Усі можливості": ["Все возможности", "All features"],
  "Оновлення": ["Обновления", "Updates"],
  "Назавжди": ["Навсегда", "Lifetime"],
  "один раз": ["один раз", "one-time"],
  "Оновлення назавжди": ["Обновления навсегда", "Lifetime updates"],
  "Без підписок і продовжень": ["Без подписок и продлений", "No subscriptions or renewals"],
  "7 днів безкоштовно": ["7 дней бесплатно", "7 days free"],
  "Створіть акаунт — і пробний ключ з'явиться в особистому кабінеті одразу.":
    ["Создайте аккаунт — и пробный ключ сразу появится в личном кабинете.",
     "Create an account and your trial key appears in your dashboard right away."],
  "Спробувати безкоштовно": ["Попробовать бесплатно", "Try it free"],
  "Обрати": ["Выбрать", "Choose"],
  "Найвигідніше": ["Выгоднее всего", "Best value"],
  "Рік": ["Год", "1 year"],
  "/ 365 днів": ["/ 365 дней", "/ 365 days"],
  "Економія": ["Экономия", "Save"],
  "проти оплати за 3 місяці": ["по сравнению с оплатой за 3 месяца", "compared to paying every 3 months"],

  // ---- Питання ----
  "Часті запитання": ["Частые вопросы", "Frequently asked questions"],
  "Мене не забанять у Valorant чи CS2?": ["Меня не забанят в Valorant или CS2?", "Will I get banned in Valorant or CS2?"],
  "Програму зроблено з урахуванням античитів: вона не використовує драйвери ядра й не втручається в процеси ігор. Під час гри всі її вікна ховаються, а перехоплення клавіш вимикається повністю.":
    ["Программа сделана с учётом античитов: она не использует драйверы ядра и не вмешивается в процессы игр. Во время игры все её окна прячутся, а перехват клавиш полностью выключается.",
     "The app is built with anti-cheat in mind: it uses no kernel drivers and never touches game processes. While you play, all its windows hide and key interception turns off completely."],
  "Що буде з моїми ярликами?": ["Что будет с моими ярлыками?", "What happens to my shortcuts?"],
  "Файли лишаються на місці — органайзер лише показує їх у категоріях. Вимкнули програму — робочий стіл такий, як був.":
    ["Файлы остаются на месте — органайзер только показывает их в категориях. Выключили программу — рабочий стол такой, как был.",
     "Files stay where they are — the organizer only shows them in categories. Turn the app off and your desktop is just as it was."],
  "Чи можна залишити звичайну панель завдань Windows?": ["Можно ли оставить обычную панель задач Windows?", "Can I keep the regular Windows taskbar?"],
  "Так. Заміна панелі завдань і власне меню «Пуск» вмикаються окремо в налаштуваннях — за замовчуванням Windows виглядає як звикли.":
    ["Да. Замена панели задач и своё меню «Пуск» включаются отдельно в настройках — по умолчанию Windows выглядит как привыкли.",
     "Yes. Replacing the taskbar and the custom Start menu are separate options in settings — by default Windows looks the way you're used to."],
  "Скільки комп'ютерів на один ключ?": ["Сколько компьютеров на один ключ?", "How many PCs per key?"],
  "Ключ прив'язується до одного комп'ютера. Купили новий ПК — напишіть нам, і ми перенесемо ключ.":
    ["Ключ привязывается к одному компьютеру. Купили новый ПК — напишите нам, и мы перенесём ключ.",
     "A key is tied to one PC. Got a new one? Message us and we'll move your key."],
  "Програма гальмує систему?": ["Программа тормозит систему?", "Does it slow my PC down?"],
  "Ні. Вона легка, а дані про систему для віджетів читає без важких служб і драйверів.":
    ["Нет. Она лёгкая, а данные о системе для виджетов читает без тяжёлых служб и драйверов.",
     "No. It's lightweight and reads system data for widgets without heavy services or drivers."],
  "Як отримати оновлення?": ["Как получить обновления?", "How do I get updates?"],
  "Автоматично: програма сама перевіряє нові версії й пропонує оновитися в один клік.":
    ["Автоматически: программа сама проверяет новые версии и предлагает обновиться в один клик.",
     "Automatically: the app checks for new versions and offers a one-click update."],

  // ---- Особистий кабінет ----
  "Кабінет": ["Кабинет", "Account"],
  "← На сайт": ["← На сайт", "← Back to site"],
  "Особистий кабінет": ["Личный кабинет", "Your account"],
  "Увійдіть, щоб побачити свої ключі, отримати пробний період або купити тариф.":
    ["Войдите, чтобы увидеть свои ключи, получить пробный период или купить тариф.", "Sign in to see your keys, get a free trial or buy a plan."],
  "Вхід": ["Вход", "Sign in"],
  "Реєстрація": ["Регистрация", "Sign up"],
  "Пошта": ["Почта", "Email"],
  "Пароль": ["Пароль", "Password"],
  "Увійти": ["Войти", "Sign in"],
  "Створити акаунт": ["Создать аккаунт", "Create account"],
  "Забули пароль?": ["Забыли пароль?", "Forgot password?"],
  "Новий пароль": ["Новый пароль", "New password"],
  "Зберегти пароль": ["Сохранить пароль", "Save password"],
  "Вийти": ["Выйти", "Sign out"],
  "Мої ключі": ["Мои ключи", "My keys"],
  "Ключів поки немає. Отримайте пробний на 7 днів або оберіть тариф.":
    ["Ключей пока нет. Получите пробный на 7 дней или выберите тариф.", "No keys yet. Get a 7-day trial or choose a plan."],
  "Додати ключ": ["Добавить ключ", "Add key"],
  "Купили ключ раніше? Додайте його, щоб він зберігався в кабінеті.":
    ["Купили ключ раньше? Добавьте его, чтобы он хранился в кабинете.", "Bought a key earlier? Add it to keep it in your account."],
  "🎁 7 днів безкоштовно": ["🎁 7 дней бесплатно", "🎁 7 days free"],
  "Один пробний ключ на акаунт і на комп'ютер.": ["Один пробный ключ на аккаунт и на компьютер.", "One trial key per account and per PC."],
  "Отримати пробний ключ": ["Получить пробный ключ", "Get a trial key"],
  "Як активувати": ["Как активировать", "How to activate"],
  "Завантажте програму й запустіть її.": ["Скачайте программу и запустите её.", "Download the app and run it."],
  "Скопіюйте ключ і вставте у вікні активації.": ["Скопируйте ключ и вставьте в окне активации.", "Copy your key and paste it into the activation window."],
  "Готово — ключ прив'яжеться до цього комп'ютера.": ["Готово — ключ привяжется к этому компьютеру.", "Done — the key is bound to that PC."],
  "Купити або продовжити": ["Купить или продлить", "Buy or renew"],
  "Після оплати ключ з'явиться тут автоматично (зазвичай за хвилину). Оновіть сторінку, якщо його ще немає.":
    ["После оплаты ключ появится здесь автоматически (обычно за минуту). Обновите страницу, если его ещё нет.",
     "After payment your key appears here automatically (usually within a minute). Refresh the page if it isn't there yet."],
  "Оплата поки вручну: після вибору тарифу напишіть нам — ключ додамо до вашого акаунта.":
    ["Оплата пока вручную: после выбора тарифа напишите нам — ключ добавим к вашему аккаунту.",
     "Payment is manual for now: after choosing a plan, message us and we'll add the key to your account."],
  "Завантаження…": ["Загрузка…", "Loading…"],
  "Невірна пошта або пароль.": ["Неверная почта или пароль.", "Wrong email or password."],
  "Спочатку підтвердіть пошту — ми надіслали лист із посиланням.": ["Сначала подтвердите почту — мы отправили письмо со ссылкой.", "Please confirm your email first — we sent you a link."],
  "Цю пошту вже зареєстровано. Увійдіть.": ["Эта почта уже зарегистрирована. Войдите.", "This email is already registered. Please sign in."],
  "Пароль має містити щонайменше 8 символів.": ["Пароль должен содержать минимум 8 символов.", "The password must be at least 8 characters."],
  "Забагато спроб. Зачекайте кілька хвилин.": ["Слишком много попыток. Подождите несколько минут.", "Too many attempts. Please wait a few minutes."],
  "Пробний період уже використано.": ["Пробный период уже использован.", "The free trial has already been used."],
  "Такого ключа немає або він уже доданий до іншого акаунта.": ["Такого ключа нет или он уже добавлен к другому аккаунту.", "This key doesn't exist or already belongs to another account."],
  "Немає з'єднання. Перевірте інтернет.": ["Нет соединения. Проверьте интернет.", "No connection. Check your internet."],
  "Сервер ще не оновлено (update_1.21.sql).": ["Сервер ещё не обновлён (update_1.21.sql).", "The server hasn't been updated yet (update_1.21.sql)."],
  "Майже готово! Відкрийте лист, який ми надіслали на пошту, і підтвердіть акаунт.":
    ["Почти готово! Откройте письмо, которое мы отправили на почту, и подтвердите аккаунт.", "Almost done! Open the email we sent you and confirm your account."],
  "Вкажіть пошту — надішлемо посилання для нового пароля.": ["Укажите почту — пришлём ссылку для нового пароля.", "Enter your email and we'll send a password reset link."],
  "Лист для зміни пароля надіслано.": ["Письмо для смены пароля отправлено.", "Password reset email sent."],
  "Пароль змінено.": ["Пароль изменён.", "Password changed."],
  "Заблоковано": ["Заблокирован", "Blocked"],
  "Термін минув": ["Срок истёк", "Expired"],
  "Не активовано": ["Не активирован", "Not activated"],
  "дн. після активації": ["дн. после активации", "days after activation"],
  "безстроковий": ["бессрочный", "lifetime"],
  "Активний": ["Активен", "Active"],
  "Активний до": ["Активен до", "Active until"],
  "Пробний": ["Пробный", "Trial"],
  "Копіювати": ["Копировать", "Copy"],
  "Скопійовано ✓": ["Скопировано ✓", "Copied ✓"],
  "Пробний ключ готовий! Скопіюйте його й вставте в програмі.": ["Пробный ключ готов! Скопируйте его и вставьте в программе.", "Your trial key is ready! Copy it and paste it into the app."],
  "Дякуємо за покупку! Ключ з'явиться тут за кілька секунд.": ["Спасибо за покупку! Ключ появится здесь через несколько секунд.", "Thanks for your purchase! Your key will appear here in a few seconds."],
  "Ключ додано до акаунта.":["Ключ добавлен к аккаунту.", "Key added to your account."],
  "Створіть акаунт — і отримаєте пробний ключ на 7 днів.": ["Создайте аккаунт — и получите пробный ключ на 7 дней.", "Create an account to get a 7-day trial key."],
  "Увійдіть або створіть акаунт — далі відкриється оплата.": ["Войдите или создайте аккаунт — дальше откроется оплата.", "Sign in or create an account — payment opens next."],

  // ---- Фінал і підвал ----
  "Наведіть лад на робочому столі": ["Наведите порядок на рабочем столе", "Tidy up your desktop"],
  "вже сьогодні": ["уже сегодня", "today"],
  "Хвилина на встановлення — і ви більше не шукатимете ярлики.":
    ["Минута на установку — и вы больше не будете искать ярлыки.", "One minute to set up — and you'll never hunt for shortcuts again."],
  "Desktop Organizer. Усі права захищено.": ["Desktop Organizer. Все права защищены.", "Desktop Organizer. All rights reserved."],
  "Зв'язатися з нами": ["Связаться с нами", "Contact us"],
  "Умови й конфіденційність": ["Условия и конфиденциальность", "Terms & Privacy"],
  "Повернення коштів": ["Возврат средств", "Refunds"],
};

// Тексти, які змінюються з коду (заголовок, що друкується, годинники, «безлад» тощо)
const I18N_DYN = {
  uk: {
    locale: "uk-UA", title: "Desktop Organizer — порядок на робочому столі за секунду",
    description: "Desktop Organizer сам розкладає ярлики по категоріях, замінює панель завдань красивою панеллю, додає віджети, власне меню «Пуск» і ховається в іграх.",
    typed: ["наводить лад сам", "виглядає дорого", "не заважає в іграх", "працює на вас"],
    search: ["Telegram", "Steam", "Калькулятор", "Документи"],
    hello: ["Доброго ранку!", "Добрий день!", "Добрий вечір!", "Доброї ночі!"],
    sec: " с",
    mess: ["Новий документ (3)", "setup.exe", "фото_2024", "Курсова_фінал_ОСТАННЯ", "Гра", "скрін", "archive.zip", "Без назви", "Telegram", "Нова папка (7)", "резюме", "music"],
  },
  ru: {
    locale: "ru-RU", title: "Desktop Organizer — порядок на рабочем столе за секунду",
    description: "Desktop Organizer сам раскладывает ярлыки по категориям, заменяет панель задач красивой панелью, добавляет виджеты, своё меню «Пуск» и прячется в играх.",
    typed: ["наводит порядок сам", "выглядит дорого", "не мешает в играх", "работает на вас"],
    search: ["Telegram", "Steam", "Калькулятор", "Документы"],
    hello: ["Доброе утро!", "Добрый день!", "Добрый вечер!", "Доброй ночи!"],
    sec: " с",
    mess: ["Новый документ (3)", "setup.exe", "фото_2024", "Курсовая_финал_ПОСЛЕДНЯЯ", "Игра", "скрин", "archive.zip", "Без названия", "Telegram", "Новая папка (7)", "резюме", "music"],
  },
  en: {
    locale: "en-US", title: "Desktop Organizer — a tidy desktop in one second",
    description: "Desktop Organizer sorts shortcuts into categories, replaces the taskbar with a beautiful dock, adds widgets and a custom Start menu, and hides while you play.",
    typed: ["tidies itself up", "looks premium", "stays out of your games", "works for you"],
    search: ["Telegram", "Steam", "Calculator", "Documents"],
    hello: ["Good morning!", "Good afternoon!", "Good evening!", "Good night!"],
    sec: " s",
    mess: ["New document (3)", "setup.exe", "photo_2024", "Project_final_FINAL", "Game", "screenshot", "archive.zip", "Untitled", "Telegram", "New folder (7)", "resume", "music"],
  },
};

// ================= Перемикання мови (спільне для всіх сторінок) =================
const LANGS = ["uk", "ru", "en"];
let lang = "uk";
const dyn = () => I18N_DYN[lang];
const langListeners = [];
const i18nNodes = [];

function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(fromUrl)) return fromUrl;
  try { const saved = localStorage.getItem("lang"); if (LANGS.includes(saved)) return saved; } catch { }
  for (const l of (navigator.languages || [navigator.language || ""]).map(x => x.toLowerCase())) {
    if (l.startsWith("uk")) return "uk";
    if (l.startsWith("ru") || l.startsWith("be") || l.startsWith("kk")) return "ru";
  }
  return "en";
}

/** Переклад рядка з коду: t("Український текст") → поточною мовою. */
function t(uk) {
  const tr = I18N[uk];
  return lang === "uk" || !tr ? uk : tr[lang === "ru" ? 0 : 1];
}

function setLang(l) {
  lang = l;
  i18nNodes.forEach(n => n.node.nodeValue = l === "uk" ? n.orig : n.orig.replace(n.key, t(n.key)));
  document.documentElement.lang = l;
  if (document.body.dataset.page !== "account") {
    document.title = dyn().title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", dyn().description);
  }
  document.querySelectorAll(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === l));
  try { localStorage.setItem("lang", l); } catch { }
  langListeners.forEach(f => f());
}

/** Запам'ятати українські тексти сторінки, під'єднати кнопки мов і застосувати мову. */
function initLang() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: n => n.parentElement.closest("script, style, svg, [data-no-i18n]") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  for (let n; (n = walker.nextNode());) {
    const key = n.nodeValue.trim();
    if (key && I18N[key]) i18nNodes.push({ node: n, orig: n.nodeValue, key });
  }
  document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
  setLang(detectLang());
}
