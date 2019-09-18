import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDmp3gGUMYRItduQCRWwvDZeR-uPjS_89k",
  authDomain: "cmu-shuttle.firebaseapp.com",
  databaseURL: "https://cmu-shuttle.firebaseio.com",
  projectId: "cmu-shuttle",
  storageBucket: "",
  messagingSenderId: "684256511959",
  appId: "1:684256511959:web:088eaf353a63c3a828ad92"
};

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }

