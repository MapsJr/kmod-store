import { auth, db } from "./firebase.js";

import {
    signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

import {
    doc,
    getDoc
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const loginBtn =
document.getElementById("loginBtn");

loginBtn.addEventListener(
"click",
async () => {

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    try {

        const userCredential =
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user =
        userCredential.user;

        const userDoc =
        await getDoc(
            doc(db,"users",user.uid)
        );

        if(!userDoc.exists()){

            alert(
                "User profile not found."
            );

            return;

        }

        const data =
        userDoc.data();

        if(data.role === "admin"){

            window.location.href =
            "admin.html";

        }

        else{

            window.location.href =
            "dashboard.html";

        }

    }

    catch(error){

        alert(error.message);

    }

});