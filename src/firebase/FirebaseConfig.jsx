// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUa7x2cCvynJfUoqHqJSuqNQ06XojUteE",
  authDomain: "shopsphere-fec37.firebaseapp.com",
  projectId: "shopsphere-fec37",
  storageBucket: "shopsphere-fec37.appspot.com",
  messagingSenderId: "445358865991",
  appId: "1:445358865991:web:4f9e7ba9815c4bd15e7b62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;