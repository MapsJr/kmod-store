/* =========================
   KMØD CART SYSTEM
========================= */

let cart = JSON.parse(
    localStorage.getItem("cart")
) || [];

const cartContainer =
document.getElementById("cartItems");

const subtotalElement =
document.getElementById("subtotal");

const totalElement =
document.getElementById("total");

const cartCount =
document.getElementById("cartCount");

/* =========================
   RENDER CART
========================= */

function renderCart() {

    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML = `

        <div class="empty-cart">

            <h2>Your cart is empty.</h2>

            <p>
                Explore the collection and
                Enter The Mode.
            </p>

        </div>

        `;

        updateTotals();
        updateCartCount();

        return;
    }

    cart.forEach((item, index) => {

        cartContainer.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="item-info">

                <h3>${item.name}</h3>

                <p>Size: ${item.size || "N/A"}</p>

                <p>Color: ${item.color || "Default"}</p>

                <p>$${item.price}</p>

                <div class="quantity-controls">

                    <button onclick="decreaseQuantity(${index})">
                        -
                    </button>

                    <span>
                        ${item.quantity || 1}
                    </span>

                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-btn"
                onclick="removeItem(${index})">

                REMOVE

            </button>

        </div>

        `;
    });

    updateTotals();
    updateCartCount();
}

/* =========================
   TOTALS
========================= */

function updateTotals() {

    let subtotal = 0;

    cart.forEach(item => {

        subtotal +=
        item.price *
        (item.quantity || 1);

    });

    subtotalElement.textContent =
    "$" + subtotal;

    totalElement.textContent =
    "$" + subtotal;
}

/* =========================
   CART COUNT
========================= */

function updateCartCount() {

    let count = 0;

    cart.forEach(item => {

        count += item.quantity || 1;

    });

    if (cartCount) {

        cartCount.textContent = count;

    }
}

/* =========================
   SAVE CART
========================= */

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    renderCart();
}

/* =========================
   QUANTITY +
========================= */

window.increaseQuantity =
function(index) {

    cart[index].quantity =
    (cart[index].quantity || 1) + 1;

    saveCart();
};

/* =========================
   QUANTITY -
========================= */

window.decreaseQuantity =
function(index) {

    if (
        (cart[index].quantity || 1) > 1
    ) {

        cart[index].quantity--;

        saveCart();
    }
};

/* =========================
   REMOVE ITEM
========================= */

window.removeItem =
function(index) {

    cart.splice(index, 1);

    saveCart();
};

/* =========================
   CHECKOUT
========================= */

const checkoutBtn =
document.getElementById("checkoutBtn");

if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                alert(
                    "Your cart is empty."
                );

                return;
            }

            window.location.href =
            "checkout.html";
        }
    );
}

/* =========================
   INITIAL LOAD
========================= */

renderCart();