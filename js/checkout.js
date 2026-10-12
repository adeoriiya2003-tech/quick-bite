function getCheckoutSummary() {
  const summary = window.quickBite.getCartSummary();

  return {
    subtotal: summary.subtotal,
    deliveryFee: summary.deliveryFee,
    total: summary.total,
    items: summary.items,
  };
}

function renderCheckoutSummary() {
  const orderList = document.querySelector("#checkoutItems");
  const subtotalEl = document.querySelector("#checkoutSubtotal");
  const deliveryEl = document.querySelector("#checkoutDelivery");
  const totalEl = document.querySelector("#checkoutTotal");

  if (!orderList) {
    return;
  }

  const { items, subtotal, deliveryFee, total } = getCheckoutSummary();

  if (!items.length) {
    orderList.innerHTML = '<li class="empty-state">Your cart is empty.</li>';
    subtotalEl.textContent = window.quickBite.formatCurrency(0);
    deliveryEl.textContent = window.quickBite.formatCurrency(0);
    totalEl.textContent = window.quickBite.formatCurrency(0);
    return;
  }

  orderList.innerHTML = items
    .map(
      (item) => `
        <li class="order-item">
          <div>
            <strong>${item.name}</strong>
            <span>Qty: ${item.quantity}</span>
          </div>
          <span>${window.quickBite.formatCurrency(item.price * item.quantity)}</span>
        </li>
      `,
    )
    .join("");

  subtotalEl.textContent = window.quickBite.formatCurrency(subtotal);
  deliveryEl.textContent = window.quickBite.formatCurrency(deliveryFee);
  totalEl.textContent = window.quickBite.formatCurrency(total);
}

function validateCheckoutForm(form) {
  if (!form) {
    return false;
  }

  const fields = [
    { name: "name", message: "Please enter your full name." },
    { name: "email", message: "Please provide a valid email address." },
    { name: "phone", message: "Please enter a valid phone number." },
    { name: "address", message: "Please enter your delivery address." },
  ];

  let isValid = true;

  fields.forEach(({ name, message }) => {
    const input = form.querySelector(`[name="${name}"]`);
    if (!input) {
      return;
    }

    if (name === "email") {
      const emailValue = input.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailValue)) {
        input.setCustomValidity(message);
        isValid = false;
      } else {
        input.setCustomValidity("");
      }
    } else if (name === "phone") {
      const phoneValue = input.value.trim();
      if (phoneValue.length < 7 || !/\d/.test(phoneValue)) {
        input.setCustomValidity(message);
        isValid = false;
      } else {
        input.setCustomValidity("");
      }
    } else {
      if (!input.value.trim()) {
        input.setCustomValidity(message);
        isValid = false;
      } else {
        input.setCustomValidity("");
      }
    }

    input.reportValidity();
  });

  return isValid;
}

function saveDemoOrder(formData) {
  const { items, total } = getCheckoutSummary();

  const order = {
    id: `QB-${Date.now()}`,
    createdAt: new Date().toISOString(),
    customer: {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      phone: formData.get("phone").trim(),
      address: formData.get("address").trim(),
      instructions: formData.get("instructions").trim(),
    },
    items,
    subtotal: getCheckoutSummary().subtotal,
    deliveryFee: getCheckoutSummary().deliveryFee,
    total,
  };

  window.quickBite.saveOrder(order);
  return order;
}

function initCheckoutPage() {
  const form = document.querySelector("#checkoutForm");

  if (!form) {
    return;
  }

  if (!window.quickBite.getCart().length) {
    form.querySelector('button[type="submit"]').disabled = true;
    const note = document.createElement("p");
    note.className = "empty-state";
    note.textContent =
      "Your cart is empty. Please add some meals before checking out.";
    form.parentNode.insertBefore(note, form);
    return;
  }

  renderCheckoutSummary();

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!window.quickBite.getCart().length) {
      alert("Your cart is empty. Add items before checkout.");
      return;
    }

    if (!validateCheckoutForm(form)) {
      return;
    }

    const order = saveDemoOrder(new FormData(form));
    window.quickBite.saveCart([]);
    window.quickBite.updateCartBadge();
    window.location.href = "confirmation.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#checkoutForm")) {
    initCheckoutPage();
  }
});
