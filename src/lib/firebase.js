import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZuoItJOR6j5vkYSu3txQrzUAT6G2IEs4",
  authDomain: "learning-management-system-2.firebaseapp.com",
  projectId: "learning-management-system-2",
  storageBucket: "learning-management-system-2.appspot.com",
  messagingSenderId: "635702001169",
  appId: "1:635702001169:web:63a0f4fb39a08d7e9e7bb0",
  measurementId: "G-342E246D0F",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

export default db;
