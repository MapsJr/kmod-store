import { db } from "./firebase.js";

import {
    collection,
    getDocs
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const totalOrders =
document.getElementById("totalOrders");

const totalRevenue =
document.getElementById("totalRevenue");

const totalCustomers =
document.getElementById("totalCustomers");

const ordersContainer =
document.getElementById("ordersContainer");

async function loadDashboard(){

    const snapshot =
    await getDocs(
        collection(db,"orders")
    );

    let revenue = 0;

    const customers =
    new Set();

    let ordersHTML = "";

    snapshot.forEach(doc=>{

        const order =
        doc.data();

        revenue +=
        order.total || 0;

        customers.add(
            order.userId
        );

        ordersHTML += `

        <div class="order-card">

            <h3>
                ${order.customer.name}
            </h3>

            <p>
                $${order.total}
            </p>

            <p>
                ${order.status}
            </p>

        </div>

        `;

    });

    totalOrders.textContent =
    snapshot.size;

    totalRevenue.textContent =
    "$" + revenue;

    totalCustomers.textContent =
    customers.size;

    ordersContainer.innerHTML =
    ordersHTML || "No Orders Yet";
}

loadDashboard();