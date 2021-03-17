import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBUZOLQlCwUQP3U76K2QZlYG39ZFpBrNrE",
    authDomain: "game-jam-saitc.firebaseapp.com",
    projectId: "game-jam-saitc",
    storageBucket: "game-jam-saitc.appspot.com",
    messagingSenderId: "41200328683",
    appId: "1:41200328683:web:682656f3b94c623b2603ae",
    measurementId: "G-EQ848K3HGL"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const store = fire.firestore();

export {store}