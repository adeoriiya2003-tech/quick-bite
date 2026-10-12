const menuItems = [
  {
    id: "classic-beef-burger",
    name: "Classic Beef Burger",
    category: "Burgers",
    price: 4500,
    description:
      "Juicy grilled beef patty with lettuce, tomato, onions, and house sauce on a toasted bun.",
    image: "assets/images/burgers/classic-beef-burger.jpg",
    alt: "Classic beef burger",
  },
  {
    id: "double-cheeseburger",
    name: "Double Cheeseburger",
    category: "Burgers",
    price: 6100,
    description:
      "Double beef patties layered with melted cheddar and a smoky burger sauce.",
    image: "assets/images/burgers/double-cheeseburger.jpg",
    alt: "Double cheeseburger",
  },
  {
    id: "crispy-chicken-burger",
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: 5200,
    description:
      "Crisp fried chicken fillet with slaw and spicy mayo for a satisfying crunch.",
    image: "assets/images/burgers/chicken-burger.jpg",
    alt: "Crispy chicken burger",
  },
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 7200,
    description:
      "Classic pepperoni slices over rich tomato sauce and mozzarella on a stone-baked crust.",
    image: "assets/images/pizza/pepperoni-pizza.jpg",
    alt: "Pepperoni pizza",
  },
  {
    id: "bbq-chicken-pizza",
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    price: 7600,
    description:
      "Tender grilled chicken, sweet barbecue glaze, red onion, and cheese on a thin crust.",
    image: "assets/images/pizza/bbq-chicken-pizza.jpg",
    alt: "BBQ chicken pizza",
  },
  {
    id: "margherita-pizza",
    name: "Margherita Pizza",
    category: "Pizza",
    price: 6800,
    description:
      "Tomato, basil, and mozzarella with a light herby finish and crisp crust.",
    image: "assets/images/pizza/margherita-pizza.jpg",
    alt: "Margherita pizza",
  },
  {
    id: "crispy-fried-chicken",
    name: "Crispy Fried Chicken",
    category: "Chicken",
    price: 5900,
    description:
      "Golden crunchy chicken bites, seasoned well and served with a zesty dipping sauce.",
    image: "assets/images/chicken/fried-chicken.jpg",
    alt: "Crispy fried chicken",
  },
  {
    id: "spicy-chicken-wings",
    name: "Spicy Chicken Wings",
    category: "Chicken",
    price: 5600,
    description:
      "Hot and saucy wing pieces finished with chili butter and fresh herbs.",
    image: "assets/images/chicken/chicken-wings.jpg",
    alt: "Spicy chicken wings",
  },
  {
    id: "grilled-chicken",
    name: "Grilled Chicken",
    category: "Chicken",
    price: 6500,
    description:
      "Tender char-grilled chicken breast with herb seasoning and a smoky finish.",
    image: "assets/images/chicken/grilled-chicken.jpg",
    alt: "Grilled chicken",
  },
  {
    id: "jollof-rice",
    name: "Nigerian Jollof Rice",
    category: "Rice & Pasta",
    price: 4900,
    description:
      "Rich tomato rice cooked with peppers, spices, and a savory depth of flavor.",
    image: "assets/images/rice-pasta/nigerian-jollof-rice.jpg",
    alt: "Nigerian jollof rice",
  },
  {
    id: "fried-rice",
    name: "Nigerian Fried Rice",
    category: "Rice & Pasta",
    price: 5200,
    description:
      "Stir-fried rice with vegetables, seasoning, and a satisfying wok-fired taste.",
    image: "assets/images/rice-pasta/fried-rice.jpg",
    alt: "Nigerian fried rice",
  },
  {
    id: "creamy-chicken-pasta",
    name: "Creamy Chicken Pasta",
    category: "Rice & Pasta",
    price: 6100,
    description:
      "Creamy pasta tossed with garlic chicken pieces and parmesan for a comforting bite.",
    image: "assets/images/rice-pasta/creamy-pasta.jpg",
    alt: "Creamy chicken pasta",
  },
  {
    id: "french-fries",
    name: "French Fries",
    category: "Sides",
    price: 2200,
    description:
      "Hot, crisp fries with a golden outer layer and fluffy center.",
    image: "assets/images/sides/french-fries.jpg",
    alt: "French fries",
  },
  {
    id: "onion-rings",
    name: "Onion Rings",
    category: "Sides",
    price: 2600,
    description:
      "Crunchy battered onion rings with a lightly sweet onion finish.",
    image: "assets/images/sides/onion-rings.jpg",
    alt: "Onion rings",
  },
  {
    id: "mozzarella-sticks",
    name: "Mozzarella Sticks",
    category: "Sides",
    price: 2900,
    description:
      "Crispy breaded mozzarella with molten cheese and a savory garlic dip.",
    image: "assets/images/sides/mozzarella-sticks.jpg",
    alt: "Mozzarella sticks",
  },
  {
    id: "fresh-lemonade",
    name: "Fresh Lemonade",
    category: "Drinks & Desserts",
    price: 1800,
    description:
      "Refreshing citrus drink served chilled with a bright and lively flavor.",
    image: "assets/images/drinks-desserts/lemonade.jpg",
    alt: "Fresh lemonade",
  },
  {
    id: "chocolate-milkshake",
    name: "Chocolate Milkshake",
    category: "Drinks & Desserts",
    price: 2500,
    description:
      "Velvety chocolate shake blended to a creamy, indulgent finish.",
    image: "assets/images/drinks-desserts/milkshake.jpg",
    alt: "Chocolate milkshake",
  },
  {
    id: "chocolate-cake",
    name: "Chocolate Cake",
    category: "Drinks & Desserts",
    price: 3000,
    description:
      "Soft chocolate sponge layered with rich ganache and a smooth finish.",
    image: "assets/images/drinks-desserts/chocolate-cake.jpg",
    alt: "Chocolate cake",
  },
];

const categories = [
  "All",
  "Burgers",
  "Pizza",
  "Chicken",
  "Rice & Pasta",
  "Sides",
  "Drinks & Desserts",
];

function getCategoryLabel(category) {
  return category === "Rice & Pasta" ? "Rice & Pasta" : category;
}

function renderMenu(items = menuItems) {
  const menuGrid = document.querySelector("#menuGrid");
  const emptyState = document.querySelector("#menuEmpty");

  if (!menuGrid) {
    return;
  }

  menuGrid.innerHTML = "";

  if (!items.length) {
    menuGrid.innerHTML = "";
    if (emptyState) {
      emptyState.classList.remove("hidden");
    }
    return;
  }

  if (emptyState) {
    emptyState.classList.add("hidden");
  }

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "menu-card";
    article.innerHTML = `
      <img src="${item.image}" alt="${item.alt}" loading="lazy" />
      <div class="menu-card-body">
        <div class="menu-meta">
          <span class="food-tag">${getCategoryLabel(item.category)}</span>
          <span class="food-price">${window.quickBite.formatCurrency(item.price)}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button class="btn btn-primary add-cart-btn" data-item-id="${item.id}" type="button">
          <i class="fa-solid fa-cart-plus"></i>
          Add to Cart
        </button>
      </div>
    `;

    menuGrid.appendChild(article);
  });

  attachAddToCartHandlers();
}

function attachAddToCartHandlers() {
  document.querySelectorAll(".add-cart-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.itemId;
      const item = menuItems.find((entry) => entry.id === id);

      if (!item) {
        return;
      }

      window.quickBite.addItemToCart(item);
      button.textContent = "Added";
      button.disabled = true;

      setTimeout(() => {
        button.innerHTML = '<i class="fa-solid fa-cart-plus"></i> Add to Cart';
        button.disabled = false;
      }, 800);
    });
  });
}

function updateActiveFilterButtons(activeCategory) {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    const isActive = button.dataset.category === activeCategory;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function getActiveFilters() {
  const searchInput = document.querySelector("#mealSearch");
  const activeCategory =
    document.querySelector(".filter-btn.active")?.dataset.category || "All";
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

  return { activeCategory, query };
}

function applyMenuFilters() {
  const { activeCategory, query } = getActiveFilters();

  const filtered = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  renderMenu(filtered);
}

function initMenuPage() {
  const searchInput = document.querySelector("#mealSearch");
  const filterGroup = document.querySelector("#filterGroup");

  if (!searchInput && !filterGroup) {
    return;
  }

  renderMenu();

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-btn ${category === "All" ? "active" : ""}`;
    button.dataset.category = category;
    button.setAttribute("aria-pressed", category === "All" ? "true" : "false");
    button.textContent = category;

    button.addEventListener("click", () => {
      updateActiveFilterButtons(category);
      applyMenuFilters();
    });

    filterGroup.appendChild(button);
  });

  searchInput.addEventListener("input", applyMenuFilters);
  updateActiveFilterButtons("All");
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#menuGrid")) {
    initMenuPage();
  }
});
