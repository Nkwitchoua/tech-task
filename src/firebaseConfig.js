// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfVD3X_cjL2C-rWCQOAgJEiw6AebQuzUg",
  authDomain: "tech-task-b5e06.firebaseapp.com",
  projectId: "tech-task-b5e06",
  storageBucket: "tech-task-b5e06.appspot.com",
  messagingSenderId: "491678807447",
  appId: "1:491678807447:web:b68e2a6b5636bdf40f80d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);