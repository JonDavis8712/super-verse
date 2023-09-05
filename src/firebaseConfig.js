import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7UIpoZsUmu0iwG0HM2D3jMJGCHOquMzA",
  authDomain: "superheroapi-9da66.firebaseapp.com",
  projectId: "superheroapi-9da66",
  storageBucket: "superheroapi-9da66.appspot.com",
  messagingSenderId: "49370495679",
  appId: "1:49370495679:web:28107628a80eb4dc8b640a",
  measurementId: "G-FP7P26MGTR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);