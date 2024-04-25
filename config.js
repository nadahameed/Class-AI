import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe6ubZ_x5fpVDB6PGJz40MoU8kY1NKZRM",
  authDomain: "class-ai-b79cb.firebaseapp.com",
  projectId: "class-ai-b79cb",
  storageBucket: "class-ai-b79cb.appspot.com",
  messagingSenderId: "609045102931",
  appId: "1:609045102931:web:077832d8df2b7748d6e1a6",
  measurementId: "G-X80X1K2X3F"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

