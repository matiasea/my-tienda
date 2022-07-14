// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyD5NfGw2yLZORLNbCIDGOI2jup_qpY2Xo8",
  authDomain: "my-tienda-matiasea.firebaseapp.com",
  projectId: "my-tienda-matiasea",
  storageBucket: "my-tienda-matiasea.appspot.com",
  messagingSenderId: "870498205201",
  appId: "1:870498205201:web:b7b8b0db4a9b1a155dbbb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);