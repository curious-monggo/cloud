import { Observable } from 'rxjs';
import { FirestoreProvider } from './../../providers/firestore/firestore';
import { Song } from './../../models/songs.interface';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public songList:Observable<Song[]>;

  constructor(
    public navCtrl: NavController,
    public firestoreProvider: FirestoreProvider
  ) {

  }

  ionViewDidLoad(){
    this.songList = this.firestoreProvider.getSongList().valueChanges();
  }

  goToCreatePage(){
    this.navCtrl.push('CreatePage');
  }

  goToDetailPage(song: Song): void{
    this.navCtrl.push('DetailPage', { song: song });
  } 
}
