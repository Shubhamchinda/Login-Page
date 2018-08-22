// Initialize Firebase
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';


const config = {
  apiKey: 'AIzaSyBUUaByENtH-QWL3w1AIW1rcjXeQo4_aXE',
  authDomain: 'filmy-profiles.firebaseapp.com',
  databaseURL: 'https://filmy-profiles.firebaseio.com',
  projectId: 'filmy-profiles',
  storageBucket: 'filmy-profiles.appspot.com',
  messagingSenderId: '82052180042'
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
