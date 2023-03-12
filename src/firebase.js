
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmyYGF1im8k_MyOLyCCYyjnD8Atz9t4R0",
  authDomain: "my-first-project-90cfa.firebaseapp.com",
  projectId: "my-first-project-90cfa",
  storageBucket: "my-first-project-90cfa.appspot.com",
  messagingSenderId: "85030024093",
  appId: "1:85030024093:web:b46fbfe24805329bb53574",
  measurementId: "G-H4G0VD9C57"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
console.log(db);
export default db;