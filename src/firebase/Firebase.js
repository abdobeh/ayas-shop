import firebase from 'firebase/app';
import 'firebase/auth';
// import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.REACT_APP_API_KEY,
  authDomain: process.REACT_APP_AUTH_DOMAIN, 
  projectId: process.REACT_APP_PROJECT_ID,
  storageBucket: process.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.REACT_APP_ID,
  measurementId: process.REACT_APP_MEASUREMENT_ID
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
// export const firestore = firebase.firestore();
export const database = firebase.database();


 

