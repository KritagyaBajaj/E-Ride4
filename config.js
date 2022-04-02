import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIlqktG7PWayadTMzzba59tWDALhGiGIk",
  authDomain: "e-ride-289b6.firebaseapp.com",
  projectId: "e-ride-289b6",
  storageBucket: "e-ride-289b6.appspot.com",
  messagingSenderId: "601937346662",
  appId: "1:601937346662:web:d961944f4f28db239eeda7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
