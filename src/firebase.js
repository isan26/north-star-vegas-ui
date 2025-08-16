import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi9Ug08yCeqixUscn4VNf0zkj0D5jPsGY",
  authDomain: "northstarvegas.firebaseapp.com",
  projectId: "northstarvegas",
  storageBucket: "northstarvegas.firebasestorage.app",
  messagingSenderId: "271092816896",
  appId: "1:271092816896:web:20e84c0995ff2394764ce5",
  measurementId: "G-WYZZ1BJDYR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
