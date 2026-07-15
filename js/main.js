(() => {
  const assetBase = document.body.dataset.assetBase || "";

  const PRODUCTS = [
    {
      id: "honey",
      name: "Honey I Washed My Hair",
      category: "Shampoo",
      typeLabel: "Shampoo sólido",
      need: ["Hidratación"],
      hairType: ["Seco", "Normal"],
      ingredients: ["Miel", "Bergamota", "Naranja"],
      format: "Sólido",
      packaging: "Sin envase",
      price: 10,
      badge: "Sin envase",
      description: "Aporta suavidad y brillo.",
      image: "assets/webp/hair-care/hair-care-bloque-4-1-desktop.webp",
      homeImage: "assets/webp/imagen-home/home-bloque-4-1-desktop.webp",
      featuredRank: 1,
      isBestseller: true,
      isNew: false,
    },
    {
      id: "super-milk",
      name: "Super Milk",
      category: "Acondicionador",
      typeLabel: "Spray acondicionador",
      need: ["Hidratación"],
      hairType: ["Seco", "Rizado"],
      ingredients: ["Leche de almendras", "Coco", "Vainilla"],
      format: "Spray",
      packaging: "Con envase",
      price: 18,
      badge: "Más vendido",
      description: "Hidrata, suaviza y facilita el peinado.",
      image: "assets/webp/hair-care/hair-care-bloque-4-2-desktop.webp",
      homeImage: "assets/webp/hair-care/hair-care-bloque-4-8-desktop.webp",
      featuredRank: 2,
      isBestseller: true,
      isNew: false,
    },
    {
      id: "roots",
      name: "Roots",
      category: "Tratamientos",
      typeLabel: "Tratamiento de cuero cabelludo",
      need: ["Sensibilidad"],
      hairType: ["Normal"],
      ingredients: ["Menta", "Romero", "Árbol del té"],
      format: "Crema",
      packaging: "Sin envase",
      price: 14,
      badge: "Hecho a mano",
      description: "Equilibra y revitaliza el cuero cabelludo.",
      image: "assets/webp/hair-care/hair-care-bloque-4-3-desktop.webp",
      homeImage: "assets/webp/hair-care/hair-care-bloque-4-3-desktop.webp",
      featuredRank: 3,
      isBestseller: true,
      isNew: false,
    },
    {
      id: "power",
      name: "Power",
      category: "Tratamientos",
      typeLabel: "Mascarilla capilar",
      need: ["Reparación"],
      hairType: ["Seco", "Rizado"],
      ingredients: ["Proteína de soja", "Jojoba"],
      format: "Mascarilla",
      packaging: "Con envase",
      price: 22,
      badge: "Nuevo",
      description: "Repara y fortalece en profundidad.",
      image: "assets/webp/hair-care/hair-care-bloque-4-4-desktop.webp",
      homeImage: "assets/webp/hair-care/hair-care-bloque-4-4-desktop.webp",
      featuredRank: 4,
      isBestseller: true,
      isNew: true,
    },
    {
      id: "rehab",
      name: "Rehab",
      category: "Shampoo",
      typeLabel: "Shampoo sólido",
      need: ["Reparación", "Hidratación"],
      hairType: ["Seco", "Normal"],
      ingredients: ["Banana", "Coco", "Azúcar"],
      format: "Sólido",
      packaging: "Sin envase",
      price: 10,
      badge: "Sin envase",
      description: "Limpia y revitaliza el cabello seco.",
      image: "assets/webp/hair-care/hair-care-bloque-4-5-desktop.webp",
      featuredRank: 5,
      isBestseller: false,
      isNew: false,
    },
    {
      id: "wasabi-shan-kui",
      name: "Wasabi Shan Kui",
      category: "Shampoo",
      typeLabel: "Shampoo líquido",
      need: ["Volumen"],
      hairType: ["Graso", "Normal"],
      ingredients: ["Wasabi", "Menta", "Ortiga"],
      format: "Líquido",
      packaging: "Con envase",
      price: 16,
      badge: "Vegano",
      description: "Activa el cuero cabelludo y da volumen.",
      image: "assets/webp/hair-care/hair-care-bloque-4-6-desktop.webp",
      featuredRank: 6,
      isBestseller: false,
      isNew: false,
    },
    {
      id: "big",
      name: "Big",
      category: "Shampoo",
      typeLabel: "Shampoo en sal marina",
      need: ["Volumen"],
      hairType: ["Normal"],
      ingredients: ["Sal marina", "Bergamota", "Aloe vera"],
      format: "Líquido",
      packaging: "Con envase",
      price: 14,
      badge: "Más vendido",
      description: "Aporta volumen y textura natural.",
      image: "assets/webp/hair-care/hair-care-bloque-4-7-desktop.webp",
      featuredRank: 7,
      isBestseller: true,
      isNew: false,
    },
    {
      id: "american-cream",
      name: "American Cream",
      category: "Acondicionador",
      typeLabel: "Acondicionador",
      need: ["Hidratación"],
      hairType: ["Normal", "Seco"],
      ingredients: ["Lavanda", "Vainilla", "Fresas"],
      format: "Líquido",
      packaging: "Con envase",
      price: 14,
      badge: "Con envase",
      description: "Suaviza, acondiciona y desenreda.",
      image: "assets/webp/hair-care/hair-care-bloque-4-8-desktop.webp",
      featuredRank: 8,
      isBestseller: true,
      isNew: false,
    },
    {
      id: "jumping-juniper",
      name: "Jumping Juniper",
      category: "Shampoo",
      typeLabel: "Shampoo sólido",
      need: ["Sensibilidad"],
      hairType: ["Graso"],
      ingredients: ["Enebro", "Lavanda", "Lima"],
      format: "Sólido",
      packaging: "Sin envase",
      price: 11,
      badge: "Vegano",
      description: "Limpia en profundidad sin resecar.",
      image: "assets/webp/hair-care/hair-care-bloque-5-1-desktop.webp",
      featuredRank: 9,
      isBestseller: false,
      isNew: false,
    },
    {
      id: "seanik",
      name: "Seanik",
      category: "Shampoo",
      typeLabel: "Shampoo sólido",
      need: ["Volumen"],
      hairType: ["Normal"],
      ingredients: ["Algas marinas", "Limón", "Sal marina"],
      format: "Sólido",
      packaging: "Sin envase",
      price: 11,
      badge: "Sin envase",
      description: "Da cuerpo y deja el cabello ligero.",
      image: "assets/webp/hair-care/hair-care-bloque-5-2-desktop.webp",
      featuredRank: 10,
      isBestseller: false,
      isNew: false,
    },
    {
      id: "veganese",
      name: "Veganese",
      category: "Acondicionador",
      typeLabel: "Acondicionador",
      need: ["Hidratación"],
      hairType: ["Normal"],
      ingredients: ["Algas", "Limón", "Romero"],
      format: "Líquido",
      packaging: "Con envase",
      price: 14,
      badge: "Con envase",
      description: "Acondiciona sin apelmazar.",
      image: "assets/webp/hair-care/hair-care-bloque-5-3-desktop.webp",
      featuredRank: 11,
      isBestseller: false,
      isNew: false,
    },
    {
      id: "retread",
      name: "Retread",
      category: "Tratamientos",
      typeLabel: "Tratamiento reparador",
      need: ["Reparación"],
      hairType: ["Seco"],
      ingredients: ["Melón", "Aguacate", "Jojoba"],
      format: "Crema",
      packaging: "Con envase",
      price: 16,
      badge: "Con envase",
      description: "Nutre y recupera el cabello dañado.",
      image: "assets/webp/hair-care/hair-care-bloque-6-1-desktop.webp",
      featuredRank: 12,
      isBestseller: false,
      isNew: false,
    },
    {
      id: "curl-power",
      name: "Curl Power",
      category: "Styling",
      typeLabel: "Crema de definición",
      need: ["Hidratación"],
      hairType: ["Rizado"],
      ingredients: ["Kukui", "Cupuaçu", "Cacao"],
      format: "Crema",
      packaging: "Con envase",
      price: 24,
      badge: "Nuevo",
      description: "Define rizos con una textura cremosa.",
      image: "assets/webp/hair-care/hair-care-bloque-6-4-desktop.webp",
      featuredRank: 13,
      isBestseller: false,
      isNew: true,
    },
  ];

  const PRODUCT_MAP = new Map(PRODUCTS.map((product) => [product.id, product]));
  const PRICE_FORMATTER = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const state = {
    cart: loadCart(),
    menuOpen: false,
    cartOpen: false,
    filtersOpen: false,
    type: "all",
    sort: "relevance",
    search: "",
    catalogIndex: 0,
    catalogAnimating: false,
    homeIndex: 0,
    homeAnimating: false,
  };

  const elements = {
    body: document.body,
    overlay: document.querySelector("[data-overlay]"),
    mobileMenu: document.querySelector("[data-mobile-menu]"),
    cartDrawer: document.querySelector("[data-cart-drawer]"),
    cartItems: document.querySelector("[data-cart-items]"),
    cartTotal: document.querySelector("[data-cart-total]"),
    cartShipping: document.querySelector("[data-cart-shipping]"),
    cartCount: document.querySelector("[data-cart-count]"),
    menuToggle: document.querySelector("[data-menu-toggle]"),
    menuClose: document.querySelector("[data-menu-close]"),
    cartToggle: document.querySelector("[data-cart-toggle]"),
    cartClose: document.querySelector("[data-cart-close]"),
    accountButtons: document.querySelectorAll("[data-account-button]"),
    newsletterForm: document.querySelector("[data-newsletter-form]"),
    homeProductLists: document.querySelectorAll("[data-product-list]"),
    catalogGrid: document.querySelector("[data-catalog-grid]"),
    emptyState: document.querySelector("[data-empty-state]"),
    resultsCount: document.querySelector("[data-results-count]"),
    searchInput: document.querySelector("[data-search-input]"),
    sortSelect: document.querySelector("[data-sort-select]"),
    filtersPanel: document.querySelector("[data-filters-panel]"),
    filtersToggle: document.querySelector("[data-filters-toggle]"),
    filtersClose: document.querySelector("[data-filters-close]"),
    filtersForm: document.querySelector("[data-filters-form]"),
    filtersClear: document.querySelector("[data-filters-clear]"),
    filtersApply: document.querySelector("[data-filters-apply]"),
    clearCatalogButtons: document.querySelectorAll("[data-clear-catalog-filters]"),
    typeChips: document.querySelectorAll("[data-type-chip]"),
    quickFilters: document.querySelectorAll("[data-quick-filter]"),
    catalogStackControls: document.querySelector("[data-catalog-stack-controls]"),
    catalogStackPosition: document.querySelector("[data-catalog-stack-position]"),
    catalogPrev: document.querySelector("[data-catalog-prev]"),
    catalogNext: document.querySelector("[data-catalog-next]"),
    homeStackControls: document.querySelector("[data-home-stack-controls]"),
    homeStackPosition: document.querySelector("[data-home-stack-position]"),
    homePrev: document.querySelector("[data-home-prev]"),
    homeNext: document.querySelector("[data-home-next]"),
  };

  const initialResultsLabel = elements.resultsCount?.textContent?.trim() || String(PRODUCTS.length);
  const catalogStackQuery = window.matchMedia("(max-width: 767px)");

  init();

  function init() {
    bindPanels();
    bindCatalogControls();
    bindGlobalClicks();
    hydrateResponsiveImages();
    renderHomeLists();
    renderCatalog();
    renderCart();
    syncTypeChips();
    syncCartBadge();
    catalogStackQuery.addEventListener("change", () => syncCatalogStack(elements.catalogGrid?.children.length || 0));
    catalogStackQuery.addEventListener("change", syncHomeStack);
  }

  function bindPanels() {
    elements.menuToggle?.addEventListener("click", () => toggleMenu(true));
    elements.menuClose?.addEventListener("click", () => toggleMenu(false));
    elements.cartToggle?.addEventListener("click", () => toggleCart(true));
    elements.cartClose?.addEventListener("click", () => toggleCart(false));
    elements.filtersToggle?.addEventListener("click", () => toggleFilters(true));
    elements.filtersClose?.addEventListener("click", () => toggleFilters(false));
    elements.catalogPrev?.addEventListener("click", () => moveCatalogStack(-1));
    elements.catalogNext?.addEventListener("click", () => moveCatalogStack(1));
    elements.homePrev?.addEventListener("click", () => moveHomeStack(-1));
    elements.homeNext?.addEventListener("click", () => moveHomeStack(1));

    elements.overlay?.addEventListener("click", () => closeAllPanels());

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeAllPanels();
      }
    });
  }

  function bindCatalogControls() {
    elements.searchInput?.addEventListener("input", (event) => {
      state.search = event.target.value.trim();
      renderCatalog();
    });

    elements.sortSelect?.addEventListener("change", (event) => {
      state.sort = event.target.value;
      renderCatalog();
    });

    elements.filtersForm?.addEventListener("change", renderCatalog);
    elements.filtersForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      renderCatalog();
      toggleFilters(false);
      scrollToCatalog();
    });

    elements.filtersClear?.addEventListener("click", () => {
      clearFilters();
      scrollToCatalog();
    });

    elements.filtersApply?.addEventListener("click", () => {
      renderCatalog();
      toggleFilters(false);
      scrollToCatalog();
    });

    elements.clearCatalogButtons.forEach((button) => {
      button.addEventListener("click", () => {
        clearFilters();
        scrollToCatalog();
      });
    });

    elements.typeChips.forEach((button) => {
      button.addEventListener("click", () => {
        setTypeFilter(button.dataset.typeChip || "all");
        scrollToCatalog();
      });
    });

    elements.quickFilters.forEach((button) => {
      button.addEventListener("click", () => {
        const preset = parsePreset(button.dataset.quickFilter);
        applyQuickFilter(preset);
        scrollToCatalog();
      });
    });

    elements.accountButtons.forEach((button) => {
      button.addEventListener("click", () => {
        showToast("La sección Mi cuenta todavía no está disponible.");
      });
    });

    elements.newsletterForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      showToast("¡Gracias! Te avisaremos con las novedades.");
      elements.newsletterForm.reset();
    });
  }

  function bindGlobalClicks() {
    document.addEventListener("click", (event) => {
      const addButton = event.target.closest("[data-add-to-cart]");
      if (addButton) {
        event.preventDefault();
        addToCart(addButton.dataset.addToCart);
        return;
      }

      const changeButton = event.target.closest("[data-cart-change]");
      if (changeButton) {
        event.preventDefault();
        changeCartQuantity(changeButton.dataset.cartId, Number(changeButton.dataset.cartChange || 0));
        return;
      }

      const removeButton = event.target.closest("[data-cart-remove]");
      if (removeButton) {
        event.preventDefault();
        removeFromCart(removeButton.dataset.cartRemove);
      }
    });
  }

  function toggleMenu(force) {
    const next = typeof force === "boolean" ? force : !state.menuOpen;
    if (next) {
      state.cartOpen = false;
      state.filtersOpen = false;
      hidePanel(elements.cartDrawer);
      toggleFilters(false);
      showPanel(elements.mobileMenu);
    } else {
      hidePanel(elements.mobileMenu);
    }

    state.menuOpen = next;
    syncGlobalState();
  }

  function toggleCart(force) {
    const next = typeof force === "boolean" ? force : !state.cartOpen;
    if (next) {
      state.menuOpen = false;
      state.filtersOpen = false;
      hidePanel(elements.mobileMenu);
      toggleFilters(false);
      showPanel(elements.cartDrawer);
    } else {
      hidePanel(elements.cartDrawer);
    }

    state.cartOpen = next;
    syncGlobalState();
  }

  function toggleFilters(force) {
    if (!elements.filtersPanel) return;
    const next = typeof force === "boolean" ? force : !state.filtersOpen;
    state.filtersOpen = next;
    elements.filtersPanel.classList.toggle("is-open", next);
    syncGlobalState();
  }

  function closeAllPanels() {
    state.menuOpen = false;
    state.cartOpen = false;
    state.filtersOpen = false;
    hidePanel(elements.mobileMenu);
    hidePanel(elements.cartDrawer);

    if (elements.filtersPanel) {
      elements.filtersPanel.classList.remove("is-open");
    }

    syncGlobalState();
  }

  function syncGlobalState() {
    elements.body.classList.toggle("menu-open", state.menuOpen);
    elements.body.classList.toggle("cart-open", state.cartOpen);
    elements.body.classList.toggle("filters-open", state.filtersOpen);

    if (elements.menuToggle) {
      elements.menuToggle.setAttribute("aria-expanded", String(state.menuOpen));
    }

    if (elements.cartToggle) {
      elements.cartToggle.setAttribute("aria-expanded", String(state.cartOpen));
    }

    if (elements.filtersToggle) {
      elements.filtersToggle.setAttribute("aria-expanded", String(state.filtersOpen));
    }

    syncOverlay();
  }

  function syncOverlay() {
    if (!elements.overlay) return;
    const shouldShow = state.menuOpen || state.cartOpen || state.filtersOpen;
    elements.overlay.hidden = !shouldShow;
  }

  function showPanel(panel) {
    if (!panel) return;
    clearTimeout(panel._hideTimer);
    panel.hidden = false;
    requestAnimationFrame(() => {
      panel.classList.add("is-open");
    });
  }

  function hidePanel(panel) {
    if (!panel) return;
    clearTimeout(panel._hideTimer);
    panel.classList.remove("is-open");
    panel._hideTimer = window.setTimeout(() => {
      if (!panel.classList.contains("is-open")) {
        panel.hidden = true;
      }
    }, 280);
  }

  function hydrateResponsiveImages() {
    document.querySelectorAll("[data-responsive-image]").forEach((img) => {
      const source = img.dataset.responsiveImage;
      if (!source) return;
      const alt = img.getAttribute("alt") || "";
      const sizes = img.dataset.responsiveSizes || "100vw";
      const loading = img.getAttribute("loading") || "lazy";
      const fetchPriority = img.getAttribute("fetchpriority");
      const objectPosition = img.dataset.objectPosition || "";
      const markup = buildResponsiveImageMarkup({
        source,
        alt,
        sizes,
        loading,
        fetchPriority,
        objectPosition,
        className: img.className,
      });

      img.outerHTML = markup;
    });
  }

  function renderHomeLists() {
    elements.homeProductLists.forEach((container) => {
      const ids = String(container.dataset.productList || "")
        .split(",")
        .map((id) => id.trim())
        .filter(Boolean);
      const variant = container.dataset.cardVariant || "home";
      const cards = ids
        .map((id) => {
          const product = PRODUCT_MAP.get(id);
          return product ? `<div class="col-12 col-md-6 col-xl-3">${createProductCard(product, variant)}</div>` : "";
        })
        .filter(Boolean);


      container.innerHTML = cards.join("");
    });
    syncHomeStack();
  }

  function moveHomeStack(direction) {
    const container = elements.homeProductLists[0];
    const cards = container?.children;
    if (!cards?.length || state.homeAnimating) return;

    const nextIndex = (state.homeIndex + direction + cards.length) % cards.length;
    const incoming = cards[nextIndex];
    state.homeAnimating = true;
    incoming.classList.add("is-entering", direction > 0 ? "from-next" : "from-prev");
    requestAnimationFrame(() => requestAnimationFrame(() => incoming.classList.add("is-entering-active")));

    window.setTimeout(() => {
      state.homeIndex = nextIndex;
      incoming.classList.remove("is-entering", "is-entering-active", "from-next", "from-prev");
      state.homeAnimating = false;
      syncHomeStack();
    }, 420);
  }

  function syncHomeStack() {
    const container = elements.homeProductLists[0];
    const cards = container?.children;
    if (!cards?.length) return;

    [...cards].forEach((card, index) => {
      const distance = (index - state.homeIndex + cards.length) % cards.length;
      card.classList.toggle("is-active", distance === 0);
      card.classList.toggle("is-next", distance === 1);
      card.classList.toggle("is-after-next", distance === 2);
      card.inert = catalogStackQuery.matches && distance !== 0;
    });

    if (elements.homeStackControls) elements.homeStackControls.hidden = !catalogStackQuery.matches;
    if (elements.homeStackPosition) elements.homeStackPosition.textContent = `${state.homeIndex + 1} / ${cards.length}`;
  }

  function renderCatalog() {
    if (!elements.catalogGrid) return;

    const activeFilters = readFiltersFromControls();
    const filtered = sortProducts(filterProducts(PRODUCTS, activeFilters), state.sort);

    elements.catalogGrid.innerHTML = filtered
      .slice(0, filtered.length - 1)
      .map((product) => `<div class="col-12 col-md-6 col-xl-4">${createProductCard(product, "catalog")}</div>`)
      .join("");
    state.catalogIndex = Math.min(state.catalogIndex, Math.max(0, filtered.length - 2));
    syncCatalogStack(Math.max(0, filtered.length - 1));

    if (elements.emptyState) {
      elements.emptyState.hidden = filtered.length > 0;
    }

    updateResultsCount(filtered.length, activeFilters);
  }

  function moveCatalogStack(direction) {
    const cards = elements.catalogGrid?.children;
    if (!cards?.length || state.catalogAnimating) return;

    const nextIndex = (state.catalogIndex + direction + cards.length) % cards.length;
    const incoming = cards[nextIndex];
    state.catalogAnimating = true;
    incoming.classList.add("is-entering", direction > 0 ? "from-next" : "from-prev");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => incoming.classList.add("is-entering-active"));
    });

    window.setTimeout(() => {
      state.catalogIndex = nextIndex;
      incoming.classList.remove("is-entering", "is-entering-active", "from-next", "from-prev");
      state.catalogAnimating = false;
      syncCatalogStack(cards.length);
    }, 420);
  }

  function syncCatalogStack(total) {
    if (!elements.catalogGrid) return;

    [...elements.catalogGrid.children].forEach((card, index) => {
      const distance = (index - state.catalogIndex + total) % total;
      card.classList.toggle("is-active", distance === 0);
      card.classList.toggle("is-next", distance === 1);
      card.classList.toggle("is-after-next", distance === 2);
      if (catalogStackQuery.matches) card.setAttribute("aria-hidden", String(distance > 2));
      else card.removeAttribute("aria-hidden");
      card.inert = catalogStackQuery.matches && distance !== 0;
    });

    if (elements.catalogStackControls) {
      elements.catalogStackControls.hidden = total < 2 || !catalogStackQuery.matches;
    }
    if (elements.catalogStackPosition) {
      elements.catalogStackPosition.textContent = total ? `${state.catalogIndex + 1} / ${total}` : "";
    }
  }

  function updateResultsCount(count, activeFilters) {
    if (!elements.resultsCount) return;
    if (hasActiveFilters(activeFilters)) {
      elements.resultsCount.textContent = String(count);
    } else {
      elements.resultsCount.textContent = initialResultsLabel;
    }
  }

  function hasActiveFilters(filters) {
    return Boolean(
      state.search ||
        state.type !== "all" ||
        filters.need.length ||
        filters.hairType.length ||
        filters.ingredient.length ||
        filters.format.length ||
        filters.packaging.length ||
        filters.price !== "all",
    );
  }

  function readFiltersFromControls() {
    const formData = elements.filtersForm ? new FormData(elements.filtersForm) : new FormData();
    state.search = elements.searchInput?.value.trim() || "";
    state.sort = elements.sortSelect?.value || state.sort;

    return {
      need: formData.getAll("need"),
      hairType: formData.getAll("hairType"),
      ingredient: formData.getAll("ingredient"),
      format: formData.getAll("format"),
      packaging: formData.getAll("packaging"),
      price: formData.get("price") || "all",
    };
  }

  function filterProducts(items, filters) {
    const query = normalize(state.search);

    return items.filter((product) => {
      if (state.type !== "all" && product.category !== state.type) {
        return false;
      }

      if (query) {
        const haystack = normalize(
          [
            product.name,
            product.category,
            product.typeLabel,
            product.description,
            product.format,
            product.packaging,
            product.need.join(" "),
            product.hairType.join(" "),
            product.ingredients.join(" "),
          ].join(" "),
        );

        if (!haystack.includes(query)) {
          return false;
        }
      }

      if (filters.need.length && !filters.need.some((value) => product.need.includes(value))) {
        return false;
      }

      if (filters.hairType.length && !filters.hairType.some((value) => product.hairType.includes(value))) {
        return false;
      }

      if (filters.ingredient.length && !filters.ingredient.some((value) => product.ingredients.includes(value))) {
        return false;
      }

      if (filters.format.length && !filters.format.includes(product.format)) {
        return false;
      }

      if (filters.packaging.length && !filters.packaging.includes(product.packaging)) {
        return false;
      }

      if (!matchesPrice(product.price, filters.price)) {
        return false;
      }

      return true;
    });
  }

  function matchesPrice(price, range) {
    switch (range) {
      case "under12":
        return price < 12;
      case "12to18":
        return price >= 12 && price <= 18;
      case "over18":
        return price > 18;
      default:
        return true;
    }
  }

  function sortProducts(items, sort) {
    const sorted = [...items];

    sorted.sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price || a.featuredRank - b.featuredRank;
        case "price-desc":
          return b.price - a.price || a.featuredRank - b.featuredRank;
        case "featured":
          return Number(b.isBestseller) - Number(a.isBestseller) || a.featuredRank - b.featuredRank;
        case "newest":
          return Number(b.isNew) - Number(a.isNew) || a.featuredRank - b.featuredRank;
        case "relevance":
        default:
          return a.featuredRank - b.featuredRank;
      }
    });

    return sorted;
  }

  function createProductCard(product, variant = "catalog") {
    const image = variant === "home" ? product.homeImage || product.image : product.image;
    const chips =
      variant === "home"
        ? [product.need[0], product.packaging, product.format].filter(Boolean).slice(0, 2)
        : [product.need[0], product.format, product.packaging].filter(Boolean);

    return `
      <article class="product-card product-card--${variant}" data-product-id="${escapeAttribute(product.id)}">
        <div class="product-card__media">
          ${buildResponsiveImageMarkup({
            source: image,
            alt: product.name,
            sizes: variant === "home" ? "(min-width: 1200px) 25vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw",
            loading: "eager",
            className: "product-card__image",
          })}
          <span class="product-card__badge">${escapeHTML(product.badge)}</span>
        </div>
        <div class="product-card__body">
          <p class="product-card__eyebrow">${escapeHTML(product.typeLabel)}</p>
          <h3>${escapeHTML(product.name)}</h3>
          <p class="product-card__description">${escapeHTML(product.description)}</p>
          <div class="product-card__meta">
            <span>${escapeHTML(product.format)}</span>
            <span>·</span>
            <span>${escapeHTML(product.packaging)}</span>
          </div>
          <div class="product-card__chips">
            ${chips.map((chip) => `<span class="product-chip">${escapeHTML(chip)}</span>`).join("")}
          </div>
          <div class="product-card__footer">
            <strong class="product-card__price">${formatPrice(product.price)}</strong>
            <button class="button button--primary button--small" type="button" data-add-to-cart="${escapeAttribute(product.id)}">Agregar al carrito</button>
          </div>
        </div>
      </article>
    `;
  }

  function syncTypeChips() {
    elements.typeChips.forEach((chip) => {
      const isActive = (chip.dataset.typeChip || "all") === state.type;
      chip.classList.toggle("is-active", isActive);
      chip.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setTypeFilter(type) {
    state.type = type || "all";
    syncTypeChips();
    renderCatalog();
  }

  function applyQuickFilter(preset) {
    if (!preset || typeof preset !== "object") return;

    resetControls(false);

    if (preset.type) {
      const type = Array.isArray(preset.type) ? preset.type[0] : preset.type;
      state.type = type || "all";
    }

    setGroupValues("need", preset.need);
    setGroupValues("hairType", preset.hairType);
    setGroupValues("ingredient", preset.ingredient);
    setGroupValues("format", preset.format);
    setGroupValues("packaging", preset.packaging);

    if (preset.price) {
      setRadioValue("price", preset.price);
    }

    syncTypeChips();
    renderCatalog();
  }

  function clearFilters() {
    resetControls(true);
    renderCatalog();
  }

  function resetControls(keepSort = true) {
    state.type = "all";
    state.search = "";

    if (elements.searchInput) {
      elements.searchInput.value = "";
    }

    if (elements.filtersForm) {
      elements.filtersForm.reset();
    }

    setRadioValue("price", "all");

    if (keepSort && elements.sortSelect) {
      state.sort = elements.sortSelect.value || "relevance";
    } else if (elements.sortSelect) {
      elements.sortSelect.value = "relevance";
      state.sort = "relevance";
    }

    syncTypeChips();
  }

  function setGroupValues(name, values) {
    if (!elements.filtersForm) return;

    const wanted = Array.isArray(values) ? values : values ? [values] : [];
    const inputs = elements.filtersForm.querySelectorAll(`input[name="${name}"]`);

    inputs.forEach((input) => {
      input.checked = wanted.includes(input.value);
    });
  }

  function setRadioValue(name, value) {
    if (!elements.filtersForm) return;

    const inputs = elements.filtersForm.querySelectorAll(`input[name="${name}"]`);
    inputs.forEach((input) => {
      input.checked = input.value === value;
    });
  }

  function addToCart(productId) {
    const product = PRODUCT_MAP.get(productId);
    if (!product) return;

    const existing = state.cart[productId];
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart[productId] = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.homeImage || product.image,
        category: product.category,
        typeLabel: product.typeLabel,
        quantity: 1,
      };
    }

    saveCart();
    renderCart();
    syncCartBadge();
    showToast(`${product.name} añadido al carrito.`);
    toggleCart(true);
  }

  function removeFromCart(productId) {
    delete state.cart[productId];
    saveCart();
    renderCart();
    syncCartBadge();
  }

  function changeCartQuantity(productId, delta) {
    const item = state.cart[productId];
    if (!item) return;

    item.quantity += delta;

    if (item.quantity <= 0) {
      delete state.cart[productId];
    }

    saveCart();
    renderCart();
    syncCartBadge();
  }

  function renderCart() {
    if (!elements.cartItems) return;

    const items = Object.values(state.cart);

    if (!items.length) {
      elements.cartItems.innerHTML = `
        <div class="cart-empty">
          Tu carrito está vacío. Añade un producto para empezar.
        </div>
      `;

      if (elements.cartTotal) {
        elements.cartTotal.textContent = formatPrice(0);
      }

      if (elements.cartShipping) {
        elements.cartShipping.textContent = "Añade un producto para desbloquear el envío gratis.";
      }

      return;
    }

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    elements.cartItems.innerHTML = items
      .map(
        (item) => `
        <article class="cart-item">
          <img class="cart-item__image" src="${escapeAttribute(assetPath(getResponsiveVariantPath(item.image, "desktop")))}" alt="${escapeAttribute(item.name)}">
          <div class="cart-item__body">
            <h3>${escapeHTML(item.name)}</h3>
            <p class="cart-item__meta">${escapeHTML(item.typeLabel)} · ${escapeHTML(item.category)}</p>
            <p class="cart-item__meta">${formatPrice(item.price)}</p>
          </div>
          <div class="cart-item__footer">
            <strong class="cart-item__price">${formatPrice(item.price * item.quantity)}</strong>
            <div class="cart-item__controls">
              <button type="button" data-cart-change="-1" data-cart-id="${escapeAttribute(item.id)}" aria-label="Reducir cantidad">−</button>
              <span aria-label="Cantidad">${item.quantity}</span>
              <button type="button" data-cart-change="1" data-cart-id="${escapeAttribute(item.id)}" aria-label="Aumentar cantidad">+</button>
              <button type="button" data-cart-remove="${escapeAttribute(item.id)}" aria-label="Eliminar producto">×</button>
            </div>
          </div>
        </article>
      `,
      )
      .join("");

    if (elements.cartTotal) {
      elements.cartTotal.textContent = formatPrice(total);
    }

    if (elements.cartShipping) {
      elements.cartShipping.textContent =
        total >= 50 ? "Ya tienes envío gratis." : `Te faltan ${formatPrice(50 - total)} para envío gratis.`;
    }
  }

  function syncCartBadge() {
    if (!elements.cartCount) return;

    const totalQuantity = Object.values(state.cart).reduce((sum, item) => sum + item.quantity, 0);
    elements.cartCount.textContent = String(totalQuantity);
  }

  function saveCart() {
    window.localStorage.setItem("lush-cart-v1", JSON.stringify(state.cart));
  }

  function loadCart() {
    try {
      const raw = window.localStorage.getItem("lush-cart-v1");
      if (!raw) return {};

      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }

  function parsePreset(raw) {
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }

  function formatPrice(value) {
    return PRICE_FORMATTER.format(value);
  }

  function normalize(value) {
    return String(value)
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();
  }

  function slugify(value) {
    return String(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-{2,}/g, "-")
      .toLowerCase();
  }

  function normalizeAssetPath(pathValue) {
    return String(pathValue).replace(/^[.\\/]+/, "");
  }

  function assetPath(pathValue) {
    if (!pathValue) return pathValue;
    if (/^(?:https?:|data:|blob:|\/\/)/i.test(pathValue)) return pathValue;
    if (pathValue.startsWith("../") || pathValue.startsWith("./")) return pathValue;
    return `${assetBase}${pathValue}`;
  }

  function getWebpBasePath(originalPath) {
    const normalized = normalizeAssetPath(originalPath);

    if (normalized.startsWith("assets/webp/")) {
      return `${assetBase}${normalized.replace(/-(?:mobile|tablet|desktop)\.webp$/i, "")}`;
    }

    const segments = normalized.split("/").filter(Boolean);

    if (segments[0] !== "assets" || segments.length < 2) {
      return assetPath(originalPath);
    }

    const folderParts = segments.slice(1, -1);
    const fileName = segments[segments.length - 1] || "";
    const fileBase = fileName.replace(/\.[^.]+$/, "");
    const folderSlug = slugify(folderParts.join("-"));
    const fileSlug = slugify(fileBase);

    return `${assetBase}assets/webp/${folderSlug}/${fileSlug}`;
  }

  function getResponsiveVariantPath(originalPath, variant) {
    const base = getWebpBasePath(originalPath);
    if (!base.includes("/assets/webp/")) {
      return assetPath(originalPath);
    }
    return `${base}-${variant}.webp`;
  }

  function getResponsiveSrcSet(originalPath) {
    return [
      `${getResponsiveVariantPath(originalPath, "mobile")} 640w`,
      `${getResponsiveVariantPath(originalPath, "tablet")} 960w`,
      `${getResponsiveVariantPath(originalPath, "desktop")} 1400w`,
    ].join(", ");
  }

  function buildResponsiveImageMarkup({ source, alt, sizes, loading = "lazy", fetchPriority, objectPosition = "", className = "" }) {
    const attributes = [
      `src="${escapeAttribute(assetPath(getResponsiveVariantPath(source, "desktop")))}"`,
      `srcset="${escapeAttribute(getResponsiveSrcSet(source))}"`,
      `sizes="${escapeAttribute(sizes || "100vw")}"`,
      `alt="${escapeAttribute(alt)}"`,
      `loading="${escapeAttribute(loading)}"`,
      className ? `class="${escapeAttribute(className)}"` : "",
      fetchPriority ? `fetchpriority="${escapeAttribute(fetchPriority)}"` : "",
      objectPosition ? `style="object-position:${escapeAttribute(objectPosition)};"` : "",
    ]
      .filter(Boolean)
      .join(" ");

    return `<img ${attributes}>`;
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttribute(value) {
    return escapeHTML(value).replace(/`/g, "&#96;");
  }

  function scrollToCatalog() {
    const catalog = document.querySelector("#catalog");
    if (catalog) {
      catalog.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function showToast(message) {
    let toast = document.querySelector(".site-toast");

    if (!toast) {
      toast = document.createElement("div");
      toast.className = "site-toast";
      toast.style.position = "fixed";
      toast.style.left = "50%";
      toast.style.bottom = "1.25rem";
      toast.style.transform = "translate(-50%, 12px)";
      toast.style.zIndex = "120";
      toast.style.maxWidth = "min(90vw, 32rem)";
      toast.style.padding = "0.9rem 1.15rem";
      toast.style.borderRadius = "999px";
      toast.style.background = "#111";
      toast.style.color = "#f5f3ef";
      toast.style.fontWeight = "700";
      toast.style.textAlign = "center";
      toast.style.boxShadow = "0 18px 40px rgba(17, 17, 17, 0.3)";
      toast.style.opacity = "0";
      toast.style.transition = "opacity 0.2s ease, transform 0.2s ease";
      toast.style.pointerEvents = "none";
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = "1";
    toast.style.transform = "translate(-50%, 0)";

    clearTimeout(toast._timer);
    toast._timer = window.setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translate(-50%, 12px)";
    }, 2200);
  }
})();
