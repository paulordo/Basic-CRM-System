import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdkTBCwk7PVSzNXbHO6I43hbzsWCLZSXA",
  authDomain: "crm-a5773.firebaseapp.com",
  projectId: "crm-a5773",
  storageBucket: "crm-a5773.firebasestorage.app",
  messagingSenderId: "1008438267969",
  appId: "1:1008438267969:web:52df7e89ca017154adb6c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };