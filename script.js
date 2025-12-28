import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBq-xxZ_JA-PxKmh9MpwHv8MRoNLvJ7W-k",
  authDomain: "edu-learning-ug.firebaseapp.com",
  projectId: "edu-learning-ug",
  storageBucket: "edu-learning-ug.firebasestorage.app",
  messagingSenderId: "820557584158",
  appId: "1:820557584158:web:cb9c0962afbf58f0ab5b0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const msg = document.getElementById('msg');

// LOGIN
loginBtn.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      msg.innerText = error.message;
    });
});

// SIGNUP
signupBtn.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      msg.innerText = error.message;
    });
});

// Already logged in? Redirect
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "dashboard.html";
  }
});
function flipCard() {
  document.getElementById("card").classList.toggle("flip");
}

