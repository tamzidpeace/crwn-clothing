import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const config = {
    apiKey: "AIzaSyDjFiTs-j3PSiDjKW3DJj8r8X3LRIRSUpw",
    authDomain: "fir-practice-77990.firebaseapp.com",
    databaseURL: "https://fir-practice-77990.firebaseio.com",
    projectId: "fir-practice-77990",
    storageBucket: "fir-practice-77990.appspot.com",
    messagingSenderId: "24332734484",
    appId: "1:24332734484:web:c8bd5eb35d7459279a1701"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjFiTs-j3PSiDjKW3DJj8r8X3LRIRSUpw",
  authDomain: "fir-practice-77990.firebaseapp.com",
  databaseURL: "https://fir-practice-77990.firebaseio.com",
  projectId: "fir-practice-77990",
  storageBucket: "fir-practice-77990.appspot.com",
  messagingSenderId: "24332734484",
  appId: "1:24332734484:web:c8bd5eb35d7459279a1701"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */