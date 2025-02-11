import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_cuvu-hepCZkyrALYMAqFooBxCtthOkc",
  authDomain: "fourniture-website.firebaseapp.com",
  projectId: "fourniture-website",
  storageBucket: "fourniture-website.firebasestorage.app",
  messagingSenderId: "166633707402",
  appId: "1:166633707402:web:9525b907a1255e2ef25a73",
  measurementId: "G-YJTBCZ5B5Q"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
