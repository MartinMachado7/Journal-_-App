import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";

const {
  VITE_AUTHDOMAIN,
  VITE_APIKEY,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//pruducción.
// const firebaseConfig = {
  // apiKey: "AIzaSyBpTrbij6RmJwAPR_q0N9rtnixa70OcyOc",
  // authDomain: "martin4-1.firebaseapp.com",
  // projectId: "martin4-1",
  // storageBucket: "martin4-1.appspot.com",
  // messagingSenderId: "316754440281",
  // appId: "1:316754440281:web:a67065b65b5c1a36218148"
// };
//Testing.
// const firebaseConfig = {
//   apiKey: "AIzaSyAB_W5a-DLoNWvdCr3a4_cOMAamBsutsWI",
//   authDomain: "pruebasjournal.firebaseapp.com",
//   projectId: "pruebasjournal",
//   storageBucket: "pruebasjournal.appspot.com",
//   messagingSenderId: "538297490482",
//   appId: "1:538297490482:web:eb8aa79a93fcbeb914302b"
// };
const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId:VITE_PROJECTID,
  storageBucket:VITE_STORAGEBUCKET,
  messagingSenderId:VITE_MESSAGINGSENDERID,
  appId:VITE_APPID
};
// console.log(firebaseConfig)



// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);