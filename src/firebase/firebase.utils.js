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

// storing user data in firebase cloud firestore
export const createUserProfileDocument = async(userAuth, additionalData) => {
    
    // if the user auth object does not exist
    if(!userAuth) {
        return;
    }

    // if the user auth object does exist
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch(err) {
            console.log(`error creating a user`, err.message);
        }
    }

    return userRef;

}

// Authenticate Using Google Sign-In
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
}

export default firebase;