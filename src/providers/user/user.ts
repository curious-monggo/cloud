import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { User } from './../../models/User';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
	//list variables
	usersRef: AngularFireList<any>;
	users: Observable<User[]>;//added client model

	//object variables
	userRef: AngularFireObject<any>;
  user: Observable<User>;
  uid;
  constructor(public db: AngularFireDatabase) {
    this.usersRef = db.list('users');
    //use snapshot changes.map to store key
    this.users = this.usersRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }
  getUsers(){
  	return this.users;
  }
  getUid(uid){
    console.log('testing '+uid);
    return this.uid = uid;
  }

  addUser(user:User){
    this.usersRef = this.db.list('users');
    // this.uid = user.uid;
    this.usersRef.update(this.uid,user);
  }

  }
