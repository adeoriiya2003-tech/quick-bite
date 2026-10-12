function renderConfirmation() {
  const container = document.querySelector("#confirmationContent");

  if (!container) {
    return;
  }

  const order = window.quickBite.getStoredOrder();

  if (!order) {
    container.innerHTML = `
      <div class="confirmation-card">
        <div class="confirmation-icon">
          <i class="fa-solid fa-circle-exclamation"></i>
        </div>
        <h1>No order found</h1>
        <p>There is no saved demo order yet. Start from the menu and place a demo order.</p>
        <div class="confirmation-actions">
          <a class="btn btn-primary" href="menu.html">Go to Menu</a>
          <a class="btn btn-secondary" href="index.html">Back Home</a>
        </div>
      </div>
    `;
    return;
  }

  const itemsMarkup = order.items
    .map(
      (item) => `
        <li>
          <span>${item.name} x${item.quantity}</span>
          <span>${window.quickBite.formatCurrency(item.price * item.quantity)}</span>
        </li>
      `,
    )
    .join("");

  container.innerHTML = `
    <div class="confirmation-card">
      <div class="confirmation-icon">
        <i class="fa-solid fa-check"></i>
      </div>
      <h1>Order confirmed</h1>
      <p>Your demo order is being prepared.</p>
      <div class="reference-pill">Reference: ${order.id}</div>

      <div class="order-details">
        <div class="detail-box">
          <h3>Items ordered</h3>
          <ul>
            ${itemsMarkup}
          </ul>
        </div>
        <div class="detail-box">
          <h3>Order summary</h3>
          <ul>
            <li><span>Subtotal</span><span>${window.quickBite.formatCurrency(order.subtotal)}</span></li>
            <li><span>Delivery</span><span>${window.quickBite.formatCurrency(order.deliveryFee)}</span></li>
            <li><span>Total</span><strong>${window.quickBite.formatCurrency(order.total)}</strong></li>
          </ul>
        </div>
      </div>

      <div class="detail-box" style="margin-top: 1.5rem; text-align: left;">
        <h3>Delivery address</h3>
        <p>${order.customer.address}</p>
      </div>

      <div class="confirmation-actions">
        <a class="btn btn-primary" href="menu.html">Order Again</a>
        <a class="btn btn-secondary" href="index.html">Return Home</a>
      </div>

      <p class="notice">This is a frontend demonstration only. No real order has been placed and no real delivery has been arranged.</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#confirmationContent")) {
    renderConfirmation();
  }
});
