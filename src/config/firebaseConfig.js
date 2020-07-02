import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAVPWCnNE7-bXMhvy8hMaNlRocWvQUDJ08",
    authDomain: "reactclientpanel-b1352.firebaseapp.com",
    databaseURL: "https://reactclientpanel-b1352.firebaseio.com",
    projectId: "reactclientpanel-b1352",
    storageBucket: "reactclientpanel-b1352.appspot.com",
    messagingSenderId: "91172901618",
    appId: "1:91172901618:web:4e6bc097b903f268d5366b",
    measurementId: "G-THRBM2YT7L"
  }

firebase.initializeApp(firebaseConfig);
firebase.firestore()  



export default firebase