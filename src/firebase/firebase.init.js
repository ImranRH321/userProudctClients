// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlU8sVL1ktQ50k0nZACFuJD1pUn0TZqKw",
  authDomain: "ima-87518.firebaseapp.com",
  projectId: "ima-87518",
  storageBucket: "ima-87518.appspot.com",
  messagingSenderId: "931140233896",
  appId: "1:931140233896:web:3fb0661940e8bb233a309d",
  measurementId: "G-9F7N3PM4PN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export default auth; 