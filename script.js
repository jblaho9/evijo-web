// ===== FORCE SCROLL TO TOP ON LOAD =====
if (history.scrollRestoration) history.scrollRestoration = 'manual';
if (window.location.hash) {
  history.replaceState(null, document.title, window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);
window.addEventListener('load', () => window.scrollTo({ top: 0, behavior: 'instant' }));

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
const menuData = {
  pizza: [
    {
      name: 'Margherita',
      desc: 'Paradajková omáčka, mozzarella, čerstvá bazalka',
      price: '€6.50',
      tag: 'Klasika',
      img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80',
    },
    {
      name: 'Quattro Formaggi',
      desc: 'Štyri druhy syra: mozzarella, gorgonzola, parmezán, eidam',
      price: '€8.90',
      tag: 'Obľúbená',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80',
    },
    {
      name: 'Diavola',
      desc: 'Paradajková omáčka, pikantná saláma, chilli, olivy',
      price: '€7.80',
      tag: 'Pikantná',
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80',
    },
    {
      name: 'Prosciutto',
      desc: 'Šunka prosciutto, rukola, cherry paradajky, parmezán',
      price: '€9.20',
      tag: 'Premium',
      img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&q=80',
    },
  ],
  pasta: [
    {
      name: 'Spaghetti Bolognese',
      desc: 'Hovädzí ragú so zeleninou, parmezán',
      price: '€7.20',
      tag: 'Klasika',
      img: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=500&q=80',
    },
    {
      name: 'Penne Arrabbiata',
      desc: 'Pikantná paradajková omáčka, cesnak, bazalka',
      price: '€6.50',
      tag: 'Vegán',
      img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80',
    },
    {
      name: 'Carbonara',
      desc: 'Pancetta, vajce, parmezán, čierne korenie',
      price: '€7.80',
      tag: 'Obľúbená',
      img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80',
    },
    {
      name: 'Pesto Genovese',
      desc: 'Čerstvé pesto, cherry paradajky, píniové oriešky',
      price: '€7.50',
      tag: 'Vegán',
      img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=80',
    },
  ],
  steaks: [
    {
      name: 'Hovädzí steak',
      desc: 'Grilovaný hovädzí steak, bylinková maslo, zemiaky',
      price: '€14.90',
      tag: 'Premium',
      img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500&q=80',
    },
    {
      name: 'Kurací steak',
      desc: 'Marinované kuracie prsia, grilovaná zelenina',
      price: '€9.50',
      tag: 'Gril',
      img: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&q=80',
    },
    {
      name: 'Bravčový kotlet',
      desc: 'Bravčový kotlet na šampiňónovej omáčke, ryža',
      price: '€10.80',
      tag: 'Domáce',
      img: 'https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=500&q=80',
    },
    {
      name: 'Grilované rebierka',
      desc: 'BBQ marinované rebierka, coleslaw, hranolky',
      price: '€13.50',
      tag: 'Obľúbená',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80',
    },
  ],
  salads: [
    {
      name: 'Caesar šalát',
      desc: 'Rímsky šalát, krutóny, parmezán, Caesar dressing',
      price: '€6.80',
      tag: 'Klasika',
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80',
    },
    {
      name: 'Caprese',
      desc: 'Čerstvá mozzarella, rajčiny, bazalka, olivový olej',
      price: '€7.20',
      tag: 'Taliansky',
      img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80',
    },
    {
      name: 'Grécky šalát',
      desc: 'Uhorka, olivy, feta, červená cibuľa, paprika',
      price: '€6.50',
      tag: 'Vegán',
      img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80',
    },
    {
      name: 'Šalát s kuracím',
      desc: 'Grilované kura, mix šalátov, cherry paradajky, dresing',
      price: '€8.20',
      tag: 'Lehký',
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80',
    },
  ],
  desserts: [
    {
      name: 'Tiramisu',
      desc: 'Klasické talianske tiramisu s mascarpone',
      price: '€4.50',
      tag: 'Talianske',
      img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80',
    },
    {
      name: 'Panna Cotta',
      desc: 'S lesným ovocím a karamelom',
      price: '€4.20',
      tag: 'Krémové',
      img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80',
    },
    {
      name: 'Čokoládová fontána',
      desc: 'Teplá čokoláda, čerstvé ovocie na namáčanie',
      price: '€5.50',
      tag: 'Obľúbená',
      img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80',
    },
    {
      name: 'Gelato',
      desc: 'Talianská zmrzlina – pistácia, vanilka, jahoda',
      price: '€3.80',
      tag: 'Zmrzlina',
      img: 'https://images.unsplash.com/photo-1567206563114-c179706e68e9?w=500&q=80',
    },
  ],
};

function renderMenu(cat) {
  const grid = document.getElementById('menuGrid');
  grid.innerHTML = '';
  menuData[cat].forEach(item => {
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
  // trigger reveal
  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  });
}

// tabs
document.getElementById('menuTabs').addEventListener('click', e => {
  const btn = e.target.closest('.menu__tab');
  if (!btn) return;
  document.querySelectorAll('.menu__tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(btn.dataset.cat);
});

renderMenu('pizza');

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
