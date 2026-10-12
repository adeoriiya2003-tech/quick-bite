function getCartItems() {
  return window.quickBite.getCart();
}

function renderCart() {
  const cartList = document.querySelector("#cartList");
  const emptyState = document.querySelector("#emptyCart");
  const subtotalValue = document.querySelector("#subtotalValue");
  const feeValue = document.querySelector("#deliveryFee");
  const totalValue = document.querySelector("#totalValue");

  if (!cartList) {
    return;
  }

  const cart = getCartItems();

  if (!cart.length) {
    cartList.innerHTML = "";
    if (emptyState) {
      emptyState.classList.remove("hidden");
    }

    if (subtotalValue)
      subtotalValue.textContent = window.quickBite.formatCurrency(0);
    if (feeValue) feeValue.textContent = window.quickBite.formatCurrency(0);
    if (totalValue) totalValue.textContent = window.quickBite.formatCurrency(0);
    return;
  }

  if (emptyState) {
    emptyState.classList.add("hidden");
  }

  cartList.innerHTML = cart
    .map(
      (item) => `
        <article class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <div class="cart-item-main">
            <h3>${item.name}</h3>
            <p>${window.quickBite.formatCurrency(item.price)} each</p>
            <div class="cart-actions">
              <div class="qty-control" aria-label="Quantity controls for ${item.name}">
                <button type="button" class="qty-button decrease" data-id="${item.id}" aria-label="Decrease quantity for ${item.name}">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <span class="qty-value">${item.quantity}</span>
                <button type="button" class="qty-button increase" data-id="${item.id}" aria-label="Increase quantity for ${item.name}">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
              <button type="button" class="remove-btn" data-id="${item.id}" aria-label="Remove ${item.name} from cart">
                <i class="fa-solid fa-trash"></i> Remove
              </button>
            </div>
          </div>
          <div class="cart-item-total">
            <strong>${window.quickBite.formatCurrency(item.price * item.quantity)}</strong>
          </div>
        </article>
      `,
    )
    .join("");

  const summary = window.quickBite.getCartSummary();

  if (subtotalValue)
    subtotalValue.textContent = window.quickBite.formatCurrency(
      summary.subtotal,
    );
  if (feeValue)
    feeValue.textContent = window.quickBite.formatCurrency(summary.deliveryFee);
  if (totalValue)
    totalValue.textContent = window.quickBite.formatCurrency(summary.total);

  bindCartEvents();
}

function changeQuantity(itemId, delta) {
  const cart = getCartItems();
  const item = cart.find((entry) => entry.id === itemId);

  if (!item) {
    return;
  }

  item.quantity = Number(item.quantity || 0) + delta;

  if (item.quantity <= 0) {
    const filteredCart = cart.filter((entry) => entry.id !== itemId);
    window.quickBite.saveCart(filteredCart);
    window.quickBite.updateCartBadge();
    renderCart();
    return;
  }

  window.quickBite.saveCart(cart);
  window.quickBite.updateCartBadge();
  renderCart();
}

function removeItem(itemId) {
  const cart = getCartItems().filter((item) => item.id !== itemId);
  window.quickBite.saveCart(cart);
  window.quickBite.updateCartBadge();
  renderCart();
}

function bindCartEvents() {
  document.querySelectorAll(".increase").forEach((button) => {
    button.addEventListener("click", () =>
      changeQuantity(button.dataset.id, 1),
    );
  });

  document.querySelectorAll(".decrease").forEach((button) => {
    button.addEventListener("click", () =>
      changeQuantity(button.dataset.id, -1),
    );
  });

  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", () => removeItem(button.dataset.id));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#cartList")) {
    renderCart();
  }
});
