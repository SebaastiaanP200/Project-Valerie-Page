// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFfKGJiQqocXdOr_XJfH6x3WTe9qWi7DI",
  authDomain: "vc-web-site.firebaseapp.com",
  projectId: "vc-web-site",
  storageBucket: "vc-web-site.firebasestorage.app",
  messagingSenderId: "799751423357",
  appId: "1:799751423357:web:a1aef7196f4b1508ad3814",
  measurementId: "G-MF64J25RWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);