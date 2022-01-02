//console.log("hello")

import { initializeApp } from 'firebase/app'
import { 
    getFirestore, collection, /* getDocs, */
    addDoc, onSnapshot,
    query, where,
    orderBy, serverTimestamp,
    getDoc, doc
} from 'firebase/firestore'

import {
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth'

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

// initialize auth from firebase
const auth = getAuth()


// collection reference
export const collectionRef = collection(db, 'chats')


// querying data
/* const q = query(collectionRef, orderBy("created_at", "asc")) */


// get collection data (retrieves documents inside collection)
    // passing in collectionRef to getDocs() produces a snapshot
    // when we retrieve that snapshot, we want to iterate through the documents of our collection
    // and only push the doc's data and id into a new array "chats"
/* getDocs(collectionRef)
    .then((snapshot) => {
        //console.log(snapshot.docs)
        let chats = []
        snapshot.docs.forEach((doc) => {
            chats.push({ ...doc.data(), id: doc.id })
        })
        console.log(chats)
        
    })
    .catch((error) => {
        console.log(error.message)
    }) */
    // THIS IS GOOD BUT WE WANT REAL TIME DATA COLLECTION


// realtime data collection
    // this callback is going to fire once initially and thereafter every time there is a change in the collection
onSnapshot(collectionRef, (snapshot) => {
    let chats = []
    snapshot.docs.forEach((doc) => {
        chats.push({ ...doc.data(), id: doc.id })
    })
    console.log(chats)
})


// add a new chat
const newChatForm = document.querySelector('.new-chat')

newChatForm.addEventListener("submit", (e) => {
    e.preventDefault()

    addDoc(collectionRef, {
        message: newChatForm.message.value,
        created_at: serverTimestamp()
    })
    .then(() => {
        newChatForm.reset()
    })
})


// get single document
const documentRef = doc(db, 'chats', "lTpSqDVgdCyK1KcwxgyM" )

/* getDoc(documentRef)
    .then((doc) => {
        console.log(doc.data(), doc.id)
    }) */

onSnapshot(documentRef, (doc) => {
    console.log(doc.data(), doc.id)
})


// signing users up
const signupForm = document.querySelector(".signup")
signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = signupForm.email.value
    const password = signupForm.password.value

    createUserWithEmailAndPassword(auth, email, password )
        .then((credential) => {
            console.log('user created: ', credential.user)
            signupForm.reset()
        })
        .catch((error) => {
            console.log(error.message)
        })
})