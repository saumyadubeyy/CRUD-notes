import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDiB5sahhi1nKVaqeGnfdp43D8Uchic_E4",
    authDomain: "crud-notes-ef8f0.firebaseapp.com",
    projectId: "crud-notes-ef8f0",
    storageBucket: "crud-notes-ef8f0.appspot.com",
    messagingSenderId: "498162537686",
    appId: "1:498162537686:web:20a42db75c5179d2442577"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
