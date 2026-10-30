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
  {
    id: 'samsung-galaxy-s26-ultra',
    name: 'Samsung Galaxy S26 Ultra',
    category: 'Phones',
    price: 179999,
    type: 'phone',
    tone: '#f3eded',
    halo: '#ead5d7',
    tag: 'NEW',
  },
  {
    id: 'jbl-party-speaker',
    name: 'JBL Party Speaker',
    category: 'Audio',
    price: 32999,
    type: 'speaker',
    tone: '#e9e9e9',
    halo: '#d8d8d8',
    tag: 'NEW',
  },
  {
    id: 'usb-c-charger-cable',
    name: 'USB-C Charger and Cable',
    category: 'Accessories',
    price: 2499,
    type: 'accessory',
    tone: '#f0f0ee',
    halo: '#e0e0de',
    tag: '',
  },
  {
    id: 'airpods-max',
    name: 'Apple AirPods Max',
    category: 'Audio',
    price: 69999,
    type: 'headphones',
    tone: '#eeeeef',
    halo: '#dedee0',
    tag: '',
    variants: [
      { name: 'Charcoal Black', image: 'Assets/Apple AirPods Max - Charcoal Black.png', swatch: '#292b30' },
      { name: 'Mint Green', image: 'Assets/Apple AirPods Max - Mint Green.png', swatch: '#cbd7ca' },
      { name: 'Sky Blue', image: 'Assets/Apple AirPods Max - Sky Blue.png', swatch: '#84a9d3' },
    ],
  },
];

const productImages = {
  'phone-pro': 'Assets/Product 3.png',
  buds: 'Assets/Product 4.png',
  'speaker-mini': 'Assets/JBL Party Speaker with Cyan LED Glow.png',
  'laptop-air': 'Assets/Product 2.png',
  'watch-active': 'Assets/Product 15.png',
  'phone-lite': 'Assets/Product 3.png',
  'laptop-pro': 'Assets/Product 2.png',
  'samsung-galaxy-s26-ultra': 'Assets/Samsung Galaxy S26 Ultra Product Render.png',
  'jbl-party-speaker': 'Assets/JBL Party Speaker with Cyan LED Glow.png',
  'usb-c-charger-cable': 'Assets/White USB-C Charger and Coiled Cable.png',
  'airpods-max': 'Assets/Apple AirPods Max - Charcoal Black.png',
};

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
    const legacyAirPodsVariants = {
      'airpods-max-charcoal': 'Charcoal Black',
      'airpods-max-mint': 'Mint Green',
      'airpods-max-sky-blue': 'Sky Blue',
    };
    return JSON.parse(localStorage.getItem('gg-cart') || '[]').map((item) => (
      legacyAirPodsVariants[item.id]
        ? { ...item, id: 'airpods-max', variantColor: legacyAirPodsVariants[item.id] }
        : item
    ));
  } catch {
    return [];
  }
}

function cartItemKey(item) {
  return `${item.id}::${item.variantColor || ''}`;
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

function logo(variant = 'light') {
  const image = variant === 'dark'
    ? 'Assets/Good Gadgets Tech Logo 2.png'
    : 'Assets/Good Gadgets KE Logo Lockup.png';

  return `
    <a class="brand" href="index.html">
      <img src="${image}" alt="Good Gadgets KE logo">
    </a>
  `;
}

function header(activePage = '') {
  const navigation = [
    ['Home', 'index.html'],
    ['Phones', 'shop.html?category=Phones'],
    ['Laptops', 'shop.html?category=Laptops'],
    ['Audio', 'shop.html?category=Audio'],
    ['Accessories', 'shop.html'],
    ['Smart Devices', 'shop.html?category=Smart%20Devices'],
    ['Deals', 'shop.html'],
  ];

  return `
    <div class="announcement">
      <b>◆</b> SMART TECH. SMART LIVING. &nbsp;
      <span style="color: #aaa">|</span> &nbsp; Your everyday tech destination
    </div>
    <header class="site-header site-header-dark">
      <div class="header-main">
        <button class="menu-toggle" aria-label="Toggle menu">${icons.menu}</button>
        ${logo('dark')}
        <form class="search-wrap" id="search-form">
          <input id="global-search" placeholder="Search phones, laptops, accessories..." aria-label="Search products">
          <button aria-label="Search">${icons.search}</button>
        </form>
        <div class="header-actions">
          <a class="head-action" href="profile.html" aria-label="User profile">
            ${icons.user}<span class="account-label">Profile</span>
          </a>
          <a class="head-action cart-action" href="cart.html" aria-label="Shopping cart">
            ${icons.bag}<span class="account-label">Cart</span>
            <span class="cart-count">0</span>
          </a>
        </div>
      </div>
      <nav class="nav-row">
        <div class="nav-inner">
          ${navigation.map(([label, href]) => `
            <a class="${(label === 'Home' && activePage === 'home') || label.toLowerCase() === activePage ? 'active' : ''}" href="${href}">${label}</a>
          `).join('')}
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
          ${logo('dark')}
          <p>Your everyday destination for phones, computers, accessories and the technology that keeps you connected.</p>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <a href="shop.html">Browse products</a>
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
  const detailUrl = `product.html?id=${encodeURIComponent(product.id)}`;
  const defaultVariant = product.variants?.[0];
  const whatsappMessage = encodeURIComponent(
    product.variants
      ? `Hi Good Gadgets KE, I would like to ask about ${product.name}. Available colors: ${product.variants.map((variant) => variant.name).join(', ')}.`
      : `Hi Good Gadgets KE, I would like to order ${product.name} for KSh ${product.price.toLocaleString('en-KE')}.`,
  );
  const shopListingImage = document.body.dataset.page === 'shop'
    ? (productImages[product.id] || '')
    : '';

  return `
    <article class="product-card" data-id="${product.id}" data-category="${product.category}" data-price="${product.price}">
      <a class="product-image product-image-link" href="${detailUrl}" aria-label="View details for ${product.name}" style="--tone: ${product.tone}; --halo: ${product.halo}">
        ${product.tag ? `<span class="product-badge">${product.tag}</span>` : ''}
        ${shopListingImage
          ? `<img class="listing-product-photo" src="${shopListingImage}" alt="${product.name}">`
          : `<div class="product-object ${product.type}"></div>`}
      </a>
      <div class="product-info">
        <span class="product-category">${product.category} · Demo listing</span>
        <h3><a class="product-detail-link" href="${detailUrl}">${product.name}</a></h3>
        ${product.variants ? `<p class="product-variant-summary">${product.variants.length} colors · Choose a color</p>` : ''}
        <div class="price">KSh ${product.price.toLocaleString('en-KE')}</div>
        <div class="stock">Sample product · details to be confirmed</div>
        <div class="product-actions">
          <button class="add-btn" data-add="${product.id}" ${defaultVariant ? `data-variant-color="${defaultVariant.name}"` : ''}>Add to bag</button>
          <a class="quick-view" href="${detailUrl}" aria-label="View details for ${product.name}" title="View product details">${icons.eye}</a>
        </div>
        <a class="whatsapp-order" href="https://wa.me/254757852033?text=${whatsappMessage}" target="_blank" rel="noopener noreferrer" aria-label="Order ${product.name} on WhatsApp">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 11.7a8.4 8.4 0 0 1-12.5 7.4L3 20.3l1.2-4.6a8.4 8.4 0 1 1 16.2-4Z"></path><path d="M8.2 8.1c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.6 1 1.4 1.7 2.4 2.2.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5 0 .4-.2 1-.6 1.3-.4.4-1 .6-1.7.5-1-.2-2.2-.7-3.5-1.8-1.5-1.3-2.4-2.8-2.6-3.8-.2-.8 0-1.6.5-2.2Z"></path></svg>
          WhatsApp
        </a>
      </div>
    </article>
  `;
}

function productDescription(product) {
  const descriptions = {
    Phones: 'Explore this phone from our mobile range. Contact us to confirm the exact storage, color, condition, and included accessories before ordering.',
    Laptops: 'A computer listing from our laptops range. Contact us to confirm the exact processor, memory, storage, display, and warranty before ordering.',
    Audio: 'An audio product from our headphones and speaker range. Contact us to confirm the model, color, included accessories, and warranty before ordering.',
    Accessories: 'An everyday accessory from our gadgets range. Check device compatibility and what is included with us before ordering.',
    'Smart Devices': 'A connected device from our smart technology range. Contact us to confirm compatibility, features, and included accessories before ordering.',
  };
  return descriptions[product.category] || `Explore ${product.name} from Good Gadgets KE. Contact us to confirm product details before ordering.`;
}

function setupProductDetail() {
  const target = document.querySelector('#product-detail-content');
  if (!target) return;

  const productId = new URLSearchParams(window.location.search).get('id');
  const product = products.find((item) => item.id === productId);
  if (!product) {
    document.title = 'Product not found | Good Gadgets KE';
    target.innerHTML = `
      <div class="product-detail-not-found">
        <h1>Product not found</h1>
        <p>That item may have moved. Browse the shop to find another product.</p>
        <a class="btn btn-primary" href="shop.html">Browse the shop</a>
      </div>
    `;
    target.setAttribute('aria-busy', 'false');
    return;
  }

  document.title = `${product.name} | Good Gadgets KE`;
  const variants = product.variants || [];
  const defaultVariant = variants[0];
  const image = defaultVariant?.image || productImages[product.id];
  const whatsappMessage = encodeURIComponent(
    `Hi Good Gadgets KE, I would like to ask about ${product.name}${defaultVariant ? ` in ${defaultVariant.name}` : ''}.`,
  );
  target.innerHTML = `
    <nav class="product-breadcrumbs" aria-label="Breadcrumb">
      <a href="index.html">Home</a><span>›</span><a href="shop.html?category=${encodeURIComponent(product.category)}">${product.category}</a><span>›</span><span>${product.name}</span>
    </nav>
    <div class="product-detail-layout">
      <div class="product-detail-image" style="--tone: ${product.tone}; --halo: ${product.halo}">
        ${image
          ? `<img id="product-detail-photo" src="${image}" alt="${product.name}${defaultVariant ? ` — ${defaultVariant.name}` : ''}">`
          : `<div class="product-object ${product.type}" aria-hidden="true"></div>`}
      </div>
      <section class="product-detail-info" aria-labelledby="product-detail-title">
        <span class="product-category">${product.category} · Demo listing</span>
        <h1 id="product-detail-title">${product.name}</h1>
        <p class="product-detail-price">KSh ${product.price.toLocaleString('en-KE')}</p>
        ${variants.length ? `
          <div class="product-color-picker">
            <p>Color: <strong id="selected-product-color">${defaultVariant.name}</strong></p>
            <div class="product-color-options" role="group" aria-label="Choose a color">
              ${variants.map((variant, index) => `
                <button class="product-color-option" type="button" data-product-variant="${index}" data-variant-color="${variant.name}" aria-pressed="${index === 0}" aria-label="Choose ${variant.name}">
                  <span class="product-color-swatch" style="--swatch-color: ${variant.swatch}" aria-hidden="true"></span>
                  <span>${variant.name}</span>
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}
        <h2>Description</h2>
        <p class="product-detail-description">${productDescription(product)}</p>
        <dl class="product-detail-facts">
          <div><dt>Category</dt><dd>${product.category}</dd></div>
          <div><dt>Availability</dt><dd>Confirm with our team</dd></div>
        </dl>
        <button class="btn btn-primary product-detail-add" type="button" data-add="${product.id}" ${defaultVariant ? `data-variant-color="${defaultVariant.name}"` : ''}>Add to bag</button>
        <a class="whatsapp-order product-detail-whatsapp" href="https://wa.me/254757852033?text=${whatsappMessage}" target="_blank" rel="noopener noreferrer" aria-label="Ask about ${product.name} on WhatsApp">WhatsApp</a>
        <p class="product-detail-note">Sample listing: confirm pricing, stock, specifications, and warranty before ordering.</p>
      </section>
    </div>
  `;
  if (variants.length) {
    const photo = target.querySelector('#product-detail-photo');
    const selectedColor = target.querySelector('#selected-product-color');
    const addButton = target.querySelector('.product-detail-add');
    const whatsappLink = target.querySelector('.product-detail-whatsapp');
    target.querySelectorAll('[data-product-variant]').forEach((button) => {
      button.addEventListener('click', () => {
        const variant = variants[Number(button.dataset.productVariant)];
        if (!variant) return;

        photo.src = variant.image;
        photo.alt = `${product.name} — ${variant.name}`;
        selectedColor.textContent = variant.name;
        addButton.dataset.variantColor = variant.name;
        target.querySelectorAll('[data-product-variant]').forEach((option) => {
          option.setAttribute('aria-pressed', String(option === button));
        });
        whatsappLink.href = `https://wa.me/254757852033?text=${encodeURIComponent(`Hi Good Gadgets KE, I would like to ask about ${product.name} in ${variant.name}.`)}`;
      });
    });
  }
  target.setAttribute('aria-busy', 'false');
}

function renderProducts(productList, targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  target.setAttribute('aria-busy', 'false');
  target.innerHTML = productList.length
    ? productList.map(productCard).join('')
    : '<div class="empty-state">No demo products match these filters. Try clearing a filter or searching another term.</div>';
}

function showProductSkeletons(targetSelector, count = 4) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  target.setAttribute('aria-busy', 'true');
  target.innerHTML = Array.from({ length: count }, () => `
    <div class="skeleton-card" aria-hidden="true">
      <div class="skeleton-image"></div>
      <div class="skeleton-copy">
        <span class="skeleton-line short"></span>
        <span class="skeleton-line medium"></span>
        <span class="skeleton-line price-line"></span>
        <span class="skeleton-line"></span>
      </div>
    </div>
  `).join('');
}

function toast(message) {
  const element = document.querySelector('.toast');
  if (!element) return;

  element.textContent = message;
  element.classList.add('show');
  clearTimeout(window.ggToast);
  window.ggToast = setTimeout(() => element.classList.remove('show'), 2600);
}

function setupHeroSlideshow() {
  const slider = document.querySelector('#hero-slider');
  const dotsContainer = document.querySelector('#hero-slider-dots');
  if (!slider || !dotsContainer) return;
  const pauseArea = slider.parentElement;

  const slides = [...slider.querySelectorAll('.hero-slide')];
  if (slides.length < 2) return;

  let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains('is-active')));
  let timer;

  dotsContainer.innerHTML = slides.map((_, index) => `
    <button class="hero-slider-dot" type="button" data-slide-to="${index}" aria-label="Show product ${index + 1}" aria-pressed="${index === activeIndex}"></button>
  `).join('');
  const dots = [...dotsContainer.querySelectorAll('.hero-slider-dot')];

  function stopAutoplay() {
    window.clearInterval(timer);
    timer = undefined;
  }

  function startAutoplay() {
    stopAutoplay();
    timer = window.setInterval(() => showSlide(activeIndex + 1, false), 5000);
  }

  function showSlide(index, restartTimer = true) {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
      dots[slideIndex].setAttribute('aria-pressed', String(isActive));
    });
    if (restartTimer) startAutoplay();
  }

  pauseArea.querySelectorAll('[data-slide-step]').forEach((button) => {
    button.addEventListener('click', () => showSlide(activeIndex + Number(button.dataset.slideStep)));
  });
  dotsContainer.addEventListener('click', (event) => {
    const dot = event.target.closest('[data-slide-to]');
    if (dot) showSlide(Number(dot.dataset.slideTo));
  });
  startAutoplay();
}

function setup() {
  const headerElement = document.querySelector('#site-header');
  if (headerElement) {
    headerElement.innerHTML = header(document.body.dataset.page || '');
  }

  const footerElement = document.querySelector('#site-footer');
  if (footerElement) footerElement.innerHTML = footer();

  updateCartCount();
  setupHeroSlideshow();
  setupProductDetail();

  if (document.querySelector('#home-products')) {
    showProductSkeletons('#home-products', 5);
    window.setTimeout(() => renderProducts(products.slice(0, 5), '#home-products'), 420);
  }

  if (document.querySelector('#new-products')) {
    showProductSkeletons('#new-products', 2);
    window.setTimeout(() => {
      const newProducts = products.filter((product) => product.tag === 'NEW' || product.tag === 'FEATURED');
      renderProducts(newProducts, '#new-products');
    }, 420);
  }

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
      const variantColor = addButton.dataset.variantColor || '';
      const items = cart();
      const existingItem = items.find((item) => item.id === product.id && (item.variantColor || '') === variantColor);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        items.push({ id: product.id, qty: 1, ...(variantColor ? { variantColor } : {}) });
      }

      saveCart(items);
      toast(`${product.name}${variantColor ? ` — ${variantColor}` : ''} added to your bag (demo)`);
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

}

function setupShop() {
  const params = new URLSearchParams(location.search);
  const query = params.get('q') || '';
  const globalSearch = document.querySelector('#global-search');
  const shopSearch = document.querySelector('#shop-search');

  if (globalSearch) globalSearch.value = query;
  if (shopSearch) shopSearch.value = query;

  showProductSkeletons('#shop-products', 6);

  let selectedCategory = params.get('category') || '';
  const selectedFilter = [...document.querySelectorAll('[name="category-filter"]')]
    .find((element) => element.value === selectedCategory);
  if (selectedFilter) selectedFilter.checked = true;

  const categoryTitle = document.querySelector('#category-title');
  const categorySubtitle = document.querySelector('#category-subtitle');
  function updateCategoryHeading() {
    const title = selectedCategory || 'All Products';
    if (categoryTitle) categoryTitle.textContent = title;
    if (categorySubtitle) {
      categorySubtitle.textContent = selectedCategory
        ? `Explore our ${selectedCategory.toLowerCase()} collection.`
        : 'Browse the latest gadgets from Good Gadgets KE.';
    }
  }
  updateCategoryHeading();

  function applyFilters() {
    const searchTerm = (shopSearch?.value || '').toLowerCase();
    const filteredProducts = products.filter((product) => {
      const matchesSearch = !searchTerm
        || `${product.name} ${product.category}`.toLowerCase().includes(searchTerm);
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const priceRanges = [...document.querySelectorAll('[name="price-filter"]:checked')]
        .map((element) => element.value.split('-').map((bound) => bound ? Number(bound) : Infinity));
      const matchesPrice = !priceRanges.length || priceRanges.some(([min, max]) => product.price >= min && product.price < max);
      return matchesSearch && matchesCategory && matchesPrice;
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
      document.querySelectorAll('[name="category-filter"]').forEach((other) => {
        other.checked = other === element && element.checked;
      });
      updateCategoryHeading();
      applyFilters();
    });
  });

  document.querySelectorAll('[name="price-filter"]').forEach((element) => {
    element.addEventListener('change', applyFilters);
  });
  document.querySelector('#sort-products')?.addEventListener('change', applyFilters);
  shopSearch?.addEventListener('input', applyFilters);
  window.setTimeout(applyFilters, 420);
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
    const itemName = `${product.name}${item.variantColor ? ` — ${item.variantColor}` : ''}`;
    const encodedCartKey = encodeURIComponent(cartItemKey(item));
    return `
      <div class="cart-row">
        <div>
          <strong>${itemName}</strong>
          <div class="product-category">Demo listing · ${product.category}</div>
        </div>
        <input class="cart-qty" type="number" min="1" max="10" value="${item.qty}"
          data-cart-key="${encodedCartKey}" aria-label="Quantity for ${itemName}">
        <strong>KSh ${(product.price * item.qty).toLocaleString('en-KE')}</strong>
        <button class="cart-remove" data-cart-remove="${encodedCartKey}" aria-label="Remove ${itemName}">×</button>
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
    if (!event.target.matches('[data-cart-key]')) return;
    const selectedKey = decodeURIComponent(event.target.dataset.cartKey);

    const updatedItems = cart().map((item) => (
      cartItemKey(item) === selectedKey
        ? { ...item, qty: Math.max(1, Math.min(10, Number(event.target.value) || 1)) }
        : item
    ));
    saveCart(updatedItems);
    setupCart();
  });

  cartElement.addEventListener('click', (event) => {
    const removeButton = event.target.closest('[data-cart-remove]');
    if (!removeButton) return;

    const selectedKey = decodeURIComponent(removeButton.dataset.cartRemove);
    saveCart(cart().filter((item) => cartItemKey(item) !== selectedKey));
    setupCart();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setup();
  if (document.querySelector('#shop-products')) setupShop();
  if (document.querySelector('#cart-items')) setupCart();
});
