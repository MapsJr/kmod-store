<<<<<<< HEAD
import { db }
from "./firebase.js";

import {
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const productsContainer =
document.getElementById("products");

async function loadProducts(){

    const querySnapshot =
    await getDocs(
        collection(db,"products")
    );

    productsContainer.innerHTML = "";

    querySnapshot.forEach((doc)=>{

        const product =
        doc.data();

        productsContainer.innerHTML += `

        <div class="product-card">

            <img
            src="${product.image}"
            alt="${product.name}">

            <h3>

            ${product.name}

            </h3>

            <p>

            $${product.price}

            </p>

        </div>

        `;

    });

}

=======
import { db }
from "./firebase.js";

import {
collection,
getDocs
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const productsContainer =
document.getElementById("products");

async function loadProducts(){

    const querySnapshot =
    await getDocs(
        collection(db,"products")
    );

    productsContainer.innerHTML = "";

    querySnapshot.forEach((doc)=>{

        const product =
        doc.data();

        productsContainer.innerHTML += `

        <div class="product-card">

            <img
            src="${product.image}"
            alt="${product.name}">

            <h3>

            ${product.name}

            </h3>

            <p>

            $${product.price}

            </p>

        </div>

        `;

    });

}

>>>>>>> f1ffff6 (update)
loadProducts();