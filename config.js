import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBTa1nqanZ95Gpi5CAnzpRrYa5RUIxSZ8Q",
  authDomain: "pro-71-788bb.firebaseapp.com",
  projectId: "pro-71-788bb",
  storageBucket: "pro-71-788bb.appspot.com",
  messagingSenderId: "937243150228",
  appId: "1:937243150228:web:2330c0f11b042feb7c3181"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


