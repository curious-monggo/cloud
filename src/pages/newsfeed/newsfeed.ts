import { PostProvider } from './../../providers/post/post';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Post } from '../../models/Post';

/**
 * Generated class for the NewsfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsfeed',
  templateUrl: 'newsfeed.html',
})
export class NewsfeedPage {
  displayName = this.authProvider.displayName;
  photoURL = this.authProvider.photoURL;
  posts: any[];

  paramsID: Object;
  pushToPostDetailPage: any;
  pushId:string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public postProvider: PostProvider,
    public app: App
  ) {
    this.getPosts();

  }

  navigateToDetailPage(id){


    this.app.getRootNav().push('PostDetailPage', {
      id: id
    });
/*    this.pushToDetailPage = DetailPage;
    this.paramsID = { id: id};*/
    console.log(id);
  }
  navigateToAddPostPage(){
    this.app.getRootNav().push('AddPostPage');
  }
  getPosts(){
    this.postProvider.getPosts().subscribe(p =>{
      this.posts = p;
      console.log(p);
    });
  }
  // this.courseProvider.getCourses().subscribe(c => {
  //   this.courses = c;
  //  // console.log('okay', this.courses);
  // });
  

}
