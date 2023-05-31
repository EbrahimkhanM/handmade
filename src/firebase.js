  // Import the functions you need from the SDKs you need

  import { getAuth } from "firebase/auth";
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage,ref } from "firebase/storage";
  import { getDatabase } from "firebase/database";
  // import firebase from "firebase/app";
  // import "firebase/storage";

  // import "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyCzp2T5xnmEvX8FCLGGa9wEqX8RWVJcvHQ",
    authDomain: "handi-13c90.firebaseapp.com",
    projectId: "handi-13c90",
    storageBucket: "handi-13c90.appspot.com",
    databaseUrl: "https://handi-13c90-default-rtdb.firebaseio.com",
    messagingSenderId: "261758734682",
    appId: "1:261758734682:web:626cdb84303ff5ce08a363",
    measurementId: "G-6LR9007FCB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
  // const storage = firebase.storage();
  // export const storage = firebase.storage();
    // const storageRef = firebase.storage().ref();
  export const storageRef = ref(storage);
  const database = getDatabase(app);
