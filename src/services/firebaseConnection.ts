import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCgU1Y1ysie89OplI4tesQ-jZBmvjCRU8Q",
  authDomain: "tarefas-plus-1f985.firebaseapp.com",
  projectId: "tarefas-plus-1f985",
  storageBucket: "tarefas-plus-1f985.appspot.com",
  messagingSenderId: "310634433998",
  appId: "1:310634433998:web:bb122e9a3dbbde2b4fef9f"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db }
