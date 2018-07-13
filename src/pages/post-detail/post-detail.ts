import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Post } from '../../models/Post';
import { PostProvider } from '../../providers/post/post';

/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html',
})
export class PostDetailPage {
  id;
  post:Post;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public postProvider: PostProvider
  ) {

  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    console.log(this.id+'success?');
    this.getPost();
  }
  getPost(){
    // this.postProvider.getPost(this.id);
    this.postProvider.getPost(this.id).subscribe(p =>{
      this.post = p;
      console.log(p);
    });
  }


}
