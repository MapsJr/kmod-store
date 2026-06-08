import { auth } from "./firebase.js";

const cartItems = document.getElementById("cartItems");
const subtotal = document.getElementById("subtotal");
const total = document.getElementById("total");
const checkoutBtn = document.getElementById("checkoutBtn");

let currentCart = [];
let currentUid = "guest";

// LOAD CART
function loadCart(user) {
  currentUid = user?.uid || "guest";

  currentCart = JSON.parse(
    localStorage.getItem(`cart_${currentUid}`)
  ) || [];

  renderCart();
}

// RENDER CART
function renderCart() {
  if (!cartItems) return;

  cartItems.innerHTML = "";

  let cartTotal = 0;

  if (currentCart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <h2>Your cart is empty</h2>
      </div>
    `;

    subtotal.textContent = "$0";
    total.textContent = "$0";
    return;
  }

  currentCart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    cartTotal += itemTotal;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">

        <div>
          <h3>${item.name}</h3>
          <p>Size: ${item.size}</p>
          <p>Color: ${item.color}</p>
          <p>Qty: ${item.quantity}</p>
          <p>$${item.price}</p>
        </div>

        <button class="removeItemBtn" onclick="removeItem(${index})">
          Remove
        </button>
      </div>
    `;
  });

  subtotal.textContent = "$" + cartTotal.toFixed(2);
  total.textContent = "$" + cartTotal.toFixed(2);

  // SAVE UPDATED CART STATE
  localStorage.setItem(
    `cart_${currentUid}`,
    JSON.stringify(currentCart)
  );
}

// REMOVE ITEM
window.removeItem = function (index) {
  currentCart.splice(index, 1);

  localStorage.setItem(
    `cart_${currentUid}`,
    JSON.stringify(currentCart)
  );

  renderCart();
};

// CHECKOUT BUTTON (MISSING BEFORE)
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (currentCart.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // IMPORTANT: pass correct cart key
    localStorage.setItem(
      "activeCart",
      JSON.stringify(currentCart)
    );

    window.location.href = "checkout.html";
  });
}

// AUTH LISTENER
auth.onAuthStateChanged((user) => {
  loadCart(user);
});