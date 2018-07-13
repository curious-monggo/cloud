import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  displayName = this.authProvider.displayName;
  photoURL = this.authProvider.photoURL;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public app: App
  ) {
  }

  signOut(){
    this.authProvider.signOut();
    this.app.getRootNav().setRoot('LoginPage');
    // this.navCtrl.setRoot('LoginPage');

  }

}
