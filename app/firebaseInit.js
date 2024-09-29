// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqgigAQihqlyezVWqdBEEUVefgnLQuMy8",
  authDomain: "conversationalai-d57c5.firebaseapp.com",
  projectId: "conversationalai-d57c5",
  storageBucket: "conversationalai-d57c5.appspot.com",
  messagingSenderId: "55916830887",
  appId: "1:55916830887:web:5a4a74485128d7ced4bb82",
  measurementId: "G-33K4E4FBLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
