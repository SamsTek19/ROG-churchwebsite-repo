import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6sYTxQlkopDmztj7nQbP6XGD_ba6BZ_Y",
  authDomain: "firstproject-42151.firebaseapp.com",
  projectId: "firstproject-42151",
  storageBucket: "firstproject-42151.firebasestorage.app",
  messagingSenderId: "761802914918",
  appId: "1:761802914918:web:ea72b31c5809add03b81a7",
  measurementId: "G-4QN575K8FJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db }; 