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

onAuthStateChanged(
auth,
async (user)=>{

    if(!user){

        window.location.href =
        "login.html";

        return;

    }

    const userDoc =
    await getDoc(
        doc(db,"users",user.uid)
    );

    if(!userDoc.exists()){

        window.location.href =
        "dashboard.html";

        return;

    }

    const data =
    userDoc.data();

    if(data.role !== "admin"){

        window.location.href =
        "dashboard.html";

    }

=======
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

onAuthStateChanged(
auth,
async (user)=>{

    if(!user){

        window.location.href =
        "login.html";

        return;

    }

    const userDoc =
    await getDoc(
        doc(db,"users",user.uid)
    );

    if(!userDoc.exists()){

        window.location.href =
        "dashboard.html";

        return;

    }

    const data =
    userDoc.data();

    if(data.role !== "admin"){

        window.location.href =
        "dashboard.html";

    }

>>>>>>> f1ffff6 (update)
});