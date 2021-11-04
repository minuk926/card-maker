// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
//import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
  //storageBucket: 'card-maker-1ac27.appspot.com',
  //messagingSenderId: '492087544102'
  //appId: '1:492087544102:web:f59dc954a70934cbc019e7',
  //measurementId: 'G-4G2JN8G45W'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// Get a reference to the database service
export const db = getDatabase(firebaseApp);
//const analytics = getAnalytics(app);
