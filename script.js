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
let menuData = { restaurant: {}, delivery: {} };

async function loadMenuData() {
  const [restaurant, delivery] = await Promise.all([
    fetch('/content/menu/restaurant.json').then(r => r.json()),
    fetch('/content/menu/delivery.json').then(r => r.json()),
  ]);
  menuData.restaurant = restaurant;
  menuData.delivery = delivery;
}

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

loadMenuData().then(() => renderMenu(currentCat));

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
