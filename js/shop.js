/* =========================
   KMØD SHOP
========================= */

const products = [

    {
        id: 1,
        name: "Black Future Tee",
        price: 129,
        category: "tees",
        image: "assets/Images/Black.png"
    },

    {
        id: 2,
        name: "Deep Future Tee",
        price: 189,
        category: "tees",
        image: "assets/Images/Black-Purple.png"
    },

    {
        id: 3,
        name: "Ascend Tee",
        price: 249,
        category: "tees",
        image: "assets/Images/Dark-Brown.png"
    },

    {
        id: 4,
        name: "White Mode Hoodie",
        price: 299,
        category: "hoodies",
        image: "assets/Images/Hoodie-White.png"
    },

    {
        id: 5,
        name: "Vision Jacket",
        price: 399,
        category: "jackets",
        image: "assets/Images/Jacket-Black.png"
    }

];

/* =========================
   ELEMENTS
========================= */

const grid =
document.getElementById("productsGrid");

const searchInput =
document.getElementById("searchInput");

const cartCount =
document.getElementById("cartCount");

const filterButtons =
document.querySelectorAll(".filter-btn");

/* =========================
   RENDER PRODUCTS
========================= */

function renderProducts(productList) {

    if (!grid) return;

    grid.innerHTML = "";

    productList.forEach(product => {

        const card =
        document.createElement("div");

        card.classList.add("product");

        card.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}">

            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    $${product.price}
                </p>

            </div>

        `;

        card.addEventListener("click", () => {

            window.location.href =
            `product.html?id=${product.id}`;

        });

        grid.appendChild(card);

    });

}

/* =========================
   SEARCH
========================= */

if (searchInput) {

    searchInput.addEventListener("input", (e) => {

        const value =
        e.target.value.toLowerCase();

        const filteredProducts =
        products.filter(product =>

            product.name
            .toLowerCase()
            .includes(value)

        );

        renderProducts(filteredProducts);

    });

}

/* =========================
   FILTERS
========================= */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const category =
        button.dataset.category;

        if (category === "all") {

            renderProducts(products);

            return;

        }

        const filteredProducts =
        products.filter(product =>

            product.category === category

        );

        renderProducts(filteredProducts);

    });

});

/* =========================
   CART COUNT
========================= */

function updateCartCount() {

    const cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    let totalItems = 0;

    cart.forEach(item => {

        totalItems +=
        item.quantity || 1;

    });

    if (cartCount) {

        cartCount.textContent =
        totalItems;

    }

}

/* =========================
   INIT
========================= */

renderProducts(products);

updateCartCount();