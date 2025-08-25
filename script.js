document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Fade-in sections on scroll
    const sections = document.querySelectorAll('.section-animate');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

const modal = document.getElementById('myModal');
const modalBody = document.getElementById('modal-body');

function openModal(projectId) {
    let content = '';
    if (projectId === 'animelight') {
        content = `
            <h3>🚀 Стань частью AnimeLight Forum!</h3>
            <p>🔥 <strong>Готовый проект</strong>: Современное веб-приложение на Vue 3 (Composition API) с Vuex 4, Firebase и TailwindCSS. Это стильный и функциональный форум для любителей аниме с огромным потенциалом роста.</p>
            <p>💸 <strong>Что уже работает</strong>: Полноценное приложение с гибкой разработкой, управлением состоянием через Vuex 4, надежным бэкендом на Firebase и красивым интерфейсом на TailwindCSS.</p>
            <p>💰 <strong>Как заработать?</strong></p>
            <ul>
                <li>📈 Текущая монетизация через встроенные функции приложения (подписки, реклама).</li>
                <li>🪙 Будущий маркетплейс с собственной криптовалютой <strong>Preycoins</strong>.</li>
                <li>🤝 Стань инвестором или соучредителем — получай ежемесячные дивиденды!</li>
            </ul>
            <p>❗️ <strong>Инвестиции</strong>: Для завершения проекта мне нужно 60 000 рублей. Подробности, зачем нужны эти средства, я объясняю в <a href="https://youtu.be/FNgbs8kc544" target="_blank">видео</a>. Распределение бюджета:</p>
            <ul>
                <li>50% — 🖥️ Облачный сервер: Для быстрой и стабильной работы приложения даже при тысячах пользователей.</li>
                <li>30% — 🗄️ Firebase: Оплата базы данных для хранения контента и поддержки высокого трафика.</li>
                <li>20% — 🌐 Домен, SSL и CDN: Домен — запоминающийся адрес сайта, SSL — защита данных пользователей, CDN — ускорение загрузки контента по всему миру.</li>
            </ul>
            <p>🤝 <strong>Для инвесторов</strong>: Ваши вложения помогут запустить проект на полную мощность. Вы будете получать <strong>ежемесячные дивиденды</strong> от прибыли. Можно стать <strong>соучредителем</strong> и развивать проект вместе, деля успех поровну!</p>
            <p>🚀 <strong>Будущее проекта</strong>: Превращение в полноценную социальную сеть с маркетплейсом. Внедрим <strong>Preycoins</strong> и выведем их на фондовые рынки. Пользователи смогут покупать и продавать арты через <strong>NFT</strong>, открывая новые способы заработка.</p>
            <p>💡 <strong>Заработок уже сейчас</strong>: В <a href="https://youtu.be/FNgbs8kc544" target="_blank">видео</a> я объясняю, как выйти на стабильный доход за 2 месяца! Смотрите до конца, чтобы узнать все детали.</p>
            <p>🌟 <strong>Возможности</strong>: Реальный заработок, криптовалюта, NFT, инвестиции и дивиденды!</p>
            <p><strong>Ссылки</strong>:<br>
            - 🌐 Сайт: <a href="https://animelights.onrender.com" target="_blank">AnimeLight Forum</a><br>
            - 📱 Telegram: <a href="https://t.me/animelightsforum" target="_blank">t.me/animelightsforum</a><br>
            - 🎬 Демо: <a href="https://drive.google.com/file/d/18bk-6PQrq0ua262J-TSD7o9IDnWxrzVM/view" target="_blank">Смотреть демо</a></p>
            <a href="https://t.me/animelightsforum" class="btn" target="_blank">📞 Связаться</a>
            <a href="#" class="btn" onclick="closeModal()">Закрыть</a>
        `;
    } else if (projectId === 'newforum') {
        content = `
            <h3>🚀 Новый форум для фанатов аниме!</h3>
            <p>🌟 <strong>Готовый проект</strong>: Аналог AnimeLight Forum на Nuxt 3, Pinia 3, Appwrite и TailwindCSS. Форум для фанатов аниме, манги и поп-культуры, адаптированный под российские сервисы.</p>
            <p>🇷🇺 <strong>Почему я создал аналог?</strong>: Из-за ограничений SWIFT в России зарубежные сервисы стали недоступны. Этот проект использует российские сервисы, чтобы быть стабильным и удобным для пользователей.</p>
            <p>💸 <strong>Что уже работает</strong>: Рабочий прототип с ключевыми функциями форума. Современный интерфейс, быстрая загрузка и безопасное хранение данных.</p>
            <p>💰 <strong>Как заработать?</strong></p>
            <ul>
                <li>📈 Текущая монетизация через подписки, рекламу и партнерские программы.</li>
                <li>🪙 Будущий маркетплейс с собственной криптовалютой <strong>Preycoins</strong>.</li>
                <li>🤝 Стань инвестором или соучредителем — получай ежемесячные дивиденды!</li>
            </ul>
            <p>❗️ <strong>Инвестиции</strong>: Для завершения проекта мне нужно 60 000 рублей. Подробности в <a href="https://youtu.be/XKRFM8bFOSk" target="_blank">видео</a>. Распределение бюджета:</p>
            <ul>
                <li>50% — 🖥️ Облачный сервер: Для быстрой работы сайта даже с тысячами пользователей.</li>
                <li>30% — 🗄️ Appwrite: Хранилище данных для поддержки высокого трафика.</li>
                <li>20% — 🌐 Домен, SSL и CDN: Домен — красивый адрес сайта, SSL — защита данных, CDN — ускорение загрузки контента.</li>
            </ul>
            <p>🤝 <strong>Для инвесторов</strong>: Ваши вложения помогут запустить проект на полную мощность. Вы будете получать <strong>ежемесячные дивиденды</strong> от прибыли. Можно стать <strong>соучредителем</strong> и развивать проект вместе!</p>
            <p>🚀 <strong>Будущее проекта</strong>: Полноценная социальная сеть с маркетплейсом. Внедрим <strong>Preycoins</strong> и выведем их на фондовые рынки. Пользователи смогут покупать и продавать арты через <strong>NFT</strong>.</p>
            <p>💡 <strong>Заработок уже сейчас</strong>: В <a href="https://youtu.be/XKRFM8bFOSk" target="_blank">видео</a> я объясняю, как выйти на стабильный доход за 2 месяца! Смотрите до конца!</p>
            <p>🌟 <strong>Возможности</strong>: Реальный заработок, криптовалюта, NFT, инвестиции и дивиденды!</p>
            <p><strong>Ссылки</strong>:<br>
            - 🎬 YouTube-демо: <a href="https://youtu.be/XKRFM8bFOSk" target="_blank">Смотреть демо</a><br>
            - 📱 Telegram: <a href="https://t.me/animelightsforum" target="_blank">t.me/animelightsforum</a></p>
            <a href="https://t.me/animelightsforum" class="btn" target="_blank">📞 Связаться</a>
            <a href="#" class="btn" onclick="closeModal()">Закрыть</a>
        `;
    } else if (projectId === 'youtube') {
        content = `
            <h3>📹 My YouTube Teacher Project</h3>
            <p>Ежедневные уроки по Vue.js 3 и другим современным технологиям. Канал создан для обучения и обмена опытом в разработке веб-приложений.</p>
            <p><a href="https://www.youtube.com/@justinmoreyl18" target="_blank">Перейти на YouTube</a></p>
        `;
    } else if (projectId === 'botpricing') {
        content = `
            <h3>🤖 Цены на разработку Telegram-ботов</h3>
            <p>🚀 Создаю Telegram-боты любой сложности с использованием Telegraf.js и Appwrite. Быстрая разработка строго по вашему ТЗ!</p>
            <p>💻 <strong>Категории сложности и цены:</strong></p>
            <ul>
                <li><strong>Простой бот (€300–€800)</strong>: Бот с базовыми функциями — автоответы, FAQ, простые команды. Примеры: новостной бот, меню. ⏰ Время: 1–3 недели.</li>
                <li><strong>Бот средней сложности (€1,000–€3,000)</strong>: Интеграция с CRM, базами данных, динамические диалоги, обработка заказов. Примеры: бот для бронирования или интернет-магазина. ⏰ Время: 3–6 недель.</li>
                <li><strong>Сложный бот (€3,500–€20,000+)</strong>: AI, множественные API, кастомный бэкенд, масштабируемость. Примеры: бот с обработкой естественного языка или NFT-продажами. ⏰ Время: 6–12 недель.</li>
            </ul>
            <p>💰 <strong>Что влияет на цену?</strong> Сложность ТЗ, интеграции, регион разработчика. Я предлагаю оптимальные цены и высокое качество!</p>
            <p>📊 <strong>Примеры ботов</strong>: <a href="https://t.me/onlyloversbot" target="_blank">@onlyloversbot</a>, <a href="https://t.me/IPISXXXbot" target="_blank">@IPISXXXbot</a>, <a href="https://t.me/IPISXXXrecordbot" target="_blank">@IPISXXXrecordbot</a>.</p>
            <p>📞 <strong>Готовы заказать?</strong> Свяжитесь со мной для обсуждения вашего проекта!</p>
            <a href="https://t.me/animelightsforum" class="btn" target="_blank">📞 Связаться</a>
            <a href="#" class="btn" onclick="closeModal()">Закрыть</a>
        `;
    }
    modalBody.innerHTML = content;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}