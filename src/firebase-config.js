import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAnZYOfgmFI84dgj20_tAwRwYV8qc41kzw",
  authDomain: "twitter-clone-2e439.firebaseapp.com",
  projectId: "twitter-clone-2e439",
  storageBucket: "twitter-clone-2e439.appspot.com",
  messagingSenderId: "441840719817",
  appId: "1:441840719817:web:19fcd8743cc0b0ea22ba18",
  measurementId: "G-9CWB8R04FL"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;


