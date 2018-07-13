import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  NavParams,
  Loading, 
  LoadingController, 
  AlertController, 
  Alert
} from 'ionic-angular';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { FirestoreProvider } from './../../providers/firestore/firestore';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {

  public createSongForm: FormGroup;//form we are creating

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firestoreProvider: FirestoreProvider,
    formBuilder: FormBuilder
  ) {
    this.createSongForm = formBuilder.group({
      albumName: ['', Validators.required],
      artistName: ['', Validators.required],
      songDescription: ['', Validators.required],
      songName: ['', Validators.required],  
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  createSong() :void{
    const loading: Loading = this.loadingCtrl.create();
    loading.present();

    const albumName = this.createSongForm.value.albumName;
    const artistName = this.createSongForm.value.artistName;
    const songDescription = this.createSongForm.value.songDescription;
    const songName = this.createSongForm.value.songName;

    this.firestoreProvider
      .createSong(albumName, artistName, songDescription, songName)
      .then(
        () => {
          loading.dismiss().then(() => {
            this.navCtrl.pop();
          });
        },
        error => {
          loading.dismiss().then(() => {
            const alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel'}],
            });
            alert.present();
          });
        }
      )
  }

}
