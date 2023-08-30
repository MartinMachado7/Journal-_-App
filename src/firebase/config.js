// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpTrbij6RmJwAPR_q0N9rtnixa70OcyOc",
  authDomain: "martin4-1.firebaseapp.com",
  projectId: "martin4-1",
  storageBucket: "martin4-1.appspot.com",
  messagingSenderId: "316754440281",
  appId: "1:316754440281:web:a67065b65b5c1a36218148"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

const FirebaseDB = getFirestore(FirebaseApp);