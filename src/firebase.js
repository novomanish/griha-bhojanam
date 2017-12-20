import firebase from 'firebase'
require('firebase/firestore')

const config = {
  apiKey: 'AIzaSyCC7XAZyS7JzpeE_xWdA-1h7OpTHQX7Lz0',
  authDomain: 'griha-bhojanam.firebaseapp.com',
  databaseURL: 'https://griha-bhojanam.firebaseio.com',
  projectId: 'griha-bhojanam',
  storageBucket: 'griha-bhojanam.appspot.com',
  messagingSenderId: '544013916069'
}

// Initialize Firebase
firebase.initializeApp(config)

export default firebase.firestore()
