
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "logintrendly.firebaseapp.com",
  projectId: "logintrendly",
  storageBucket: "logintrendly.firebasestorage.app",
  messagingSenderId: "828358237456",
  appId: "1:828358237456:web:3209304acff7a9314e5995"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}