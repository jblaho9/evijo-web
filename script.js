// ===== SCROLL TO TOP ON FRESH LOAD ONLY =====
const navType = performance.getEntriesByType('navigation')[0]?.type;
if (navType !== 'back_forward' && !window.location.hash) {
  if (history.scrollRestoration) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  window.addEventListener('load', () => window.scrollTo({ top: 0, behavior: 'instant' }));
} else {
  if (history.scrollRestoration) history.scrollRestoration = 'auto';
}

// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== BURGER =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== MENU DATA =====
// Pizza preview — top 8 for main page. Full list lives in pizza.html
const pizzaTop = [
  { name: 'Margherita',      desc: 'Paradajková omáčka, mozzarella, bazalka',                price: '€6.50', tag: 'Klasika',  img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80' },
  { name: 'Quattro Formaggi',desc: 'Mozzarella, gorgonzola, parmezán, eidam',                price: '€8.90', tag: 'Obľúbená', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { name: 'Diavola',         desc: 'Paradajková omáčka, pikantná saláma, chilli, olivy',     price: '€7.80', tag: 'Pikantná', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80' },
  { name: 'Prosciutto',      desc: 'Šunka prosciutto, rukola, cherry paradajky, parmezán',   price: '€9.20', tag: 'Premium',  img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=80' },
  { name: 'Hawai',           desc: 'Šunka, ananás, mozzarella',                              price: '€7.50', tag: 'Sladká',   img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80' },
  { name: 'Špenátová',       desc: 'Špenát, mozzarella, cesnak, syr feta',                   price: '€8.20', tag: 'Vegán',    img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80' },
  { name: 'BBQ Kurča',       desc: 'BBQ omáčka, kuracie mäso, červená cibuľa, mozzarella',  price: '€8.80', tag: 'Gril',     img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80' },
  { name: 'Funghi',          desc: 'Šampiňóny, mozzarella, cesnak, oregano',                 price: '€7.20', tag: 'Vegán',    img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=80' },
];

const menuData = {
  restaurant: {
    polievky: [
      { name: 'Polievka dňa',       desc: 'Čerstvá polievka podľa dennej ponuky',         price: '€2.00', tag: 'Denná',    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
      { name: 'Hovädzí vývar',      desc: 'Tradičný vývar s rezancami a zeleninou',        price: '€2.50', tag: 'Klasika',  img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
      { name: 'Paradajková polievka',desc: 'Krémová paradajková polievka, bazalka',        price: '€2.50', tag: 'Vegán',    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
      { name: 'Cesnaková polievka',  desc: 'Cesnaková polievka so syrom a krutónmi',       price: '€2.50', tag: 'Domáca',   img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
      { name: 'Špenátová polievka',  desc: 'Krémová špenátová polievka s vajcom',          price: '€2.50', tag: 'Vegán',    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
      { name: 'Fazuľová polievka',   desc: 'Hustá fazuľová polievka so slaninou',          price: '€2.80', tag: 'Domáca',   img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
      { name: 'Minestrone',          desc: 'Talianska zeleninová polievka s cestovinami',  price: '€2.80', tag: 'Talianska',img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
    ],
    pizza: pizzaTop,
    cestoviny: [
      { name: 'Spaghetti Bolognese', desc: 'Hovädzí ragú so zeleninou, parmezán',          price: '€7.20', tag: 'Klasika',  img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&q=80' },
      { name: 'Carbonara',           desc: 'Pancetta, vajce, parmezán, čierne korenie',    price: '€7.80', tag: 'Obľúbená', img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80' },
      { name: 'Penne Arrabbiata',    desc: 'Pikantná paradajková omáčka, cesnak, bazalka', price: '€6.50', tag: 'Vegán',    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80' },
      { name: 'Rizoto s hubami',     desc: 'Krémové rizoto, šampiňóny, parmezán',          price: '€7.50', tag: 'Rizoto',   img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=500&q=80' },
    ],
    hlavne: [
      { name: 'Hovädzí steak',    desc: 'Grilovaný hovädzí steak, bylinkové maslo, zemiaky', price: '€14.90', tag: 'Premium',  img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&q=80' },
      { name: 'Kurací steak',     desc: 'Marinované kuracie prsia, grilovaná zelenina',       price: '€9.50',  tag: 'Gril',     img: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&q=80' },
      { name: 'Bravčový kotlet',  desc: 'Kotlet na šampiňónovej omáčke, ryža',               price: '€10.80', tag: 'Domáce',   img: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=500&q=80' },
      { name: 'Zapekané zemiaky', desc: 'Zemiaky zapečené so syrom a slaninou',               price: '€8.50',  tag: 'Zapekané', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80' },
    ],
    salaty: [
      { name: 'Caesar šalát',   desc: 'Rímsky šalát, krutóny, parmezán, Caesar dressing', price: '€6.80', tag: 'Klasika',   img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80' },
      { name: 'Caprese',        desc: 'Čerstvá mozzarella, rajčiny, bazalka, olivový olej', price: '€7.20', tag: 'Talianský', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80' },
      { name: 'Grécky šalát',   desc: 'Uhorka, olivy, feta, červená cibuľa, paprika',      price: '€6.50', tag: 'Vegán',     img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80' },
      { name: 'Šalát s kuracím',desc: 'Grilované kura, mix šalátov, cherry paradajky',     price: '€8.20', tag: 'Lehký',     img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80' },
    ],
    prilohy: [
      { name: 'Hranolky',       desc: 'Chrumkavé hranolky',                    price: '€2.50', tag: 'Príloha', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80' },
      { name: 'Ryža',           desc: 'Varená ryža',                           price: '€1.80', tag: 'Príloha', img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=500&q=80' },
      { name: 'Pečené zemiaky', desc: 'Zemiaky pečené s rozmarínom',           price: '€2.50', tag: 'Príloha', img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&q=80' },
      { name: 'Chlieb a maslo', desc: 'Čerstvý chlieb s domácim maslom',       price: '€1.50', tag: 'Príloha', img: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc7b?w=500&q=80' },
    ],
    dezerty: [
      { name: 'Tiramisu',    desc: 'Klasické talianske tiramisu s mascarpone',    price: '€4.50', tag: 'Talianske', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80' },
      { name: 'Panna Cotta', desc: 'S lesným ovocím a karamelom',                 price: '€4.20', tag: 'Krémové',   img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80' },
      { name: 'Gelato',      desc: 'Talianska zmrzlina – pistácia, vanilka, jahoda', price: '€3.80', tag: 'Zmrzlina',  img: 'https://images.unsplash.com/photo-1567206563114-c179706e68e9?w=500&q=80' },
      { name: 'Kofola 0.5L', desc: 'Kofola točená',                              price: '€2.00', tag: 'Nápoj',     img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=80' },
      { name: 'Voda 0.33L',  desc: 'Minerálna voda',                             price: '€1.20', tag: 'Nápoj',     img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80' },
    ],
  },
  delivery: {
    polievky: [
      { name: 'Polievka dňa',       desc: 'Čerstvá polievka podľa dennej ponuky',         price: '€2.00', tag: 'Denná',    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
      { name: 'Hovädzí vývar',      desc: 'Tradičný vývar s rezancami a zeleninou',        price: '€2.50', tag: 'Klasika',  img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
      { name: 'Paradajková polievka',desc: 'Krémová paradajková polievka, bazalka',        price: '€2.50', tag: 'Vegán',    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
      { name: 'Cesnaková polievka',  desc: 'Cesnaková polievka so syrom a krutónmi',       price: '€2.50', tag: 'Domáca',   img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
      { name: 'Fazuľová polievka',   desc: 'Hustá fazuľová polievka so slaninou',          price: '€2.80', tag: 'Domáca',   img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
    ],
    pizza: pizzaTop,
    cestoviny: [
      { name: 'Spaghetti Bolognese', desc: 'Hovädzí ragú so zeleninou, parmezán',          price: '€7.50', tag: 'Klasika',  img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&q=80' },
      { name: 'Carbonara',           desc: 'Pancetta, vajce, parmezán, čierne korenie',    price: '€8.00', tag: 'Obľúbená', img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80' },
      { name: 'Penne Arrabbiata',    desc: 'Pikantná paradajková omáčka, cesnak, bazalka', price: '€6.80', tag: 'Vegán',    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80' },
    ],
    hlavne: [
      { name: 'Kurací steak',    desc: 'Marinované kuracie prsia, grilovaná zelenina', price: '€9.90',  tag: 'Gril',   img: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&q=80' },
      { name: 'Bravčový kotlet', desc: 'Kotlet na šampiňónovej omáčke, ryža',          price: '€11.20', tag: 'Domáce', img: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=500&q=80' },
    ],
    salaty: [
      { name: 'Caesar šalát', desc: 'Rímsky šalát, krutóny, parmezán, Caesar dressing', price: '€7.00', tag: 'Klasika', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80' },
      { name: 'Grécky šalát', desc: 'Uhorka, olivy, feta, červená cibuľa, paprika',     price: '€6.80', tag: 'Vegán',   img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80' },
    ],
    prilohy: [
      { name: 'Hranolky',       desc: 'Chrumkavé hranolky',          price: '€2.80', tag: 'Príloha', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80' },
      { name: 'Pečené zemiaky', desc: 'Zemiaky pečené s rozmarínom', price: '€2.80', tag: 'Príloha', img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&q=80' },
    ],
    dezerty: [
      { name: 'Tiramisu',    desc: 'Klasické talianske tiramisu s mascarpone', price: '€4.80', tag: 'Talianske', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80' },
      { name: 'Kofola 0.5L', desc: 'Kofola točená v nádobe',                  price: '€2.20', tag: 'Nápoj',     img: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500&q=80' },
    ],
  },
};

let currentMode = 'restaurant';
let currentCat = 'pizza';

function renderMenu(cat) {
  const grid = document.getElementById('menuGrid');
  const menuFade = document.getElementById('menuFade');
  grid.innerHTML = '';
  if (menuFade) menuFade.classList.add('hidden');

  const items = menuData[currentMode][cat] || [];
  if (items.length === 0) {
    grid.innerHTML = '<p class="menu__empty">Táto kategória nie je dostupná pre rozvoz.</p>';
    return;
  }
  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card reveal';
    card.innerHTML = `
      <div class="menu-card__img" style="background-image:url('${item.img}')">
        <span class="menu-card__tag">${item.tag}</span>
      </div>
      <div class="menu-card__body">
        <div class="menu-card__name">${item.name}</div>
        <div class="menu-card__desc">${item.desc}</div>
        <div class="menu-card__footer">
          <span class="menu-card__price">${item.price}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  });
  if (cat === 'pizza' && menuFade) {
    menuFade.classList.remove('hidden');
    const pizzaLink = menuFade.querySelector('a');
    if (pizzaLink) pizzaLink.href = currentMode === 'delivery' ? 'menu.html?mode=delivery' : 'menu.html';
  }
}

// mode toggle
document.getElementById('menuToggle').addEventListener('click', e => {
  const btn = e.target.closest('.menu__toggle-btn');
  if (!btn) return;
  document.querySelectorAll('.menu__toggle-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentMode = btn.dataset.mode;
  renderMenu(currentCat);
});

// tabs
document.getElementById('menuTabs').addEventListener('click', e => {
  const btn = e.target.closest('.menu__tab');
  if (!btn) return;
  document.querySelectorAll('.menu__tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentCat = btn.dataset.cat;
  renderMenu(currentCat);
});

renderMenu(currentCat);

// ===== SCROLL SPY =====
const spySections = ['home', 'delivery', 'menu', 'daily', 'about', 'contact'];
const spyLinks = {};
document.querySelectorAll('.nav__links a[href^="#"]').forEach(a => {
  const id = a.getAttribute('href').replace('#', '');
  spyLinks[id] = a;
});
const spyEls = spySections.map(id => document.getElementById(id)).filter(Boolean);
const spyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      Object.values(spyLinks).forEach(a => a.classList.remove('nav__link--active'));
      if (spyLinks[entry.target.id]) spyLinks[entry.target.id].classList.add('nav__link--active');
    }
  });
}, { rootMargin: '-30% 0px -65% 0px' });
spyEls.forEach(el => spyObserver.observe(el));


// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observeAll() {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// mark static elements
document.querySelectorAll(
  '.about__grid > *, .delivery__grid > *, .contact__card, .feature, .daily__text, .daily .btn'
).forEach(el => el.classList.add('reveal'));

observeAll();
