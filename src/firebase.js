import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoyreamJ9SVAnDeVF4FXpvUcx6xxajlqs",
  authDomain: "discord-c0fc7.firebaseapp.com",
  databaseURL: "https://discord-c0fc7.firebaseio.com",
  projectId: "discord-c0fc7",
  storageBucket: "discord-c0fc7.appspot.com",
  messagingSenderId: "989252729891",
  appId: "1:989252729891:web:53ba8e4bb1ba087a800596",
  measurementId: "G-CPYXLCKRHB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
