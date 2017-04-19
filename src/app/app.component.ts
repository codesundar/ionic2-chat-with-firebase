import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    let config = {
      apiKey: "AIzaSyBIHFF7giweOCgKtrwecPQ3f_2xoP1-dCQ",
      authDomain: "codesundar-ionic-chat.firebaseapp.com",
      databaseURL: "https://codesundar-ionic-chat.firebaseio.com",
      projectId: "codesundar-ionic-chat",
      storageBucket: "codesundar-ionic-chat.appspot.com",
      messagingSenderId: "733908203877"
    };
    firebase.initializeApp(config);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

