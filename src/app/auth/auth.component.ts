import { Component } from '@angular/core';
// import { Auth, GoogleAuthProvider, signInWithRedirect } from '@angular/fire/auth';
// import { Auth } from '@angular/fire';
// import { auth } from 'firebase/app';
// import {  getAuth,signInWithRedirect , signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { GoogleAuthProvider } from "firebase/auth";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {

  constructor(
    // private afAuth: Auth

  ) { }

  // login() {
  //   // signInWithRedirect(this.afAuth, new GoogleAuthProvider());
  //   const auth = getAuth();
  //   const provider = new GoogleAuthProvider();
  //   auth.languageCode = 'it';
  //   provider.setCustomParameters({
  //     'login_hint': 'user@example.com'
  //   });
  //   signInWithPopup(auth, provider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential:any = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });
  // }

  loginWithGoogle() {
    // const auth = getAuth();
    // const provider = new GoogleAuthProvider();
    // signInWithRedirect(auth, provider);
    // this.afAuth.signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     // Login successful
    //   })
    //   .catch((error) => {
    //     // An error occurred
    //   });
  }
}
