//console.log("hello")

import { initializeApp } from 'firebase/app'
import { 
    getFirestore, collection, getDocs
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
const collectionRef = collection(db, 'chats')


// get collection data (retrieves documents inside collection)
    // passing in collectionRef to getDocs() produces a snapshot
    // when we retrieve that snapshot, we want to iterate through the documents of our collection
    // and only push the doc's data and id into a new array "chats"
getDocs(collectionRef)
    .then((snapshot) => {
        //console.log(snapshot.docs)
        let chats = []
        snapshot.docs.forEach((doc) => {
            chats.push({ ...doc.data(), id: doc.id })
        })
        console.log(chats)
    })
