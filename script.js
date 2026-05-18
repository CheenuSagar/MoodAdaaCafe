// ============================================
//   MOOD ADAA CAFÉ — script.js
// ============================================

// ===== MENU DATA =====
const menuData = [
  // Coffee
  { id:1,  name:'Cappuccino',            price:180, cat:'coffee',  emoji:'☕', desc:'Espresso with velvety steamed milk & foam',                img:'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=400&q=80', popular:true  },
  { id:2,  name:'Espresso',              price:150, cat:'coffee',  emoji:'☕', desc:'Intense double-shot Italian espresso',                      img:'images/espresso.jpg',                                                       popular:false },
  { id:3,  name:'Latte',                price:200, cat:'coffee',  emoji:'☕', desc:'Smooth espresso with creamy steamed milk',                  img:'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&q=80',     popular:false },
  { id:4,  name:'Americano',            price:160, cat:'coffee',  emoji:'☕', desc:'Bold espresso diluted with hot water',                      img:'https://images.unsplash.com/photo-1499961969-3cbbf47c8a3d?w=400&q=80',     popular:false },
  { id:5,  name:'Flat White',           price:210, cat:'coffee',  emoji:'☕', desc:'Ristretto shots with silky micro-foam milk',                img:'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&q=80',  popular:false },
  { id:6,  name:'Hazelnut Latte',       price:230, cat:'coffee',  emoji:'☕', desc:'Espresso + hazelnut syrup + steamed milk',                  img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',  popular:true  },
  // Cold Drinks
  { id:7,  name:'Cold Coffee',          price:220, cat:'cold',    emoji:'🧋', desc:'Chilled espresso blended with milk & cream',               img:'images/coldcoffee.jpg',                                                     popular:true  },
  { id:8,  name:'Iced Mocha',           price:250, cat:'cold',    emoji:'🧋', desc:'Cold coffee with rich chocolate & whipped cream',          img:'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&q=80',  popular:false },
  { id:9,  name:'Frappuccino',          price:280, cat:'cold',    emoji:'🧋', desc:'Blended ice coffee with caramel drizzle',                  img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',  popular:true  },
  { id:10, name:'Mint Lemonade',        price:160, cat:'cold',    emoji:'🍋', desc:'Fresh mint, lemon, sugar & sparkling water',               img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',     popular:false },
  { id:11, name:'Mango Shake',          price:200, cat:'cold',    emoji:'🥭', desc:'Thick Alphonso mango blended with chilled milk',           img:'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80',     popular:false },
  // Food
  { id:12, name:'Avocado Toast',        price:240, cat:'food',    emoji:'🥑', desc:'Sourdough with smashed avocado, chilli flakes & egg',      img:'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&q=80',  popular:false },
  { id:13, name:'Club Sandwich',        price:280, cat:'food',    emoji:'🥪', desc:'Triple-decker with chicken, veggies & mayo',               img:'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80',     popular:true  },
  { id:14, name:'Veg Wrap',             price:220, cat:'food',    emoji:'🌯', desc:'Grilled veggies, hummus & feta in a soft tortilla',        img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80',  popular:false },
  { id:15, name:'Paneer Tikka Sandwich',price:260, cat:'food',    emoji:'🫓', desc:'Spiced paneer with mint chutney on brioche bread',         img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',  popular:true  },
  { id:16, name:'Croissant',            price:180, cat:'food',    emoji:'🥐', desc:'Buttery, flaky, freshly baked French croissant',           img:'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80',     popular:false },
  // Desserts
  { id:17, name:'Chocolate Lava Cake',  price:280, cat:'dessert', emoji:'🍰', desc:'Warm gooey centre served with vanilla ice cream',          img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',  popular:true  },
  { id:18, name:'Cheesecake Slice',     price:260, cat:'dessert', emoji:'🍰', desc:'New York-style cheesecake with berry compote',             img:'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80',  popular:false },
  { id:19, name:'Brownie + Ice Cream',  price:240, cat:'dessert', emoji:'🍫', desc:'Fudgy chocolate brownie with 2 scoops of ice cream',       img:'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&q=80',  popular:false },
  { id:20, name:'Tiramisu',             price:300, cat:'dessert', emoji:'🍮', desc:'Classic Italian ladyfinger & mascarpone dessert',          img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',  popular:true  },
  // Specials
  { id:21, name:'Mood Board Box',       price:499, cat:'special', emoji:'✨', desc:'Curated combo: 2 coffees + 1 dessert + 1 sandwich',        img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',  popular:true  },
  { id:22, name:'Sunrise Breakfast',    price:399, cat:'special', emoji:'🌅', desc:'Eggs, toast, fresh juice & your choice of coffee',         img:'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&q=80',  popular:false },
  { id:23, name:'Adaa Coffee Flight',   price:450, cat:'special', emoji:'✈️', desc:'Try 4 different coffees in tasting-size portions',         img:'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&q=80',  popular:true  },
];

// ===== CART =====
let cart = [];

// ===== RENDER MENU =====
function renderMenu(filter) {
  filter = filter || 'all';
  const grid  = document.getElementById('menuGrid');
  const items = filter === 'all' ? menuData : menuData.filter(i => i.cat === filter);

  grid.innerHTML = items.map(item => `
    <div class="menu-card">
      <div style="position:relative">
        <img
          src="${item.img}"
          alt="${item.name}"
          style="width:100%;height:176px;object-fit:cover;display:block"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80'"
        >
        ${item.popular ? '<span style="position:absolute;top:12px;left:12px;background:#6f4e37;color:#fff;font-size:11px;padding:3px 10px;border-radius:999px;font-weight:500">🔥 Popular</span>' : ''}
      </div>
      <div style="padding:16px">
        <h3 style="font-family:Playfair Display,serif;font-weight:700;color:#47301f;font-size:1.1rem;margin-bottom:4px">${item.emoji} ${item.name}</h3>
        <p style="color:#888;font-size:12px;margin-bottom:12px;line-height:1.5">${item.desc}</p>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <span style="color:#6f4e37;font-weight:700;font-size:1.1rem">₹${item.price}</span>
          <button
            onclick="addToCart('${item.name}',${item.price})"
            style="background:#6f4e37;color:#fff;border:none;padding:8px 18px;border-radius:999px;font-size:12px;font-weight:500;cursor:pointer;transition:opacity 0.2s"
            onmouseover="this.style.opacity='0.85'"
            onmouseout="this.style.opacity='1'"
          >+ Add</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== FILTER =====
function filterMenu(cat, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(cat);
}

// ===== CART FUNCTIONS =====
function addToCart(name, price) {
  const item = cart.find(x => x.n === name);
  item ? item.q++ : cart.push({ n: name, p: price, q: 1 });
  updateCart();
  showToast();
}

function changeQty(name, delta) {
  const item = cart.find(x => x.n === name);
  if (!item) return;
  item.q += delta;
  if (item.q <= 0) cart = cart.filter(x => x.n !== name);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  const container = document.getElementById('cartItems');
  const total     = cart.reduce((s, i) => s + i.p * i.q, 0);
  const count     = cart.reduce((s, i) => s + i.q, 0);

  if (cart.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:#aaa;font-size:14px;padding:24px 0">Your cart is empty</p>';
  } else {
    container.innerHTML = cart.map(i => `
      <div class="cart-item-row">
        <div>
          <p style="font-weight:500;font-size:14px;margin-bottom:2px">${i.n}</p>
          <p style="color:#6f4e37;font-size:12px;font-weight:700">₹${i.p} × ${i.q} = ₹${i.p * i.q}</p>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <button onclick="changeQty('${i.n}',-1)" style="width:28px;height:28px;border-radius:50%;border:none;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,0.12);color:#6f4e37;font-size:18px;font-weight:bold;cursor:pointer;display:flex;align-items:center;justify-content:center">−</button>
          <span style="width:20px;text-align:center;font-weight:700;font-size:14px">${i.q}</span>
          <button onclick="changeQty('${i.n}',1)"  style="width:28px;height:28px;border-radius:50%;border:none;background:#6f4e37;color:#fff;font-size:18px;font-weight:bold;cursor:pointer;display:flex;align-items:center;justify-content:center">+</button>
        </div>
      </div>
    `).join('');
  }

  document.getElementById('totalPrice').innerText = total;
  const badge = document.getElementById('cartCount');
  badge.innerText = count;
  badge.classList.toggle('hidden', count === 0);
}

// ===== CART MODAL =====
function openCart() {
  const m = document.getElementById('cartModal');
  m.style.display = 'flex';
}

function closeCart() {
  document.getElementById('cartModal').style.display = 'none';
}

document.getElementById('cartModal').addEventListener('click', function(e) {
  if (e.target === this) closeCart();
});

// ===== WHATSAPP ORDER =====
function orderWhatsApp() {
  if (cart.length === 0) { alert('Please add items to cart first!'); return; }
  let msg = 'My Order from Mood Adaa Café:%0A%0A';
  cart.forEach(i => { msg += `• ${i.n} × ${i.q} = ₹${i.p * i.q}%0A`; });
  const total = cart.reduce((s, i) => s + i.p * i.q, 0);
  msg += `%0ATotal: ₹${total}`;
  window.open('https://wa.me/+919756341454?text=' + msg);
}

function payNow() {
  alert('Payment gateway coming soon! Please use WhatsApp order for now. 😊');
}

// ===== TOAST =====
function showToast() {
  const t = document.getElementById('toast');
  t.style.transform = 'translateX(0)';
  t.style.opacity   = '1';
  setTimeout(() => {
    t.style.transform = 'translateX(150%)';
    t.style.opacity   = '0';
  }, 2000);
}

// ===== CONTACT FORM =====
function handleContact(e) {
  e.preventDefault();
  alert('Thank you for your message! We\'ll get back to you soon. ☕');
  e.target.reset();
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('navbar-scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ===== FADE-IN ON SCROLL =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ===== HERO FALLBACK IMAGE =====
(function() {
  const hero = document.querySelector('.hero-bg');
  const test = new Image();
  test.onerror = () => {
    hero.style.background = "linear-gradient(135deg,rgba(35,18,8,0.88) 0%,rgba(111,78,55,0.65) 100%), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80') center/cover no-repeat";
  };
  test.src = 'images/Hero.jpg';
})();

// ===== INIT =====
renderMenu();
updateCart();
