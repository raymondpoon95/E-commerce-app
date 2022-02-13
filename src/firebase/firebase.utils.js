import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAaHz4-Dc2JRmZllpptjM80SwuWCASOaU0",
  authDomain: "e-commerce-app-db-ad820.firebaseapp.com",
  projectId: "e-commerce-app-db-ad820",
  storageBucket: "e-commerce-app-db-ad820.appspot.com",
  messagingSenderId: "707981443776",
  appId: "1:707981443776:web:ba18f0e02cc88d18f56325",
  measurementId: "G-SKJPBKM213",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
