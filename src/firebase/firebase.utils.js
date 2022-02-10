import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import {getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCmLA-XFFQXTe23O8PnCN1Uv6ceSqVPyD0",
    authDomain: "todo-app-dc492.firebaseapp.com",
    projectId: "todo-app-dc492",
    storageBucket: "todo-app-dc492.appspot.com",
    messagingSenderId: "1003601268554",
    appId: "1:1003601268554:web:29bc114f66187f863a3bb3"
};

firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = firebase.firestore();

// Authenticate Using Google Sign-In
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
}

export default firebase;