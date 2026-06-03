import { auth } from "./firebase.js";

import {
    onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

function updateCartCount(user){

    const uid =
    user?.uid || "guest";

    const cart =
    JSON.parse(
        localStorage.getItem(
            `cart_${uid}`
        )
    ) || [];

    let total = 0;

    cart.forEach(item => {

        total += item.quantity || 1;

    });

    const cartCount =
    document.getElementById("cartCount");

    if(cartCount){

        cartCount.textContent =
        total;

    }

}

onAuthStateChanged(auth,(user)=>{

    updateCartCount(user);

});