const products = [
  {
    id: 'phone-pro',
    name: 'Nova X Pro 256GB',
    category: 'Phones',
    price: 84999,
    type: 'phone',
    tone: '#f3eded',
    halo: '#ead5d7',
    tag: 'FEATURED',
  },
  {
    id: 'buds',
    name: 'SoundPods Wireless Earbuds',
    category: 'Audio',
    price: 7499,
    type: 'headphones',
    tone: '#f0f0ee',
    halo: '#e0e0de',
    tag: 'POPULAR',
  },
  {
    id: 'laptop-air',
    name: 'AeroBook 14 Laptop',
    category: 'Laptops',
    price: 118999,
    type: 'laptop',
    tone: '#e9edef',
    halo: '#d7e0e2',
    tag: 'NEW',
  },
  {
    id: 'tablet-11',
    name: 'TabView 11 Wi-Fi 128GB',
    category: 'Smart Devices',
    price: 45999,
    type: 'tablet',
    tone: '#efeee9',
    halo: '#e1ded2',
    tag: '',
  },
  {
    id: 'watch-active',
    name: 'Pulse Active Smartwatch',
    category: 'Smart Devices',
    price: 12999,
    type: 'watch',
    tone: '#f2ece8',
    halo: '#e7d9d1',
    tag: '',
  },
  {
    id: 'speaker-mini',
    name: 'BassBox Mini Speaker',
    category: 'Audio',
    price: 8999,
    type: 'speaker',
    tone: '#e9e9e9',
    halo: '#d8d8d8',
    tag: '',
  },
  {
    id: 'phone-lite',
    name: 'Nova Lite 128GB',
    category: 'Phones',
    price: 32999,
    type: 'phone',
    tone: '#eaf0f0',
    halo: '#d8e4e4',
    tag: '',
  },
  {
    id: 'laptop-pro',
    name: 'CreatorBook 15 Laptop',
    category: 'Laptops',
    price: 154999,
    type: 'laptop',
    tone: '#eee9e7',
    halo: '#e4d8d4',
    tag: '',
  },
];

const icons = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>',
  bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
};

function cart() {
  try {
    return JSON.parse(localStorage.getItem('gg-cart') || '[]');
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem('gg-cart', JSON.stringify(items));
  updateCartCount();
}

function updateCartCount() {
  const itemCount = cart().reduce((total, item) => total + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach((element) => {
    element.textContent = itemCount;
  });
}

function logo() {
  return `
    <a class="brand" href="index.html">
      <img src="Assets/good-gadgets-logo-transparent.png" alt="Good Gadgets KE logo">
      <span class="brand-text">
        <strong>GOOD GADGETS</strong>
        <small>SMART TECH. SMART LIVING.</small>
      </span>
    </a>
  `;
}

function header(activePage = '') {
  return `
    <div class="announcement">
      <b>◆</b> SMART TECH. SMART LIVING. &nbsp;
      <span style="color: #aaa">|</span> &nbsp; Your everyday tech destination
    </div>
    <header class="site-header">
      <div class="header-main">
        <button class="menu-toggle" aria-label="Toggle menu">${icons.menu}</button>
        ${logo()}
        <form class="search-wrap" id="search-form">
          <input id="global-search" placeholder="Search phones, laptops, accessories..." aria-label="Search products">
          <button aria-label="Search">${icons.search}</button>
        </form>
        <div class="header-actions">
          <a class="head-action" href="contact.html">
            ${icons.user}<span class="account-label">Support</span>
          </a>
          <a class="head-action cart-action" href="cart.html" aria-label="Shopping cart">
            ${icons.bag}<span class="account-label">Cart</span>
            <span class="cart-count">0</span>
          </a>
        </div>
      </div>
      <nav class="nav-row">
        <div class="nav-inner">
          <a class="${activePage === 'home' ? 'active' : ''}" href="index.html">Home</a>
          <a class="${activePage === 'shop' ? 'active' : ''}" href="shop.html">Shop all</a>
          <a class="${activePage === 'new' ? 'active' : ''}" href="new-arrivals.html">New arrivals</a>
          <a class="${activePage === 'collections' ? 'active' : ''}" href="collections.html">Collections</a>
          <span class="nav-spacer"></span>
          <span class="nav-note">Find your next favourite gadget</span>
        </div>
      </nav>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-brand">
          ${logo()}
          <p>Your everyday destination for phones, computers, accessories and the technology that keeps you connected.</p>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <a href="shop.html">Shop all</a>
          <a href="new-arrivals.html">New arrivals</a>
          <a href="collections.html">Collections</a>
          <a href="about.html">About us</a>
        </div>
        <div class="footer-col">
          <h4>Help</h4>
          <a href="contact.html">Contact</a>
          <a href="contact.html#faq">FAQs</a>
          <a href="contact.html#delivery">Delivery information</a>
          <a href="contact.html#returns">Returns &amp; warranty</a>
        </div>
        <div class="footer-col">
          <h4>Good Gadgets KE</h4>
          <p>Kenya</p>
          <p>Customer support details coming soon</p>
          <p>Payment and delivery details will be confirmed before launch</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Good Gadgets KE. All rights reserved.</span>
        <span>Built for smart everyday living.</span>
      </div>
    </footer>
    <div class="toast" role="status" aria-live="polite"></div>
  `;
}

function productCard(product) {
  return `
    <article class="product-card" data-id="${product.id}" data-category="${product.category}" data-price="${product.price}">
      <div class="product-image" style="--tone: ${product.tone}; --halo: ${product.halo}">
        ${product.tag ? `<span class="product-badge">${product.tag}</span>` : ''}
        <div class="product-object ${product.type}"></div>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category} · Demo listing</span>
        <h3>${product.name}</h3>
        <div class="price">KSh ${product.price.toLocaleString('en-KE')}</div>
        <div class="stock">Sample product · details to be confirmed</div>
        <div class="product-actions">
          <button class="add-btn" data-add="${product.id}">Add to bag</button>
          <button class="quick-view" aria-label="View ${product.name}" title="Demo listing">${icons.eye}</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(productList, targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  target.innerHTML = productList.length
    ? productList.map(productCard).join('')
    : '<div class="empty-state">No demo products match these filters. Try clearing a filter or searching another term.</div>';
}

function toast(message) {
  const element = document.querySelector('.toast');
  if (!element) return;

  element.textContent = message;
  element.classList.add('show');
  clearTimeout(window.ggToast);
  window.ggToast = setTimeout(() => element.classList.remove('show'), 2600);
}

function setup() {
  const headerElement = document.querySelector('#site-header');
  if (headerElement) {
    headerElement.innerHTML = header(document.body.dataset.page || '');
  }

  const footerElement = document.querySelector('#site-footer');
  if (footerElement) footerElement.innerHTML = footer();

  updateCartCount();

  document.querySelector('.menu-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-row').classList.toggle('open');
  });

  document.querySelector('#search-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = document.querySelector('#global-search').value.trim();
    location.href = `shop.html${query ? `?q=${encodeURIComponent(query)}` : ''}`;
  });

  document.body.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add]');
    if (addButton) {
      const product = products.find((item) => item.id === addButton.dataset.add);
      const items = cart();
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        items.push({ id: product.id, qty: 1 });
      }

      saveCart(items);
      toast(`${product.name} added to your bag (demo)`);
    }

    if (event.target.closest('[data-checkout]')) {
      toast('Checkout is not connected yet. Payment and delivery setup is required before launch.');
    }
  });

  document.querySelectorAll('.newsletter form, .contact-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      toast('Thanks! This form will be connected before launch.');
      form.reset();
    });
  });

  if (document.querySelector('#home-products')) {
    renderProducts(products.slice(0, 4), '#home-products');
  }

  if (document.querySelector('#new-products')) {
    renderProducts(
      products.filter((product) => product.tag === 'NEW' || product.tag === 'FEATURED'),
      '#new-products',
    );
  }
}

function setupShop() {
  const params = new URLSearchParams(location.search);
  const query = params.get('q') || '';
  const globalSearch = document.querySelector('#global-search');
  const shopSearch = document.querySelector('#shop-search');

  if (globalSearch) globalSearch.value = query;
  if (shopSearch) shopSearch.value = query;

  let selectedCategory = params.get('category') || '';
  const selectedFilter = [...document.querySelectorAll('[name="category-filter"]')]
    .find((element) => element.value === selectedCategory);
  if (selectedFilter) selectedFilter.checked = true;

  function applyFilters() {
    const searchTerm = (shopSearch?.value || '').toLowerCase();
    const filteredProducts = products.filter((product) => {
      const matchesSearch = !searchTerm
        || `${product.name} ${product.category}`.toLowerCase().includes(searchTerm);
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    const sortOrder = document.querySelector('#sort-products')?.value;
    if (sortOrder === 'low') filteredProducts.sort((a, b) => a.price - b.price);
    if (sortOrder === 'high') filteredProducts.sort((a, b) => b.price - a.price);

    document.querySelector('#result-count').textContent = `${filteredProducts.length} demo products`;
    renderProducts(filteredProducts, '#shop-products');
  }

  document.querySelectorAll('[name="category-filter"]').forEach((element) => {
    element.addEventListener('change', () => {
      selectedCategory = element.checked ? element.value : '';
      applyFilters();
    });
  });

  document.querySelector('#sort-products')?.addEventListener('change', applyFilters);
  shopSearch?.addEventListener('input', applyFilters);
  applyFilters();
}

function setupCart() {
  const cartElement = document.querySelector('#cart-items');
  if (!cartElement) return;

  const items = cart();
  if (!items.length) {
    cartElement.innerHTML = `
      <div class="cart-empty">
        <h2>Your bag is waiting</h2>
        <p>Explore the demo catalogue and add a few items to get started.</p>
        <a class="btn btn-primary" href="shop.html">Explore the shop</a>
      </div>
    `;
    document.querySelector('#cart-summary').hidden = true;
    return;
  }

  cartElement.innerHTML = items.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return `
      <div class="cart-row">
        <div>
          <strong>${product.name}</strong>
          <div class="product-category">Demo listing · ${product.category}</div>
        </div>
        <input class="cart-qty" type="number" min="1" max="10" value="${item.qty}"
          data-qty="${item.id}" aria-label="Quantity for ${product.name}">
        <strong>KSh ${(product.price * item.qty).toLocaleString('en-KE')}</strong>
        <button class="cart-remove" data-remove="${item.id}" aria-label="Remove ${product.name}">×</button>
      </div>
    `;
  }).join('');

  const subtotal = items.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return total + product.price * item.qty;
  }, 0);

  document.querySelector('#cart-subtotal').textContent = `KSh ${subtotal.toLocaleString('en-KE')}`;
  document.querySelector('#cart-subtotal-copy').textContent = `KSh ${subtotal.toLocaleString('en-KE')}`;
  document.querySelector('#cart-summary').hidden = false;

  cartElement.addEventListener('change', (event) => {
    if (!event.target.matches('[data-qty]')) return;

    const updatedItems = cart().map((item) => (
      item.id === event.target.dataset.qty
        ? { ...item, qty: Math.max(1, Math.min(10, Number(event.target.value) || 1)) }
        : item
    ));
    saveCart(updatedItems);
    setupCart();
  });

  cartElement.addEventListener('click', (event) => {
    const removeButton = event.target.closest('[data-remove]');
    if (!removeButton) return;

    saveCart(cart().filter((item) => item.id !== removeButton.dataset.remove));
    setupCart();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setup();
  if (document.querySelector('#shop-products')) setupShop();
  if (document.querySelector('#cart-items')) setupCart();
});
