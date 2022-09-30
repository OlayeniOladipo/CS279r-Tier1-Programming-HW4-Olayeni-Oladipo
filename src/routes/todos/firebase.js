import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


export var firebaseConfig = {
    apiKey: "AIzaSyA7WsoJ3psoopxBG6ibMuN94Ugo24FjLok",
    authDomain: "cs279r-todoapp-oladipo.firebaseapp.com",
    projectId: "cs279r-todoapp-oladipo",
    storageBucket: "cs279r-todoapp-oladipo.appspot.com",
    messagingSenderId: "659299973953",
    appId: "1:659299973953:web:53be7d123ca9defcd9ffc0"
};

// initialize app given the firebase config and keys
initializeApp(firebaseConfig);
// set up database
export let db = getFirestore();