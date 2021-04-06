import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD9VUulohhqj1K6r6xqGT52tvrbTiPQ4TY",
  authDomain: "e-clone-51802.firebaseapp.com",
  projectId: "e-clone-51802",
  storageBucket: "e-clone-51802.appspot.com",
  messagingSenderId: "409658999569",
  appId: "1:409658999569:web:c0357dd73fb57e7ea282b0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};