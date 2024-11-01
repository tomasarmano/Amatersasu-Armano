import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt7aY-eSnNsZ8TldDRcQARHM4hJkik6EU",
  authDomain: "ecommerce-amaterasu.firebaseapp.com",
  projectId: "ecommerce-amaterasu",
  storageBucket: "ecommerce-amaterasu.appspot.com",
  messagingSenderId: "303162087410",
  appId: "1:303162087410:web:4b7011a02cf3a253ed7d6b"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db;  