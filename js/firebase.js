import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMnpsJE3YzX3YqccwtNJDE7KuxwmfysoA",
  authDomain: "kmod-store.firebaseapp.com",
  projectId: "kmod-store",
  storageBucket: "kmod-store.appspot.com",
  messagingSenderId: "743382708938",
  appId: "1:743382708938:web:15b388e93b0ba24b4bba33"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);