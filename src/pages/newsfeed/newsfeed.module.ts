import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsfeedPage } from './newsfeed';

@NgModule({
  declarations: [
    NewsfeedPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsfeedPage),
  ],
  exports: [
    NewsfeedPage
  ]
})
export class NewsfeedPageModule {}
