// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASPgQ8V4Ivq3KMW3Qfw_w8kMN18N6dcPY",
  authDomain: "e-commerceproject-6390b.firebaseapp.com",
  projectId: "e-commerceproject-6390b",
  storageBucket: "e-commerceproject-6390b.appspot.com",
  messagingSenderId: "867447684656",
  appId: "1:867447684656:web:1223f2bede30b2608e37f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB, auth};