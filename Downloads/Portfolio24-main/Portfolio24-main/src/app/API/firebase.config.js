
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmGzW8Ku9N_5uhrUUQfSYKo2yCOg-Y2EE",
  authDomain: "portfolio-b6d2e.firebaseapp.com",
  projectId: "portfolio-b6d2e",
  storageBucket: "portfolio-b6d2e.appspot.com",
  messagingSenderId: "241067706959",
  appId: "1:241067706959:web:b9a1514dda01680d63b83a",
  measurementId: "G-LLK98Q53YE"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)