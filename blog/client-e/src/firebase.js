// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-project-eaccf.firebaseapp.com",
  projectId: "blog-project-eaccf",
  storageBucket: "blog-project-eaccf.appspot.com",
  messagingSenderId: "412833522750",
  appId: "1:412833522750:web:26b1f212f1991db00a1d6f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
