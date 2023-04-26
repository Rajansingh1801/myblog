import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCfeG6j0vZ6XV6jzbJ2pypc0d1Hh2g844A",
  authDomain: "blogapp-a857c.firebaseapp.com",
  projectId: "blogapp-a857c",
  storageBucket: "blogapp-a857c.appspot.com",
  messagingSenderId: "209579903663",
  appId: "1:209579903663:web:49aa598ce5234bc1c3225a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
