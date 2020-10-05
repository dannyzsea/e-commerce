import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQ8QqUgH02F7AFuGI1IalvTf2D2guXbHA",
  authDomain: "e-commerce-e9a9d.firebaseapp.com",
  databaseURL: "https://e-commerce-e9a9d.firebaseio.com",
  projectId: "e-commerce-e9a9d",
  storageBucket: "e-commerce-e9a9d.appspot.com",
  messagingSenderId: "901084891805",
  appId: "1:901084891805:web:0aa287bce48083e40ba274",
  measurementId: "G-79W8578V7H",
});

const auth = firebase.auth();
export { auth };
