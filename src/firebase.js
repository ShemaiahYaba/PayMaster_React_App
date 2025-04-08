// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFdn2cbepB6vXL5rH05xgaPGM_17MO9Xk",
  authDomain: "tapnpay-4460d.firebaseapp.com",
  projectId: "tapnpay-4460d",
  storageBucket: "tapnpay-4460d.firebasestorage.app",
  messagingSenderId: "901465971453",
  appId: "1:901465971453:web:7d0533a5d9d11113c23c94",
  measurementId: "G-X2VYXWP108",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
