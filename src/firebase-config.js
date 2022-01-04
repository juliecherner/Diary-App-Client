// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_KEY_AUTH_DOMAIN,
  projectId: "todos-eda18",
  storageBucket: "todos-eda18.appspot.com",
  messagingSenderId: "969697047005",
  appId: "1:969697047005:web:6fb30fb6a2474e222f4634",
  measurementId: "G-MZ8M3SDPZ0",
};

//process.env.

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Get a reference to the database service
export const database = getDatabase(app);
