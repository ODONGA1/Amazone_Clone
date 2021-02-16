import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7YXQm2YLpy8877BegKZoKu2GiUDHmH1c",
  authDomain: "clone-c9c4a.firebaseapp.com",
  projectId: "clone-c9c4a",
  storageBucket: "clone-c9c4a.appspot.com",
  messagingSenderId: "326603560566",
  appId: "1:326603560566:web:135c3c78697e2afe5af157",
  measurementId: "G-DBB072Q3V6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
