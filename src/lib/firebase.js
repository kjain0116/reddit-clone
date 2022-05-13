import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAaIOF36D-mMTSP3ORrPgl_k_TaAL4eEoQ",
  authDomain: "reddit-clone-1e66f.firebaseapp.com",
  projectId: "reddit-clone-1e66f",
  storageBucket: "reddit-clone-1e66f.appspot.com",
  messagingSenderId: "645970869917",
  appId: "1:645970869917:web:66499aa5427920d0bd5e74",
  measurementId: "G-3H2ZJJM9KT",
};

const initFirebase = firebase.initializeApp(firebaseConfig);
const db = initFirebase.firestore();

export default db;