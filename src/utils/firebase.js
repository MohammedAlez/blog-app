// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "blog-app-400215.firebaseapp.com",
  projectId: "blog-app-400215",
  storageBucket: "blog-app-400215.appspot.com",
  messagingSenderId: "339949849317",
  appId: "1:339949849317:web:b2aeca4a2704980e78e20c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);