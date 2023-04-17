// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBv4aCV-DIXLQkvEs6TB0Mpcce0nxUmHFk",
    authDomain: "netflix-clone-a154b.firebaseapp.com",
    projectId: "netflix-clone-a154b",
    storageBucket: "netflix-clone-a154b.appspot.com",
    messagingSenderId: "949023835040",
    appId: "1:949023835040:web:2b931b1dbfe8aa872c9ac5",
    measurementId: "G-V9TEHR7Z76"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }