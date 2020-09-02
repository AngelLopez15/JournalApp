import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2B6Zqt6NTPc_-z1QBpgqzVIolQM9E4w8",
  authDomain: "react-app-journal-129c4.firebaseapp.com",
  databaseURL: "https://react-app-journal-129c4.firebaseio.com",
  projectId: "react-app-journal-129c4",
  storageBucket: "react-app-journal-129c4.appspot.com",
  messagingSenderId: "220252207734",
  appId: "1:220252207734:web:de4c6b630c3ae272e7bd57"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

// provider para autentificarnos con google (es lo misma para Twitter, FB, etc)
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAuthProvider, firebase}