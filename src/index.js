//console.log("hello")

import { initializeApp } from 'firebase/app'
import { 
    getFirestore, collection
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAu6iwGs95JYD9xTt1ZJJ5HIbw-P9LLT0g",
    authDomain: "chatroom-99c68.firebaseapp.com",
    projectId: "chatroom-99c68",
    storageBucket: "chatroom-99c68.appspot.com",
    messagingSenderId: "334106384398",
    appId: "1:334106384398:web:e31847632236e6fc81445f"
};

// initialize firebase app
initializeApp(firebaseConfig)


// initialize services
const db = getFirestore()
    // db === database


// collection reference
const collectionRef = collection(db, '')


// get collection data