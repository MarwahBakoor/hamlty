import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsKdyGoZWb3bUC-70TRO6XanCkZcEG4BI",
  authDomain: "hamlaty-cc009.firebaseapp.com",
  projectId: "hamlaty-cc009",
  storageBucket: "hamlaty-cc009.appspot.com",
  messagingSenderId: "945885621587",
  appId: "1:945885621587:web:7784059b860c962ccc45a6",
  measurementId: "G-W9PET4H18L"
};

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);


