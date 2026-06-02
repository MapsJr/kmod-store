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

});