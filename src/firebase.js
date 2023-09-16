import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkxUsb9v4WB_CpxLXsfXq8HRzW96fQXJM",
  authDomain: "nextjs-auth-7c954.firebaseapp.com",
  projectId: "nextjs-auth-7c954",
  storageBucket: "nextjs-auth-7c954.appspot.com",
  messagingSenderId: "1091854221500",
  appId: "1:1091854221500:web:3c27d2da00cdbee8abd0b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
