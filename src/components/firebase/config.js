import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAhI5XOXKblnXWIEKUR91FkVJ4guAH78KA",
  authDomain: "react-authen-90917.firebaseapp.com",
  projectId: "react-authen-90917",
  storageBucket: "react-authen-90917.appspot.com",
  messagingSenderId: "483159362040",
  appId: "1:483159362040:web:78c08a2c81c7ca82a76e0d",
  measurementId: "G-X9GJR97NR9"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();

export { projectStorage, projectFirestore, timestamp ,auth};