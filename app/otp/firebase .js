import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAugSqTljn1nep7AwJKHcUhXsNI0liwyso",
    authDomain: "promechacademy.firebaseapp.com",
    projectId: "promechacademy",
    storageBucket: "promechacademy.appspot.com",
    messagingSenderId: "620880901381",
    appId: "1:620880901381:web:9edc4240d9050ae2eeb36c",
    measurementId: "G-P3DDZWZG85"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
