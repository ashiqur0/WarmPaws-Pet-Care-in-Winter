// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHBgsDBZ_B-06Brs02QVD-PZvj4a1bgeI",
  authDomain: "warmpaws-pet-care-in-win-8fd50.firebaseapp.com",
  projectId: "warmpaws-pet-care-in-win-8fd50",
  storageBucket: "warmpaws-pet-care-in-win-8fd50.firebasestorage.app",
  messagingSenderId: "902102347487",
  appId: "1:902102347487:web:a7987f26875ef6ef55836a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;