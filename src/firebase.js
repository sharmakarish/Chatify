// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyA_lI8KzVEMTMZCg7mVwOvto2e7BJib6cI",
//   authDomain: "chitchat-48d31.firebaseapp.com",
//   projectId: "chitchat-48d31",
//   storageBucket: "chitchat-48d31.appspot.com",
//   messagingSenderId: "217560272896",
//   appId: "1:217560272896:web:872749127fe99fef99c8e5"
// };


// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWkTyA5jo6EeT43rx4jgSywZ3WwXRcrvU",
  authDomain: "chatbox-e0ba3.firebaseapp.com",
  projectId: "chatbox-e0ba3",
  storageBucket: "chatbox-e0ba3.appspot.com",
  messagingSenderId: "290163765812",
  appId: "1:290163765812:web:abfc22fc869060737f1061"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();


