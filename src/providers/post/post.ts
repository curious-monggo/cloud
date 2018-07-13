import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Post } from './../../models/Post';
import { UserProvider } from '../user/user';
/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {
	postsRef: AngularFireList<any>;
	posts: Observable<Post[]>;//added client model

	//object variables
	postRef: AngularFireObject<any>;
  post: Observable<Post>;
  constructor(
    public db: AngularFireDatabase,
    public userProvider: UserProvider
  ) {

    // this.postRef = db.object('posts/');
    // this.post = this.postRef.valueChanges();

    this.postsRef = db.list('posts');
    //use snapshot changes.map to store key
    this.posts = this.postsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }
  getPosts(){
  	return this.posts;
  }
  getPost(id:string){
    this.postRef = this.db.object('/posts/'+id);
    this.post = this.postRef.valueChanges();
  	return this.post;
  }
  addPost(post:Post){
    this.postsRef.push(post);
  }

}
