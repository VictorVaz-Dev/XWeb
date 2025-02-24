// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVZYo7jq0IVPVO8p8lCMgIpO9zSymshMc",
  authDomain: "xweb-2013d.firebaseapp.com",
  projectId: "xweb-2013d",
  storageBucket: "xweb-2013d.firebasestorage.app",
  messagingSenderId: "64656416553",
  appId: "1:64656416553:web:df143e9e93952699e9e138",
  measurementId: "G-V9VGMXV9WN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);