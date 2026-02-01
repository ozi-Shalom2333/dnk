import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBeyZn5bxICrJsAnyF5T3ynTX0aich9uW0",
  authDomain: "dnk-version1.firebaseapp.com",
  projectId: "dnk-version1",
  storageBucket: "dnk-version1.firebasestorage.app",
  messagingSenderId: "794912048453",
  appId: "1:794912048453:web:52187ee376e67565c7aa2c",
  measurementId: "G-73Z9FH5BXN"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);