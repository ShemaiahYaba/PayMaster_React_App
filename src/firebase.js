// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDFPPDiZPPeFL0cB4oaHIZHIfSl6onkHA",
  authDomain: "tapnpay-35c50.firebaseapp.com",
  projectId: "tapnpay-35c50",
  storageBucket: "tapnpay-35c50.firebasestorage.app",
  messagingSenderId: "184241034445",
  appId: "1:184241034445:web:c914faa34d0a0b7f284584",
  measurementId: "G-KH35JRXGRK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
