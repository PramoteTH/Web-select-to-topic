import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAhI5XOXKblnXWIEKUR91FkVJ4guAH78KA",
    authDomain: "react-authen-90917.firebaseapp.com",
    projectId: "react-authen-90917",
    storageBucket: "react-authen-90917.appspot.com",
    messagingSenderId: "483159362040",
    appId: "1:483159362040:web:78c08a2c81c7ca82a76e0d",
    measurementId: "G-X9GJR97NR9"
});

export default firebaseConfig;