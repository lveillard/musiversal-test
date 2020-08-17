import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgQ8niCoeLjDrrLtRSPnr7g2d_Qw3HSsQ",
  authDomain: "musiversal-logintest.firebaseapp.com",
  databaseURL: "https://musiversal-logintest.firebaseio.com",
  projectId: "musiversal-logintest",
  storageBucket: "musiversal-logintest.appspot.com",
  messagingSenderId: "939687667162",
  appId: "1:939687667162:web:51a78d15fefb5b12a9cce3",
  measurementId: "G-TC02CLY4E8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const fb = firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();
