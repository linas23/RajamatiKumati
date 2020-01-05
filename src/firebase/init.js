import firebase from 'firebase'
// import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBBXGwSqLIIU0rtlH_6EOqyWdxmXQNJiRk",
    authDomain: "rajamatikumati-61a16.firebaseapp.com",
    databaseURL: "https://rajamatikumati-61a16.firebaseio.com",
    projectId: "rajamatikumati-61a16",
    storageBucket: "rajamatikumati-61a16.appspot.com",
    messagingSenderId: "836836548939",
    appId: "1:836836548939:web:c11a8a1c4a572b4e6188ce",
    measurementId: "G-1REN1SYLZC"
  };


  firebase.initializeApp(firebaseConfig);

const db= firebase.firestore();
const auth= firebase.auth();
// const currentuser = firebase.auth.currentUser;

export {db,auth,};