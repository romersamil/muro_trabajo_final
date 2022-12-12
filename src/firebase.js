import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCEjqRnLZC1S5XhegF7Hq7nHiwPaAo3g-4",
  authDomain: "interactivewall-fed86.firebaseapp.com",
  projectId: "interactivewall-fed86",
  storageBucket: "interactivewall-fed86.appspot.com",
  messagingSenderId: "683581033995",
  appId: "1:683581033995:web:6497ad8fb828c082d4410e"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const database = getFirestore(app)