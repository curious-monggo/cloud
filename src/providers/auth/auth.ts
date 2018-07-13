import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  uid;
  displayName;  
  email;
  photoURL;


  loginSuccess:boolean;
  constructor(
    private afAuth: AngularFireAuth,
    private fb: Facebook, 
    private platform: Platform
    //public navCtrl: NavController
  ) {
    this.checkAuthState();
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.uid = user.uid;
      this.displayName = user.displayName;  
      this.email = user.email;  
      this.uid = user.uid;
      console.log('galing auth '+this.uid)
      this.photoURL = user.photoURL; 
      // this.checkAuthState();   
    });
  }
  
  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }
  }
  
  signOut() {
    this.afAuth.auth.signOut();

  }
  checkAuthState(){
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');
        this.loginSuccess = true;
      } else {
        console.log('user not logged in');
        this.loginSuccess = false;
      }
    });
  }

}
