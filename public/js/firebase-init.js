import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, collection, query, where, onSnapshot, addDoc, serverTimestamp, orderBy, updateDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  projectId: "gen-lang-client-0617853928",
  appId: "1:186667717397:web:7dd0815e2a9c505e7bcf1c",
  apiKey: "AIzaSyAGIgcVWYnMqrc2aFIhwU91u9X58nLpFjM",
  authDomain: "gen-lang-client-0617853928.firebaseapp.com",
  storageBucket: "gen-lang-client-0617853928.firebasestorage.app",
  messagingSenderId: "186667717397"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app, "ai-studio-55d0960c-dccd-4e5a-a5a5-1d66f57ef3e9");

export { app, auth, db, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail, doc, getDoc, setDoc, collection, query, where, onSnapshot, addDoc, serverTimestamp, orderBy, updateDoc };
