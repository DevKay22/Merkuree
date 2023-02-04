// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import {  getAuth,  GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUIkovWEYKDnohGYrfVm8wk3XkO2ry5Pk",
  authDomain: "netflix-website-clone-97765.firebaseapp.com",
  projectId: "netflix-website-clone-97765",
  storageBucket: "netflix-website-clone-97765.appspot.com",
  messagingSenderId: "680863570989",
  appId: "1:680863570989:web:5bba70b18f6b0fa93c2ca4",
  measurementId: "G-5ZZQ2XM5H7"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider= new GoogleAuthProvider();

