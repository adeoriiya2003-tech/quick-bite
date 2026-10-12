window.quickBite = window.quickBite || {};

const CART_KEY = "quickBiteCart";
const ORDER_KEY = "quickBiteOrder";
const DELIVERY_FEE = 1500;

function safeReadStorage(key) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.warn("Could not read localStorage data for:", key, error);
    return null;
  }
}

function safeWriteStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Could not save localStorage data for:", key, error);
  }
}

function getCart() {
  const cart = safeReadStorage(CART_KEY);
  return Array.isArray(cart) ? cart : [];
}

function saveCart(cart) {
  safeWriteStorage(CART_KEY, cart);
}

function getStoredOrder() {
  const order = safeReadStorage(ORDER_KEY);
  return order && typeof order === "object" ? order : null;
}

function saveOrder(order) {
  safeWriteStorage(ORDER_KEY, order);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + Number(item.quantity || 0), 0);
}

function getCartSummary() {
  const items = getCart();
  const subtotal = items.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity || 0),
    0,
  );
  const deliveryFee = items.length > 0 ? DELIVERY_FEE : 0;

  return {
    items,
    subtotal,
    deliveryFee,
    total: subtotal + deliveryFee,
  };
}

function addItemToCart(item) {
  const cart = getCart();
  const existingItem = cart.find((entry) => entry.id === item.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      image: item.image,
      quantity: 1,
    });
  }

  saveCart(cart);
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.querySelector(".cart-badge");
  const count = getCartCount();

  if (!badge) {
    return;
  }

  badge.textContent = String(count);
  badge.classList.toggle("hidden", count === 0);
}

function setActiveNavLink() {
  const pageName = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    const linkFile = link.getAttribute("href");
    const isActive =
      linkFile === pageName || (pageName === "" && linkFile === "index.html");
    link.classList.toggle("active", isActive);
  });
}

function initMobileNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-links");

  if (!navToggle || !navMenu) {
    return;
  }

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    const label =
      navToggle.getAttribute("aria-expanded") === "true" ? "false" : "true";
    navToggle.setAttribute("aria-expanded", label);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navMenu.classList.remove("show"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  setActiveNavLink();
  updateCartBadge();
});

window.quickBite = {
  getCart,
  saveCart,
  getStoredOrder,
  saveOrder,
  addItemToCart,
  getCartCount,
  getCartSummary,
  formatCurrency,
  updateCartBadge,
  DELIVERY_FEE,
};
