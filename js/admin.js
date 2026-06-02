import { db }
from "./firebase.js";

import {
    collection,
    getDocs
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const ordersContainer =
document.getElementById("ordersContainer");

async function loadOrders(){

    const querySnapshot =
    await getDocs(
        collection(db,"orders")
    );

    ordersContainer.innerHTML = "";

    querySnapshot.forEach(doc => {

        const order =
        doc.data();

        let itemsHTML = "";

        order.items.forEach(item => {

            itemsHTML += `

            <li>

                ${item.name}
                (${item.size})

                x${item.quantity}

            </li>

            `;

        });

        ordersContainer.innerHTML += `

        <div class="order-card">

            <h3>
                ${order.customer.name}
            </h3>

            <p>
                ${order.customer.email}
            </p>

            <p>
                ${order.customer.phone}
            </p>

            <p>
                ${order.customer.address}
            </p>

            <p>
                Status:
                ${order.status}
            </p>

            <ul>
                ${itemsHTML}
            </ul>

            <strong>
                Total:
                $${order.total}
            </strong>

        </div>

        `;

    });

}

loadOrders();