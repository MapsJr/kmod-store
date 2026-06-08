import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// ✅ GET CORRECT CART (FIXED)
const cart = JSON.parse(localStorage.getItem("activeCart")) || [];

// ELEMENTS
const summaryItems = document.getElementById("summaryItems");
const orderTotalEl = document.getElementById("orderTotal");
const checkoutForm = document.getElementById("checkoutForm");

// TOTAL
function getTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// RENDER CART
function renderCart() {
  summaryItems.innerHTML = "";

  if (cart.length === 0) {
    summaryItems.innerHTML = "<p>Your cart is empty</p>";
    orderTotalEl.textContent = "$0";
    return;
  }

  cart.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p>${item.name} x ${item.quantity}</p>
      <p>$${(item.price * item.quantity).toFixed(2)}</p>
    `;

    summaryItems.appendChild(div);
  });

  orderTotalEl.textContent = "$" + getTotal().toFixed(2);
}

// CHECKOUT
checkoutForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    if (!cart.length) {
      alert("Cart is empty");
      return;
    }

    const customer = {
      name: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      country: document.getElementById("country").value,
      zip: document.getElementById("zip").value
    };

    const payment = document.querySelector('input[name="payment"]:checked').value;
    const total = getTotal();

    // SAVE TO FIREBASE
    const orderRef = await addDoc(collection(db, "orders"), {
      customer,
      items: cart,
      paymentMethod: payment,
      total,
      createdAt: serverTimestamp()
    });

    // EMAILJS
    await emailjs.send(
      "service_emu641k",
      "template_w3hqy87",
      {
        customer_name: customer.name,
        customer_email: customer.email,
        phone: customer.phone,
        address: customer.address,
        city: customer.city,
        country: customer.country,
        zip: customer.zip,
        payment,
        total,
        order_id: orderRef.id
      }
    );

    // CLEAR BOTH CART KEYS (IMPORTANT FIX)
    localStorage.removeItem("activeCart");

    alert("Order placed successfully!");
    window.location.href = "success.html";

  } catch (err) {
    console.error("Checkout error:", err);
    alert("Checkout failed. Check console.");
  }
});

// INIT
renderCart();