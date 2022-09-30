import firebase, { getApp, getApps } from 'firebase/app';
// import 'firebase/auth';
import 'firebase/firestore';
import {collection, getFirestore } from "Firebase/firestore/lite";
import { browser } from '$app/environment';

export var firebaseConfig = {
    apiKey: "AIzaSyA7WsoJ3psoopxBG6ibMuN94Ugo24FjLok",
    authDomain: "cs279r-todoapp-oladipo.firebaseapp.com",
    projectId: "cs279r-todoapp-oladipo",
    storageBucket: "cs279r-todoapp-oladipo.appspot.com",
    messagingSenderId: "659299973953",
    appId: "1:659299973953:web:53be7d123ca9defcd9ffc0"
};

//let db;
// let app;
// if(browser) {
//     if(getApps().length === 0) {
//         app  = firebase.initializeApp(firebaseConfig);
//     } else {
//         getApp();
//     }
//    // db = getFirestore(app);
// }

// export const auth = firebase.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const db = firebase.firestore();

// const todoCollection = collection(db, "todos");

// export {
//     todoCollection
// }