import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCoG5mrsY4VefVZlsv1jEr2CRiPSezLsPU",
  authDomain: "seprojecttest-1d62b.firebaseapp.com",
  projectId: "seprojecttest-1d62b",
  storageBucket: "seprojecttest-1d62b.appspot.com",
  messagingSenderId: "973275954673",
  appId: "1:973275954673:web:944485480c80c92ea0d850",
  measurementId: "G-PM0754N5VD"
};

  export const Firebase= firebase.initializeApp(firebaseConfig)//named export