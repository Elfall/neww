import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAS6abx93NgBzxcSj6rQFVY1Q4_7lIJBFs",
  authDomain: "next-fc7ce.firebaseapp.com",
  projectId: "next-fc7ce",
  storageBucket: "next-fc7ce.appspot.com",
  messagingSenderId: "896828609274",
  appId: "1:896828609274:web:117c083db7c689686def43"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)