import firebase from "firebase"
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCT-gMKiyXQUf_FjzxIYBBGM3Gmso012WY",
    authDomain: "bibliotecaeletronica-1604d.firebaseapp.com",
    projectId: "bibliotecaeletronica-1604d",
    storageBucket: "bibliotecaeletronica-1604d.appspot.com",
    messagingSenderId: "609646083672",
    appId: "1:609646083672:web:ef3f22fe3283a9019d942d"
  };
  
 firebase.initializeApp(firebaseConfig);

 export default firebase.firestore()