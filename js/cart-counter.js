function updateCartCount() {

    const cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    const cartCount =
    document.getElementById("cartCount");

    if(cartCount){

        let totalItems = 0;

        cart.forEach(item => {

            totalItems +=
            item.quantity || 1;

        });

        cartCount.textContent =
        totalItems;

    }

}

updateCartCount();

/* Update automatically when cart changes */

window.addEventListener(
    "storage",
    updateCartCount
);