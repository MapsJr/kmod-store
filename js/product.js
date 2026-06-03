import { auth } from "./firebase.js";

/* =========================
   KMØD PRODUCT PAGE
========================= */

const products = [

    {
        id: 1,
        name: "Black Future Tee",
        price: 129,
        image: "assets/Images/Black.png"
    },

    {
        id: 2,
        name: "Deep Future Tee",
        price: 189,
        image: "assets/Images/Black-Purple.png"
    },

    {
        id: 3,
        name: "Ascend Tee",
        price: 249,
        image: "assets/Images/Dark-Brown.png"
    },

    {
        id: 4,
        name: "White Mode Hoodie",
        price: 299,
        image: "assets/Images/Hoodie-White.png"
    },

    {
        id: 5,
        name: "Vision Jacket",
        price: 399,
        image: "assets/Images/Jacket-Black.png"
    }

];

/* =========================
   GET PRODUCT
========================= */

const params =
new URLSearchParams(
window.location.search
);

const productId =
Number(params.get("id"));

const currentProduct =
products.find(
product => product.id === productId
) || products[0];

/* =========================
   PAGE ELEMENTS
========================= */

const title =
document.querySelector(
".product-details h1"
);

const price =
document.querySelector(
".price"
);

const mainImage =
document.getElementById(
"mainImage"
);

const quantityText =
document.getElementById(
"quantity"
);

const addToCart =
document.getElementById(
"addToCart"
);

/* =========================
   LOAD PRODUCT
========================= */

if(title){

    title.textContent =
    currentProduct.name;

}

if(price){

    price.textContent =
    "$" + currentProduct.price;

}

if(mainImage){

    mainImage.src =
    currentProduct.image;

}

/* =========================
   THUMBNAILS
========================= */

const thumbnails =
document.querySelectorAll(
".thumbnail"
);

thumbnails.forEach(thumbnail => {

    thumbnail.addEventListener(
    "click",
    () => {

        if(mainImage){

            mainImage.src =
            thumbnail.src;

        }

        thumbnails.forEach(item => {

            item.classList.remove(
            "active"
            );

        });

        thumbnail.classList.add(
        "active"
        );

    });

});

/* =========================
   COLORS
========================= */

let selectedColor =
"black";

const colorButtons =
document.querySelectorAll(
".color-btn"
);

colorButtons.forEach(button => {

    button.addEventListener(
    "click",
    () => {

        colorButtons.forEach(btn => {

            btn.classList.remove(
            "active"
            );

        });

        button.classList.add(
        "active"
        );

        selectedColor =
        button.dataset.color;

        if(
            mainImage &&
            button.dataset.image
        ){

            mainImage.src =
            button.dataset.image;

        }

    });

});

/* =========================
   SIZES
========================= */

let selectedSize =
"M";

const sizeButtons =
document.querySelectorAll(
".size-btn"
);

sizeButtons.forEach(button => {

    if(
        button.textContent.trim()
        === "M"
    ){

        button.classList.add(
        "active"
        );

    }

    button.addEventListener(
    "click",
    () => {

        sizeButtons.forEach(btn => {

            btn.classList.remove(
            "active"
            );

        });

        button.classList.add(
        "active"
        );

        selectedSize =
        button.textContent.trim();

    });

});

/* =========================
   QUANTITY
========================= */

let quantity = 1;

const plusBtn =
document.getElementById(
"plus"
);

const minusBtn =
document.getElementById(
"minus"
);

if(plusBtn){

    plusBtn.addEventListener(
    "click",
    () => {

        quantity++;

        quantityText.textContent =
        quantity;

    });

}

if(minusBtn){

    minusBtn.addEventListener(
    "click",
    () => {

        if(quantity > 1){

            quantity--;

            quantityText.textContent =
            quantity;

        }

    });

}

/* =========================
   ADD TO CART
========================= */

if(addToCart){

    addToCart.addEventListener(
    "click",
    () => {

        const uid =
        auth.currentUser?.uid ||
        "guest";

        let cart =
        JSON.parse(
            localStorage.getItem(
                `cart_${uid}`
            )
        ) || [];

        const existingItem =
        cart.find(item =>

            item.id === currentProduct.id &&
            item.size === selectedSize &&
            item.color === selectedColor

        );

        if(existingItem){

            existingItem.quantity +=
            quantity;

        }

        else{

            cart.push({

                id:
                currentProduct.id,

                name:
                currentProduct.name,

                price:
                currentProduct.price,

                image:
                currentProduct.image,

                color:
                selectedColor,

                size:
                selectedSize,

                quantity:
                quantity

            });

        }

        localStorage.setItem(

            `cart_${uid}`,

            JSON.stringify(cart)

        );

        window.location.href =
        "cart.html";

    });

}
