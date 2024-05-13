// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
export const firebaseApp = initializeApp({
        apiKey: "AIzaSyCZiLdyOQGYpj6narYyuANIBeM_p0xfdMc",
        authDomain: "meetyourmeeples-50189.firebaseapp.com",
        projectId: "meetyourmeeples-50189",
        storageBucket: "meetyourmeeples-50189.appspot.com",
        messagingSenderId: "553719165958",
        appId: "1:553719165958:web:692162fdb19075cd4dff87"
    });

export const db = getFirestore(firebaseApp);
// to create a new collection you would want to create a duplicate of under here, just make sure to change names (storage and /meeple/)
export const savedResourcesDb = collection(db, '/savedResources/');
export const meeplesDb = collection(db, '/meeples/');
export const journalDb = collection(db, '/journal/');


// Initialize Firebase Authentication and get a reference to the service
// https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0
// export const auth = getAuth(firebaseApp);