<<<<<<< HEAD
import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const welcomeText = document.getElementById("welcomeText");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
        const data = snap.data();

        welcomeText.textContent = `Welcome ${data.name}`;

        // OPTIONAL: show role
        const roleTag = document.createElement("p");
        roleTag.textContent = `Role: ${data.role}`;
        document.body.appendChild(roleTag);
    }
});

logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html";
=======
import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const welcomeText = document.getElementById("welcomeText");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
        const data = snap.data();

        welcomeText.textContent = `Welcome ${data.name}`;

        // OPTIONAL: show role
        const roleTag = document.createElement("p");
        roleTag.textContent = `Role: ${data.role}`;
        document.body.appendChild(roleTag);
    }
});

logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html";
>>>>>>> f1ffff6 (update)
});