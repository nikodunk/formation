import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAPNHdEvZpl-pu_riiPmBw0aYDz2kT_Hn4",
  authDomain: "paperworklabs.firebaseapp.com",
  databaseURL: "https://paperworklabs.firebaseio.com",
  projectId: "paperworklabs",
  storageBucket: "paperworklabs.appspot.com",
  messagingSenderId: "1052524175634"
};

firebase.initializeApp(config);

export default firebase;

