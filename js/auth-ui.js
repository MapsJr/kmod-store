import { auth } from "./firebase.js";

import {
    onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const authContainer =
document.getElementById("authContainer");

function updateCartCount(){

    const cart =
    JSON.parse(
        localStorage.getItem("cart")
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

if(authContainer){

    onAuthStateChanged(auth,(user)=>{

        if(user){

            authContainer.innerHTML = `

                <a href="profile.html">
                    👤
                </a>

                <a href="cart.html">
                    🛒 (<span id="cartCount">0</span>)
                </a>

            `;

        } else {

            authContainer.innerHTML = `

                <a href="login.html">
                    SIGN IN
                </a>

                <a href="register.html">
                    SIGN UP
                </a>

                <a href="cart.html">
                    🛒 (<span id="cartCount">0</span>)
                </a>

            `;

        }

        updateCartCount();

        authContainer.style.visibility = "visible";

    });

}

window.addEventListener(
    "storage",
    updateCartCount
);