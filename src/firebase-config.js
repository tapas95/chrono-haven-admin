// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkzv8uY4HBrF19P6CUvHrSnj6xOBXACnc",
  authDomain: "chronohaven.firebaseapp.com",
  projectId: "chronohaven",
  storageBucket: "chronohaven.firebasestorage.app",
  messagingSenderId: "598935116715",
  appId: "1:598935116715:web:3f7801faf73ec3e72450ee",
  measurementId: "G-KC1GKPTGVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);