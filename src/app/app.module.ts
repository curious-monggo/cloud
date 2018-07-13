import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirestoreProvider } from '../providers/firestore/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyATPIxkfOU5YK83yeND4tTAkt1gZNuPqew",
  authDomain: "learnfirebase-c6088.firebaseapp.com",
  databaseURL: "https://learnfirebase-c6088.firebaseio.com",
  projectId: "learnfirebase-c6088",
  storageBucket: "learnfirebase-c6088.appspot.com",
  messagingSenderId: "134131666319"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirestoreProvider
  ]
})
export class AppModule {}
