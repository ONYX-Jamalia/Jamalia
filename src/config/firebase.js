
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGsZ1VJOj89ZWPiqal2NeCxTXIVAmV69I",
  authDomain: "jamalia-6f98a.firebaseapp.com",
  projectId: "jamalia-6f98a",
  storageBucket: "jamalia-6f98a.appspot.com",
  messagingSenderId: "381035563936",
  appId: "1:381035563936:web:8e83731cf80bf619afb2c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);