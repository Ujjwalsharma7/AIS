import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA09wsNYYMmbDMHpoEeLROGTnS1Deh5Cho",
  authDomain: "internsystem-26b08.firebaseapp.com",
  projectId: "internsystem-26b08",
  storageBucket: "internsystem-26b08.appspot.com",
  messagingSenderId: "340652561910",
  appId: "1:340652561910:web:ad1d03b3ce324dacb1a3d7",
  measurementId: "G-CNQCY1ZDFR",
};

initializeApp(firebaseConfig);
export const db = getFirestore();
export const resdb = getStorage();
