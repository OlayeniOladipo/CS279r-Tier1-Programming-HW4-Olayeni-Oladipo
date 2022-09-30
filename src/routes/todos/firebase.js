import 'firebase/firestore';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore, collection } from "firebase/firestore";


export var firebaseConfig = {
    apiKey: "AIzaSyA7WsoJ3psoopxBG6ibMuN94Ugo24FjLok",
    authDomain: "cs279r-todoapp-oladipo.firebaseapp.com",
    projectId: "cs279r-todoapp-oladipo",
    storageBucket: "cs279r-todoapp-oladipo.appspot.com",
    messagingSenderId: "659299973953",
    appId: "1:659299973953:web:53be7d123ca9defcd9ffc0"
};

initializeApp(firebaseConfig);
export let db = getFirestore();