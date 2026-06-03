<<<<<<< HEAD
import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

/* =========================
   ELEMENTS
========================= */

const summaryItems =
document.getElementById("summaryItems");

const orderTotal =
document.getElementById("orderTotal");

const checkoutForm =
document.getElementById("checkoutForm");

/* =========================
   CART
========================= */

let cart =
JSON.parse(
    localStorage.getItem("cart")
) || [];

/* =========================
   RENDER ORDER SUMMARY
========================= */

function renderSummary(){

    if(!summaryItems) return;

    let total = 0;

    summaryItems.innerHTML = "";

    if(cart.length === 0){

        summaryItems.innerHTML = `

        <div class="empty-cart">

            <p>
                Your cart is empty.
            </p>

        </div>

        `;

        orderTotal.textContent = "$0";

        return;
    }

    cart.forEach(item => {

        const quantity =
        item.quantity || 1;

        const itemTotal =
        item.price * quantity;

        total += itemTotal;

        summaryItems.innerHTML += `

        <div class="summary-item">

            <div>

                <strong>
                    ${item.name}
                </strong>

                <p>
                    Size:
                    ${item.size || "N/A"}
                </p>

                <p>
                    Qty:
                    ${quantity}
                </p>

            </div>

            <span>

                $${itemTotal}

            </span>

        </div>

        `;

    });

    orderTotal.textContent =
    "$" + total;

}

renderSummary();

/* =========================
   PLACE ORDER
========================= */

checkoutForm.addEventListener(

"submit",

async (e)=>{

    e.preventDefault();

    if(cart.length === 0){

        alert(
            "Your cart is empty."
        );

        return;

    }

    try{

        let total = 0;

        cart.forEach(item => {

            total +=
            item.price *
            (item.quantity || 1);

        });

        const selectedPayment =

        document.querySelector(
            'input[name="payment"]:checked'
        )?.value || "Card";

        const order = {

            customer:{

                name:
                document.getElementById("fullName").value,

                email:
                document.getElementById("email").value,

                phone:
                document.getElementById("phone").value,

                address:
                document.getElementById("address").value,

                city:
                document.getElementById("city").value,

                country:
                document.getElementById("country").value,

                zip:
                document.getElementById("zip").value

            },

            items: cart,

            paymentMethod:
            selectedPayment,

            total: total,

            status: "Pending",

            createdAt:
            serverTimestamp()

        };

        const orderRef =
        await addDoc(
            collection(db,"orders"),
            order
        );

        localStorage.setItem(

            "lastOrder",

            JSON.stringify({

                ...order,

                orderId:
                orderRef.id

            })

        );

        localStorage.removeItem(
            "cart"
        );

        localStorage.setItem(
            "cartCount",
            "0"
        );

        window.location.href =
        "success.html";

    }

    catch(error){

        console.error(error);

        alert(

            "Checkout failed: " +
            error.message

        );

    }

});
=======
import { auth } from "./firebase.js";

function updateCartCount() {

    const uid =
    auth.currentUser?.uid || "guest";

    const cart =
    JSON.parse(
        localStorage.getItem(
            `cart_${uid}`
        )
    ) || [];

    let totalItems = 0;

    cart.forEach(item => {

        totalItems +=
        item.quantity || 1;

    });

    const cartCount =
    document.getElementById("cartCount");

    if(cartCount){

        cartCount.textContent =
        totalItems;

    }

}

auth.onAuthStateChanged(() => {

    updateCartCount();

});

window.addEventListener(
    "storage",
    updateCartCount
);

updateCartCount();
>>>>>>> f1ffff6 (update)
