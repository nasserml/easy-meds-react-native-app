// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "naser-app-ai.firebaseapp.com",
  databaseURL: "https://naser-app-ai-default-rtdb.firebaseio.com",
  projectId: "naser-app-ai",
  storageBucket: "naser-app-ai.appspot.com",
  messagingSenderId: "706330481278",
  appId: "1:706330481278:web:1e58740de787cd1f52be2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);