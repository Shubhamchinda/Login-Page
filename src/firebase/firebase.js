// Initialize Firebase
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyBqkiwmZmqFz9yS59qW-D5K0qShnC02nD4",
    authDomain: "reactjs-login-page.firebaseapp.com",
    databaseURL: "https://reactjs-login-page.firebaseio.com",
    projectId: "reactjs-login-page",
    storageBucket: "reactjs-login-page.appspot.com",
    messagingSenderId: "792843114904"
  };

if(!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
