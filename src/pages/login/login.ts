import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserProvider } from '../../providers/user/user';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    displayName:this.authProvider.displayName,
    email:this.authProvider.email,
    photoURL:this.authProvider.photoURL
  };

  uid;
  loginSuccess;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    public userProvider:UserProvider
  ) {

  }


  ionViewWillEnter(){
        this.afAuth.authState.subscribe(res =>{
      if (res && res.uid) {
        this.getUid();
        this.goToHome();
      }
    });
   
  }

  addUser(){
    this.userProvider.addUser(this.user);
  }
  getUid(){
    this.uid = this.authProvider.uid;
    console.log('test sa login '+this.uid);
    this.userProvider.getUid(this.uid);

  }
  // ionViewDidLoad(){
  //   this.checkAuthState();
  //   console.log('sa login'+this.displayName);
  // }

  signIn(){
    this.authProvider.signInWithFacebook();
    this.loadingScreen();
  }


  // // goBackToLogin(){
  // //   this.navCtrl.setRoot('LoginPage');
  // // }

  loadingScreen(){
    let loading = this.loadingCtrl.create({
      content: 'Authenticating....'
    });

    loading.present();

    this.afAuth.authState.subscribe(res =>{
      if (res && res.uid) {
        this.welcomeUser();
        loading.dismiss();
        this.getUid();
        this.addUser();
      }
    });
  }

  checkAuthState(){
    this.afAuth.authState.subscribe(res =>{
      if (res && res.uid) {
        //this.welcomeUser();
        this.goToHome();
      }
    });
  }
  welcomeUser(){
    this.authProvider.loginSuccess = true;
    this.loginSuccess = this.authProvider.loginSuccess;

  }
  goToHome(){
    //this.navCtrl.push('NewsfeedPage');
    this.navCtrl.setRoot('TabsPage');
  }


}
