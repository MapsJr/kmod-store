<<<<<<< HEAD
import { auth, db }
from "./firebase.js";

import {
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

import {
doc,
getDoc
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

onAuthStateChanged(auth, async(user)=>{

if(!user){

window.location.href =
"login.html";

return;

}

const docRef =
doc(db,"users",user.uid);

const docSnap =
await getDoc(docRef);

if(docSnap.exists()){

const data =
docSnap.data();

document.getElementById(
"profileName"
).textContent =
data.name;

document.getElementById(
"profileEmail"
).textContent =
data.email;

}

try {

    const docRef =
    doc(db, "users", user.uid);

    const docSnap =
    await getDoc(docRef);

    if (docSnap.exists()) {

        const data =
        docSnap.data();

        document.getElementById(
        "profileName"
        ).textContent =
        data.name;

        document.getElementById(
        "profileEmail"
        ).textContent =
        data.email;

    }

}

catch(error){

    console.error(error);

}

=======
import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

import {
    doc,
    getDoc,
    collection,
    query,
    where,
    getDocs
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const profileName =
document.getElementById("profileName");

const profileEmail =
document.getElementById("profileEmail");

const totalOrders =
document.getElementById("totalOrders");

const totalSpent =
document.getElementById("totalSpent");

const mostBought =
document.getElementById("mostBought");

const memberSince =
document.getElementById("memberSince");

const recentOrders =
document.getElementById("recentOrders");

const logoutBtn =
document.getElementById("logoutBtn");

onAuthStateChanged(auth, async(user)=>{

    if(!user){

        window.location.href =
        "login.html";

        return;
    }

    try{

        const userDoc =
        await getDoc(
            doc(db,"users",user.uid)
        );

        if(userDoc.exists()){

            const data =
            userDoc.data();

            profileName.textContent =
            data.name || "Customer";

            profileEmail.textContent =
            data.email || "";

            if(data.createdAt){

                memberSince.textContent =
                new Date(
                    data.createdAt
                ).getFullYear();
            }

        }

        const ordersQuery =
        query(
            collection(db,"orders"),
            where(
                "userId",
                "==",
                user.uid
            )
        );

        const ordersSnapshot =
        await getDocs(
            ordersQuery
        );

        const orders = [];

        let spent = 0;

        const products = {};

        ordersSnapshot.forEach(docSnap=>{

            const order =
            docSnap.data();

            orders.push(order);

            spent +=
            order.total || 0;

            if(order.items){

                order.items.forEach(item=>{

                    products[item.name] =
                    (products[item.name] || 0)
                    + item.quantity;

                });

            }

        });

        totalOrders.textContent =
        orders.length;

        totalSpent.textContent =
        "$" + spent;

        let bestProduct =
        "None";

        let highest = 0;

        for(
            const product in products
        ){

            if(
                products[product]
                > highest
            ){

                highest =
                products[product];

                bestProduct =
                product;

            }

        }

        mostBought.textContent =
        bestProduct;

        recentOrders.innerHTML = "";

        if(orders.length === 0){

            recentOrders.innerHTML = `

                <p>
                    No orders yet.
                </p>

            `;

        }

        else{

            orders
            .reverse()
            .slice(0,5)
            .forEach(order=>{

                recentOrders.innerHTML += `

                <div class="order-card">

                    <h3>
                        ${order.status}
                    </h3>

                    <p>
                        Total:
                        $${order.total}
                    </p>

                    <p>
                        ${order.items.length}
                        item(s)
                    </p>

                </div>

                `;

            });

        }

    }

    catch(error){

        console.error(error);

    }

});

logoutBtn.addEventListener(
"click",
async()=>{

    localStorage.removeItem("cart");

    await signOut(auth);

    window.location.href =
    "index.html";

>>>>>>> f1ffff6 (update)
});