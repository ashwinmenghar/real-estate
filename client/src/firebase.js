// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3799d.firebaseapp.com",
  projectId: "mern-estate-3799d",
  storageBucket: "mern-estate-3799d.appspot.com",
  messagingSenderId: "478798998979",
  appId: "1:478798998979:web:b5834642017a39d0b6a176",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
