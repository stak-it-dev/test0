// ПОЛНЫЙ КАТАЛОГ ТОВАРОВ (36 позиций)
const CATALOG = [
    // Рыба целая и стейки
    { id: 1, cat: "Рыба целая и стейки", name: "Тунец Вьетнам стейк 120–200", price: 490, desc: "Вакуумная фасовка 500 г. Плотное, ярко-красное мясо для гриля." },
    { id: 2, cat: "Рыба целая и стейки", name: "Форель Карелия стейк", price: 1190, desc: "От Инарктика. Чистая вода, без ГМО. Порционный размер 110-180г." },
    { id: 3, cat: "Рыба целая и стейки", name: "Семга Чили стейк, крупный", price: 1750, desc: "Калибр 500+ гр. Плотный, мясистый, богат Омега-3." },
    { id: 4, cat: "Рыба целая и стейки", name: "Дорадо Турция 400+ гр", price: 1030, desc: "Белое нежное мясо со сладковатыми нотами. Идеально для запекания." },
    { id: 5, cat: "Рыба целая и стейки", name: "Сибас Турция 400+ гр", price: 1050, desc: "Свежий сибас. Мягкий вкус, минимум костей." },
    { id: 6, cat: "Рыба целая и стейки", name: "Скумбрия Атлантика 500+ гр", price: 630, desc: "Фарерские острова. Жирная скумбрия крупного калибра." },
    { id: 7, cat: "Рыба целая и стейки", name: "Форель Карелия 2–3 кг", price: 1050, desc: "Целая тушка. Универсальна для стейков и слабой соли." },
    { id: 8, cat: "Рыба целая и стейки", name: "Форель морская Мурманск 2–3 кг", price: 1200, desc: "Дикая морская форель. Высокая жирность и яркий вкус." },

    // Морепродукты
    { id: 9, cat: "Морепродукты", name: "Креветка Королевская 40/60", price: 790, desc: "Сухая заморозка. Фасовка 1 кг." },
    { id: 10, cat: "Морепродукты", name: "Филе кальмара", price: 790, desc: "1 кг. Полностью очищенное мясо, готовое к приготовлению." },
    { id: 11, cat: "Морепродукты", name: "Морской коктейль Арктида", price: 430, desc: "Мидии, кальмары, креветки, осьминоги. 1 кг." },
    { id: 12, cat: "Морепродукты", name: "Креветка Арктида 31/40", price: 1196, desc: "Очищенная с хвостом. Индо-Тихоокеанский регион." },
    { id: 13, cat: "Морепродукты", name: "Мясо мидий", price: 351, desc: "Калибр 200-300 шт в кг. Яркий морской вкус." },
    { id: 14, cat: "Морепродукты", name: "Креветка Ваннамей 30/40", price: 1690, desc: "Целая с головой, 2 кг. Сочная, индивидуальная заморозка." },
    { id: 15, cat: "Морепродукты", name: "Северная мурманская креветка 150+", price: 1650, desc: "2,5 кг. Дикая креветка из холодных вод Баренцева моря." },
    { id: 16, cat: "Морепродукты", name: "Салатное мясо камчатского краба", price: 2200, desc: "500 гр. Чистое крупное филе без панциря." },
    { id: 17, cat: "Морепродукты", name: "Лангустины L2", price: 1500, desc: "2 кг. С головой, Аргентина. Дикая креветка." },
    { id: 18, cat: "Морепродукты", name: "Креветка Ваннамей Бабочка", price: 590, desc: "500 гр. Раскрытые креветки без вены для красивой подачи." },
    { id: 19, cat: "Морепродукты", name: "Филе морского гребешка", price: 1190, desc: "Калибровка 40-60 шт в кг. Нежное сладковатое мясо." },
    { id: 20, cat: "Морепродукты", name: "Кальмар Командорский", price: 850, desc: "Брикет 1 кг очищенного филе. Максимум белка." },

    // Рыбное филе и фарш
    { id: 21, cat: "Рыбное филе и фарш", name: "Тилапия филе", price: 496, desc: "Чистое свежее филе без запаха." },
    { id: 22, cat: "Рыбное филе и фарш", name: "Горбуша фарш", price: 209, desc: "400 гр. Порционный брикет из натуральной горбуши." },
    { id: 23, cat: "Рыбное филе и фарш", name: "Семга фарш", price: 403, desc: "400 гр. Чистый атлантический лосось." },
    { id: 24, cat: "Рыбное филе и фарш", name: "Лосось филе на коже Трим С", price: 1910, desc: "0,9 - 1,3 кг. Без костей и плавников. Идеально для солки." },
    
    // Икра
    { id: 25, cat: "Икра", name: "Икра форели, 250 гр", price: 1690, desc: "Стекло. Заводская фасовка, ООО Гюмрифиш." },
    { id: 26, cat: "Икра", name: "Икра кеты, 200 гр", price: 1430, desc: "Крупные, яркие зерна из Хабаровска. Честный знак." },
    { id: 27, cat: "Икра", name: "Икра нерки, 200 гр", price: 1430, desc: "Камчатский край. Богата белком и Омега-3." },
    
    // Полуфабрикаты
    { id: 28, cat: "Полуфабрикаты рыбные", name: "Кольца кальмара в панировке", price: 690, desc: "Хрустящие кольца для быстрой обжарки." },
    { id: 29, cat: "Полуфабрикаты рыбные", name: "Котлеты из кальмара Дары Моря", price: 390, desc: "Натуральный состав, сочный вкус." },
    { id: 30, cat: "Полуфабрикаты рыбные", name: "Медальоны из горбуши", price: 523, desc: "Удобный формат для легкого ужина." },

    // Фастфуд и Овощи
    { id: 31, cat: "Фастфуд", name: "Пицца Пепперони 400 гр", price: 275, desc: "Классическая пицца на тонком тесте." },
    { id: 32, cat: "Овощи и ягоды", name: "Мексиканская смесь", price: 260, desc: "Свежезамороженные овощи для гарнира." },
    { id: 33, cat: "Овощи и ягоды", name: "Брокколи", price: 290, desc: "Крупные соцветия, шоковая заморозка." },

    // Масло и Слабая соль
    { id: 34, cat: "Масло сливочное", name: "Масло 82,5% 500 гр", price: 679, desc: "Традиционное сладко-сливочное масло." },
    { id: 35, cat: "Рыба слабой соли", name: "Лосось филе кусок", price: 189, desc: "Вакуумная упаковка 300-500г. Нежнейший посол." },
    { id: 36, cat: "Рыба слабой соли", name: "Скумбрия в масле", price: 549, desc: "450 гр. Филе атлантической скумбрии с пряностями." }
];

let cart = JSON.parse(localStorage.getItem('ocean_luxury_cart')) || [];
let currentCategory = "Все";

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    renderCategories();
    renderProducts();
    updateCartUI();

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 100);
    });
});

function renderCategories() {
    const categories = ["Все", ...new Set(CATALOG.map(p => p.cat))];
    const container = document.getElementById('category-tabs');
    container.innerHTML = categories.map(c => `
        <div class="cat-tab ${c === currentCategory ? 'active' : ''}" 
             onclick="setCategory('${c}')">${c}</div>
    `).join('');
}

function setCategory(cat) {
    currentCategory = cat;
    renderCategories();
    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const filtered = currentCategory === "Все" ? CATALOG : CATALOG.filter(p => p.cat === currentCategory);
    
    grid.innerHTML = filtered.map((p, index) => `
        <div class="product-card" data-aos="fade-up" data-aos-delay="${index % 4 * 100}">
            <div class="p-img"></div>
            <h3 class="p-name serif">${p.name}</h3>
            <p class="p-desc">${p.desc}</p>
            <div class="p-footer">
                <span class="p-price">${p.price} ₽</span>
                <button class="btn-add" onclick="addToCart(${p.id})">В корзину</button>
            </div>
        </div>
    `).join('');
}

// Корзина
function addToCart(id) {
    const product = CATALOG.find(p => p.id === id);
    const existing = cart.find(i => i.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({...product, qty: 1});
    }
    updateCartUI();
    toggleCart(true);
}

function updateCartUI() {
    localStorage.setItem('ocean_luxury_cart', JSON.stringify(cart));
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('total-price');
    const countEl = document.getElementById('cart-count');

    const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
    const count = cart.reduce((acc, i) => acc + i.qty, 0);

    countEl.innerText = count;
    totalEl.innerText = `${total} ₽`;

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <h4 class="serif">${item.name}</h4>
                <p style="color:var(--gold);">${item.qty} x ${item.price} ₽</p>
            </div>
            <button class="remove-btn" onclick="remove(${item.id})">&times;</button>
        </div>
    `).join('');
}

function remove(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}

function toggleCart(show) {
    document.getElementById('cart-drawer').classList.toggle('active', show);
    document.getElementById('cart-overlay').classList.toggle('active', show);
}

// Order
function openCheckout() {
    if (cart.length === 0) return alert("Ваша корзина пуста");
    toggleCart(false);
    document.getElementById('checkout-modal').style.display = 'flex';
}

function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

document.getElementById('order-form').onsubmit = async (e) => {
    e.preventDefault();
    alert("Заказ принят! Благодарим за выбор OCEAN DELUXE.");
    cart = [];
    updateCartUI();
    closeCheckout();
};