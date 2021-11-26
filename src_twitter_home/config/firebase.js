import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    updateEmail,
    sendEmailVerification,
    updatePassword
} from "firebase/auth";

import { 
    getFirestore, 
    doc, 
    addDoc, 
    setDoc, 
    getDoc, 
    collection, 
    getDocs, 
    query,
    where,
    onSnapshot,
    orderBy,
    updateDoc, 
    deleteField,
    increment,
} from "firebase/firestore";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyB2rnxV-caNnUAb3l2FRPQYCDd094FxOBA",
    authDomain: "react-firebase-4ea86.firebaseapp.com",
    projectId: "react-firebase-4ea86",
    storageBucket: "react-firebase-4ea86.appspot.com",
    messagingSenderId: "644046104242",
    appId: "1:644046104242:web:b4964836ef5021081c0bab",
    measurementId: "G-RD5TZ7Q7LE"
});

const auth = getAuth();
const db = getFirestore();

export { 
    auth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    updateEmail,
    sendEmailVerification,
    updatePassword,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where,
    onSnapshot,
    orderBy,
    updateDoc,
    deleteField,
    increment
};