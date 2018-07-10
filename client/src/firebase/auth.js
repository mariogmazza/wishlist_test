import { auth, firebase, providerg, providerf, db } from './firebase';
import localStorage from 'localStorage';


// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>{
  auth.signOut();
}

  // Password Reset
export const doPasswordReset = (email) =>
auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
auth.currentUser.updatePassword(password);

export const googleSignIn = () =>{
  console.log('Trying to start it')
  auth.signInWithPopup(providerg).then(function(result) {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;

    //  auth.onAuthStateChanged(function(user) {
    //   // Once authenticated, instantiate Firechat with the logged in user
    //   if (user) {
    //     initChat(user);
    //   }
    // });
    
    });
}

export const facebookSignIn = () =>{
  console.log('Trying to start it')
  auth.signInWithPopup(providerf).then(function(result) {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;
    });
}








// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     // List of OAuth providers supported.
//     auth.GoogleAuthProvider.PROVIDER_ID,
//     auth.FacebookAuthProvider.PROVIDER_ID,
//     auth.TwitterAuthProvider.PROVIDER_ID,
//     auth.GithubAuthProvider.PROVIDER_ID
//   ],

// });



