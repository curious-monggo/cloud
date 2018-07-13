import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';

/**
 * Generated class for the ProgramsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programs',
  templateUrl: 'programs.html',
})
export class ProgramsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public browserTab: BrowserTab
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramsPage');
  }

  openBrowserTab(){
    this.browserTab.isAvailable()
    .then(isAvailable => {
      if (isAvailable) {
        this.browserTab.openUrl('https://www.sti.edu/programs-details.asp?procode=3');
      } else {
        // open URL with InAppBrowser instead or SafariViewController
      }
    });
  }

}
