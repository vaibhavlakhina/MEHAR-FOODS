/* ============================================
   MEHAR FOODS — JAVASCRIPT
   ============================================ */

// ============================================
// MENU DATA
// ============================================
const MENU = [
  // ---- BURGERS ----
  {
    id: 'burger-1', category: 'burgers',
    name: 'Classic Burger', price: 55,
    image: '/images/classic-burger.png',
    badge: 'Best Seller', badgeColor: 'orange',
    desc: 'Crispy patty, fresh veggies, tangy sauce in a soft sesame bun'
  },
  {
    id: 'burger-2', category: 'burgers',
    name: 'Paneer Burger', price: 65,
    image: '/images/paneer-burger.png',
    badge: null,
    desc: 'Grilled spiced paneer patty with creamy sauce and fresh toppings'
  },
  {
    id: 'burger-3', category: 'burgers',
    name: 'Cheese Burger', price: 75,
    image: '/images/cheese-burger.png',
    badge: 'Popular', badgeColor: 'red',
    desc: 'Double cheese loaded burger with fresh veggies and special sauce'
  },

  // ---- SANDWICHES ----
  {
    id: 'sand-1', category: 'sandwiches',
    name: 'Classic Veggies Sandwich', price: 90,
    image: '/images/classic-sandwich.png',
    badge: null,
    desc: 'Grilled veggie sandwich with mint chutney, fresh crisp filling'
  },
  {
    id: 'sand-2', category: 'sandwiches',
    name: 'Corn & Veggies Sandwich', price: 110,
    image: '/images/corn-sandwich.png',
    badge: 'Best Seller', badgeColor: 'orange',
    desc: 'Sweet corn with fresh vegetables in golden crispy grilled bread'
  },
  {
    id: 'sand-3', category: 'sandwiches',
    name: 'Paneer & Onion Sandwich', price: 120,
    image: '/images/paneer-sandwich.png',
    badge: null,
    desc: 'Paneer tikka and caramelized onions in golden grilled bread'
  },

  // ---- NOODLES (hasSize = true) ----
  {
    id: 'nood-1', category: 'noodles',
    name: 'Veg Noodles',
    priceHalf: 60, priceFull: 100,
    image: '/images/veg-noodles.png',
    hasSize: true, badge: null,
    desc: 'Stir-fried noodles tossed with fresh vegetables and sauces'
  },
  {
    id: 'nood-2', category: 'noodles',
    name: 'Singapore Noodles',
    priceHalf: 80, priceFull: 130,
    image: '/images/singapore-noodles.png',
    hasSize: true, badge: 'Spicy', badgeColor: 'red',
    desc: 'Spicy Singapore-style noodles with aromatic spices and veggies'
  },
  {
    id: 'nood-3', category: 'noodles',
    name: 'Chilli Garlic Noodles',
    priceHalf: 70, priceFull: 110,
    image: '/images/chilli-noodles.png',
    hasSize: true, badge: 'Best Seller', badgeColor: 'orange',
    desc: 'Fiery chilli garlic noodles with bold, irresistible flavors'
  },

  // ---- CHAKNA ----
  {
    id: 'chak-1', category: 'chakna',
    name: 'Chana Chaat', price: 60,
    image: '/images/chana-chaat.png',
    badge: 'Best Seller', badgeColor: 'orange',
    desc: 'Spiced chickpeas with tangy chutneys and fresh toppings'
  },
  {
    id: 'chak-2', category: 'chakna',
    name: 'Peanut Chaat', price: 60,
    image: '/images/peanut-chaat.png',
    badge: null,
    desc: 'Crunchy roasted peanuts tossed in tangy masala and spices'
  },
  {
    id: 'chak-3', category: 'chakna',
    name: 'Corn Chaat', price: 80,
    image: '/images/corn-chaat.png',
    badge: null,
    desc: 'Sweet corn with butter, masala and a refreshing squeeze of lime'
  },

  // ---- RAITA ----
  {
    id: 'rait-1', category: 'raita',
    name: 'Boondi Raita', price: 50,
    image: '/images/boondi-raita.png',
    badge: null,
    desc: 'Crispy boondi in smooth creamy yogurt with cumin and spices'
  },
  {
    id: 'rait-2', category: 'raita',
    name: 'Onion Tomato Raita', price: 60,
    image: '/images/onion-raita.png',
    badge: null,
    desc: 'Fresh onions and tomatoes in spiced smooth yogurt'
  },

  // ---- DRINKS (single merged card with flavour selector) ----
  {
    id: 'drk', category: 'drinks',
    name: 'Cold Drink', price: 20,
    image: '/images/cold-drink.png',
    badge: null,
    desc: 'Chilled refreshing cold drink — choose your favourite flavour below',
    hasOptions: true,
    options: ['Coke', 'Pepsi', 'Sprite', 'Fanta', 'Thums Up']
  }
];

const BEST_SELLER_IDS = ['burger-1', 'sand-2', 'nood-3', 'chak-1'];
const WA_NUMBER = '919729871230';

// ============================================
// REVIEWS DATA
// ============================================
const REVIEWS = [
  {
    name: 'Rahul Sharma',
    location: 'Panipat',
    stars: 5,
    text: 'Best burgers in Panipat! The Classic Burger is absolutely amazing — so fresh and tasty. Ordered 3 times this week already!'
  },
  {
    name: 'Priya Verma',
    location: 'Panipat',
    stars: 5,
    text: 'Late night cravings sorted! Chilli Garlic Noodles are on another level. Love that they\'re open till 2 AM. Pure lifesaver!'
  },
  {
    name: 'Deepak Kumar',
    location: 'NHBC Colony',
    stars: 5,
    text: 'Chana Chaat is phenomenal — so fresh and spicy. Great prices too. Mehar Foods is now our family\'s go-to for evening snacks!'
  },
  {
    name: 'Anjali Singh',
    location: 'Panipat',
    stars: 5,
    text: 'Ordered the Corn & Veggies Sandwich and it was heavenly! Super quick delivery and the WhatsApp ordering is so convenient!'
  }
];

// ============================================
// CART STATE
// ============================================
let cart = [];
let pendingSizeItem = null;

// ============================================
// CART OPERATIONS
// ============================================
function addToCart(item, size, option) {
  const price = item.hasSize
    ? (size === 'half' ? item.priceHalf : item.priceFull)
    : item.price;

  const cartId = option
    ? `${item.id}-${option.toLowerCase().replace(/\s+/g, '-')}`
    : size ? `${item.id}-${size}` : item.id;

  const label = option
    ? `${item.name} (${option})`
    : size
    ? `${item.name} (${size === 'half' ? 'Half' : 'Full'})`
    : item.name;

  const existing = cart.find(c => c.cartId === cartId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ cartId, itemId: item.id, name: label, price, qty: 1, image: item.image });
  }

  updateCartUI();
  flashAddBtn(item.id);
  bumpCartBadge();
}

function updateQty(cartId, delta) {
  const item = cart.find(c => c.cartId === cartId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.cartId !== cartId);
  updateCartUI();
}

function removeItem(cartId) {
  cart = cart.filter(c => c.cartId !== cartId);
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
  closeCart();
}

function getTotal()     { return cart.reduce((s, c) => s + c.price * c.qty, 0); }
function getItemCount() { return cart.reduce((s, c) => s + c.qty, 0); }

// ============================================
// CART UI UPDATE
// ============================================
function updateCartUI() {
  const total = getTotal();
  const count = getItemCount();

  // Badge
  document.getElementById('cart-count').textContent = count;

  // Mobile bar
  const bar = document.getElementById('mobile-cart-bar');
  if (count > 0) {
    bar.classList.add('visible');
    bar.style.display = 'flex';
    document.body.classList.add('cart-bar-visible');
  } else {
    bar.classList.remove('visible');
    bar.style.display = 'none';
    document.body.classList.remove('cart-bar-visible');
  }
  document.getElementById('mcb-count').textContent = `${count} item${count !== 1 ? 's' : ''}`;
  document.getElementById('mcb-total').textContent  = `₹${total}`;

  // Sidebar
  document.getElementById('cart-subtotal-amt').textContent = `₹${total}`;

  // 10% Discount box
  const freeDrinkBox = document.getElementById('free-drink-box');
  const offerRow     = document.getElementById('cart-offer-row');
  const discountAmt  = document.getElementById('cart-discount-amt');
  if (total >= 300) {
    const discount = Math.round(total * 0.10);
    freeDrinkBox.style.display = 'block';
    offerRow.style.display     = 'flex';
    if (discountAmt) discountAmt.textContent = `-₹${discount}`;
  } else {
    freeDrinkBox.style.display = 'none';
    offerRow.style.display     = 'none';
  }

  renderCartItems();
}

function renderCartItems() {
  const wrap = document.getElementById('cart-items-wrap');
  if (cart.length === 0) {
    wrap.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Your cart is empty!</p>
        <a href="#menu" class="btn btn-orange" id="empty-cart-browse" style="margin-top:0.5rem;font-size:0.88rem;padding:0.6rem 1.4rem">Browse Menu</a>
      </div>`;
    // Wire Browse Menu click via JS (not onclick attr, since we're in a module)
    document.getElementById('empty-cart-browse')?.addEventListener('click', () => closeCart());
    return;
  }

  wrap.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img"
           onerror="this.style.display='none'" />
      <div class="cart-item-info">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">&#8377;${item.price * item.qty}</span>
        <span class="cart-item-unit">@&#8377;${item.price} each</span>
      </div>
      <div class="cart-qty-ctrl">
        <button class="qty-btn" data-cartid="${item.cartId}" data-delta="-1" aria-label="Decrease">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" data-cartid="${item.cartId}" data-delta="1" aria-label="Increase">+</button>
      </div>
      <button class="cart-remove-btn" data-removeid="${item.cartId}" aria-label="Remove item">✕</button>
    </div>
  `).join('');

  // Wire qty and remove buttons via event delegation (no inline onclick needed)
  wrap.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => updateQty(btn.dataset.cartid, Number(btn.dataset.delta)));
  });
  wrap.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => removeItem(btn.dataset.removeid));
  });
}

// ============================================
// OPEN / CLOSE CART
// ============================================
function openCart() {
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ============================================
// SIZE MODAL (Noodles)
// ============================================
function openSizeModal(item) {
  pendingSizeItem = item;
  document.getElementById('size-modal-title').textContent = item.name;
  document.getElementById('size-half-price').textContent  = `₹${item.priceHalf}`;
  document.getElementById('size-full-price').textContent  = `₹${item.priceFull}`;
  document.getElementById('size-modal').classList.add('open');
  document.getElementById('size-overlay').classList.add('active');
}

function closeSizeModal() {
  document.getElementById('size-modal').classList.remove('open');
  document.getElementById('size-overlay').classList.remove('active');
  pendingSizeItem = null;
}

// ============================================
// DRINK OPTIONS MODAL
// ============================================
let pendingDrinkItem = null;

function openDrinkModal(item) {
  pendingDrinkItem = item;
  document.getElementById('drink-modal-title').textContent = `Choose Your ${item.name}`;

  // Render a button for each flavour option — use data attr, wire via addEventListener
  const grid = document.getElementById('drink-options-grid');
  grid.innerHTML = item.options.map(opt => `
    <button class="drink-opt-btn" data-option="${opt}">
      <span class="drink-opt-icon">🥤</span>
      <span class="drink-opt-name">${opt}</span>
      <span class="drink-opt-price">₹${item.price}</span>
    </button>
  `).join('');

  grid.querySelectorAll('.drink-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => selectDrink(btn.dataset.option));
  });

  document.getElementById('drink-modal').classList.add('open');
  document.getElementById('drink-overlay').classList.add('active');
}

function closeDrinkModal() {
  document.getElementById('drink-modal').classList.remove('open');
  document.getElementById('drink-overlay').classList.remove('active');
  pendingDrinkItem = null;
}

function selectDrink(option) {
  if (pendingDrinkItem) addToCart(pendingDrinkItem, null, option);
  closeDrinkModal();
}

// ============================================
// WHATSAPP ORDER
// ============================================
function placeOrder() {
  if (cart.length === 0) {
    alert('Please add items to your cart first!');
    return;
  }

  const nameEl    = document.getElementById('cust-name');
  const phoneEl   = document.getElementById('cust-phone');
  const addressEl = document.getElementById('cust-address');

  const name    = nameEl.value.trim();
  const phone   = phoneEl.value.trim();
  const address = addressEl.value.trim();

  // Validate Name
  if (!name) {
    nameEl.classList.add('shake');
    nameEl.focus();
    setTimeout(() => nameEl.classList.remove('shake'), 500);
    return;
  }

  // Validate Phone — must be digits only, 7–15 chars
  if (!phone || !/^\d{7,15}$/.test(phone)) {
    phoneEl.classList.add('shake');
    phoneEl.focus();
    setTimeout(() => phoneEl.classList.remove('shake'), 500);
    if (!phone) return;
    alert('Please enter a valid phone number (digits only).');
    return;
  }

  // Validate Address
  if (!address) {
    addressEl.classList.add('shake');
    addressEl.focus();
    setTimeout(() => addressEl.classList.remove('shake'), 500);
    return;
  }

  const total     = getTotal();

  // Build WhatsApp message
  let msg = `Hi Mehar Foods! 👋\n\n`;
  msg    += `📛 Name: ${name}\n`;
  msg    += `📞 Phone: ${phone}\n`;
  msg    += `📍 Address: ${address}\n`;
  msg    += `\nI want to order:\n\n`;

  cart.forEach(item => {
    msg += `• ${item.qty}x ${item.name} — ₹${item.price * item.qty}\n`;
  });

  if (total >= 300) {
    const discount = Math.round(total * 0.10);
    msg += `• 10% Discount Applied — -₹${discount}\n`;
    msg += `\n💰 *Total after discount: ₹${total - discount}*`;
  } else {
    msg += `\n💰 *Total: ₹${total}*`;
  }
  msg += `\n\n_Placed via Mehar Foods website_`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ============================================
// RENDER MENU CARDS
// ============================================
function makeCard(item) {
  const priceHTML = item.hasSize
    ? `₹${item.priceHalf} / ₹${item.priceFull} <span class="size-hint">Half / Full</span>`
    : `₹${item.price}`;

  const badgeHTML = item.badge
    ? `<span class="item-badge ${item.badgeColor}">${item.badge}</span>`
    : '';

  return `
    <div class="menu-card reveal">
      <div class="card-img-wrap">
        ${badgeHTML}
        <img src="${item.image}" alt="${item.name}" loading="lazy"
             onerror="this.parentElement.style.background='linear-gradient(135deg,#EEF7F0,#C8E0D2)'" />
        <div class="card-img-overlay"></div>
      </div>
      <div class="card-body">
        <h3 class="card-name">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">${priceHTML}</span>
          <button class="add-btn" data-id="${item.id}" aria-label="Add ${item.name} to cart">+ Add</button>
        </div>
      </div>
    </div>`;
}

function attachCardEvents(container) {
  container.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id   = btn.dataset.id;
      const item = MENU.find(m => m.id === id);
      if (!item) return;

      if (item.hasOptions) {
        openDrinkModal(item);   // show flavour picker modal
      } else if (item.hasSize) {
        openSizeModal(item);    // show size picker modal
      } else {
        addToCart(item);
      }
    });
  });
}

function renderMenu(filter) {
  const grid  = document.getElementById('menu-grid');
  const items = (filter === 'all') ? MENU : MENU.filter(m => m.category === filter);
  grid.innerHTML = items.map(makeCard).join('');
  attachCardEvents(grid);
  initReveal();
}

function renderBestSellers() {
  const grid  = document.getElementById('bs-grid');
  const items = MENU.filter(m => BEST_SELLER_IDS.includes(m.id));
  grid.innerHTML = items.map(makeCard).join('');
  attachCardEvents(grid);
}

function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  grid.innerHTML = REVIEWS.map((r, i) => {
    const emojis = ['🎉','😊','🌟','💚'];
    const stars  = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
    return `
      <div class="review-card reveal">
        <div class="review-stars">${stars}</div>
        <p class="review-text">${r.text}</p>
        <div class="review-author">
          <div class="review-avatar">${emojis[i % emojis.length]}</div>
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-loc">📍 ${r.location}</div>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ============================================
// CATEGORY FILTER
// ============================================
function initCategoryTabs() {
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.cat;
      renderMenu(cat);
    });
  });
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => observer.observe(el));
}

// Mark static reveal elements
function markRevealElements() {
  document.querySelectorAll('.feature-card, .review-card, .contact-card').forEach(el => {
    el.classList.add('reveal');
  });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ============================================
// MOBILE NAV HAMBURGER
// ============================================
function closeMobileNav() {
  document.getElementById('mobile-nav').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

function initHamburger() {
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('mobile-nav');
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('open');
  });
  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!document.getElementById('navbar').contains(e.target)) {
      closeMobileNav();
    }
  });
}

// ============================================
// CART BADGE BUMP ANIMATION
// ============================================
function bumpCartBadge() {
  const badge = document.getElementById('cart-count');
  badge.classList.remove('bump');
  void badge.offsetWidth; // reflow
  badge.classList.add('bump');
  setTimeout(() => badge.classList.remove('bump'), 300);
}

// ============================================
// ADD BUTTON FLASH
// ============================================
function flashAddBtn(itemId) {
  document.querySelectorAll(`.add-btn[data-id="${itemId}"]`).forEach(btn => {
    btn.textContent = '✓ Added!';
    btn.classList.add('added');
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '+ Add';
      btn.classList.remove('added');
      btn.disabled = false;
    }, 1300);
  });
}

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = document.getElementById('navbar').offsetHeight + 8;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ============================================
// SIZE MODAL BUTTONS
// ============================================
function initSizeModal() {
  document.getElementById('size-half-btn').addEventListener('click', () => {
    if (pendingSizeItem) addToCart(pendingSizeItem, 'half');
    closeSizeModal();
  });
  document.getElementById('size-full-btn').addEventListener('click', () => {
    if (pendingSizeItem) addToCart(pendingSizeItem, 'full');
    closeSizeModal();
  });
}

// ============================================
// CART BUTTON
// ============================================
function initCartButton() {
  document.getElementById('cart-btn').addEventListener('click', openCart);
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic content
  renderBestSellers();
  renderMenu('all');
  renderReviews();

  // Init interactions
  initCategoryTabs();
  initNavbarScroll();
  initHamburger();
  initCartButton();
  initSizeModal();
  initSmoothScroll();

  // Scroll reveal
  markRevealElements();
  setTimeout(() => initReveal(), 150);

  // Init cart (empty)
  updateCartUI();

  // Wire overlay + mobile bar clicks via JS (not inline onclick)
  document.getElementById('cart-overlay').addEventListener('click', closeCart);
  document.getElementById('cart-close-btn').addEventListener('click', closeCart);
  document.getElementById('mobile-cart-bar').addEventListener('click', openCart);

  // Wire cart footer buttons
  document.getElementById('place-order-btn')?.addEventListener('click', placeOrder);
  document.querySelector('.btn-clear')?.addEventListener('click', clearCart);

  // Wire size modal close/overlay
  document.getElementById('size-overlay').addEventListener('click', closeSizeModal);
  document.querySelector('#size-modal .size-modal-close')?.addEventListener('click', closeSizeModal);

  // Wire drink modal close/overlay
  document.getElementById('drink-overlay').addEventListener('click', closeDrinkModal);
  document.querySelector('#drink-modal .size-modal-close')?.addEventListener('click', closeDrinkModal);

  // Wire mobile nav links to close nav
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Observe any new cards after initial render
  const menuObserver = new MutationObserver(() => initReveal());
  menuObserver.observe(document.getElementById('menu-grid'), { childList: true });
  menuObserver.observe(document.getElementById('bs-grid'),   { childList: true });
});

