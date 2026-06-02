import { auth, db }
from "./firebase.js";

import {
createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

import {
doc,
setDoc
}
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

document
.getElementById("registerBtn")
.addEventListener("click", async () => {

try{

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);

const user =
userCredential.user;

await setDoc(
doc(db,"users",user.uid),
{

name:name,

email:email,

createdAt:
new Date().toISOString(),

role:"customer"

}
);

window.location.href =
"login.html";

}

catch(error){

alert(error.message);

}

if(password.length < 6){

    alert(
    "Password must be at least 6 characters."
    );

    return;

}

});