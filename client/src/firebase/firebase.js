import * as firebase from 'firebase';
require('dotenv').config();


const prodConfig = {
  // apiKey: YOUR_API_KEY,
  // authDomain: YOUR_AUTH_DOMAIN,
  // databaseURL: YOUR_DATABASE_URL,
  // projectId: YOUR_PROJECT_ID,
  // storageBucket: '',
  // messagingSenderId: YOUR_MESSAGING_SENDER_ID,
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_DATABASE_URL,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID
};

const devConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_DATABASE_URL,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID
};



const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database();

const auth = firebase.auth();

// Using a popup.
const providerg = new firebase.auth.GoogleAuthProvider();
providerg.addScope('profile');
providerg.addScope('email');

const providerf = new firebase.auth.FacebookAuthProvider();
// providerf.addScope('name');
providerf.addScope('public_profile,email');
// 

// auth.getRedirectResult().then(function(result) {
//   if (result.credential) {
//     // This gives you a Google Access Token.
//     var token = result.credential.accessToken;
//     console.log('the token is',token)
//   }
//   var user = result.user;
//   console.log(user)
// });

// var provider = new firebase.auth.GoogleAuthProvider();
// provider.addScope('profile');
// provider.addScope('email');
// firebase.auth().signInWithRedirect(provider);






export {
  auth,db, providerg, providerf
};
