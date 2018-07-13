import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from './../../providers/user/user';
import { AuthProvider } from '../../providers/auth/auth';
import { PostProvider } from '../../providers/post/post';
/**
 * Generated class for the AddPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html',
})
export class AddPostPage {
  
  post = {
    uid:this.authProvider.uid,
    displayName:this.authProvider.displayName,
    photoURL:this.authProvider.photoURL,
    caption:''
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public userProvider: UserProvider,
    public postProvider: PostProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPostPage');
  }

  onSubmitPost(){
    console.log(this.post);
    this.postProvider.addPost(this.post);
    this.navCtrl.pop();
  }

}
