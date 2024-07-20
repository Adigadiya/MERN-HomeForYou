// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homeforyou-1155e.firebaseapp.com",
  projectId: "homeforyou-1155e",
  storageBucket: "homeforyou-1155e.appspot.com",
  messagingSenderId: "493578115835",
  appId: "1:493578115835:web:1b2bffda837a32ed7eae5e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
