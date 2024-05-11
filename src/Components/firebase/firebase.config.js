// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB6WQVfQUh4ra98tnTPdRU1TNijnquRRQ",
  authDomain: "car-doctor-client-63e88.firebaseapp.com",
  projectId: "car-doctor-client-63e88",
  storageBucket: "car-doctor-client-63e88.appspot.com",
  messagingSenderId: "998499807465",
  appId: "1:998499807465:web:6f62d8e720e2e8aea3c078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;