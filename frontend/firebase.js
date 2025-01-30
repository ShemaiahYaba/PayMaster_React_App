// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHOr5sqLg5Ec2_tlqJMYotSsw7-wmkrJA",
  authDomain: "tap-n-pay-2675f.firebaseapp.com",
  projectId: "tap-n-pay-2675f",
  storageBucket: "tap-n-pay-2675f.firebasestorage.app",
  messagingSenderId: "823715313057",
  appId: "1:823715313057:web:a11096236795ce0f7707e0",
  measurementId: "G-7B56Q50FW5",
};

// Initialize Firebase
const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
