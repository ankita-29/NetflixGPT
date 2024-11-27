// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTCFGXKS2EihyPTL3jImzhZrR9joyb1TM",
  authDomain: "netflix-gpt-a0197.firebaseapp.com",
  projectId: "netflix-gpt-a0197",
  storageBucket: "netflix-gpt-a0197.firebasestorage.app",
  messagingSenderId: "136760234582",
  appId: "1:136760234582:web:32db45a21f28552d39e1f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  



export const auth = getAuth();