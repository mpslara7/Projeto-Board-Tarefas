import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDFGtvBBJVfVZvvXYsefNu5AomxxO9GmKk',
  authDomain: 'gerenciador-tarefas-a9fdc.firebaseapp.com',
  projectId: 'gerenciador-tarefas-a9fdc',
  storageBucket: 'gerenciador-tarefas-a9fdc.appspot.com',
  messagingSenderId: '967813097784',
  appId: '1:967813097784:web:e2a6103a135019271c79cd',
};

const fireBaseApp = initializeApp(firebaseConfig);

const db = getFirestore(fireBaseApp);

export { db };
