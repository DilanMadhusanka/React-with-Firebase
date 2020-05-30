import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDhBfC1aSnSYIqteSg6keYb8z5fOBwxhnM",
    authDomain: "react-firebase-auth-fbba4.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-fbba4.firebaseio.com",
    projectId: "react-firebase-auth-fbba4",
    storageBucket: "react-firebase-auth-fbba4.appspot.com",
    messagingSenderId: "476767204084",
    appId: "1:476767204084:web:6eb71836e363c99fa3e4a1"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;