import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTRF0P7iqvMz9iglrBzea1uTz3uK6lI3U",
    authDomain: "twitter-clone-4782a.firebaseapp.com",
    projectId: "twitter-clone-4782a",
    storageBucket: "twitter-clone-4782a.appspot.com",
    messagingSenderId: "622032106478",
    appId: "1:622032106478:web:105b5648be77082e9e94ff",
    measurementId: "G-C8N3C2GGQD"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();


export default db;
