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
