import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import * as firebase from 'firebase';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	ref;
	name;
	newmessage;
	messagesList;
  constructor(public navCtrl: NavController, public alert: AlertController) {
  	this.ref = firebase.database().ref('messages');
  }
  ionViewDidLoad(){
  	// Presenting popup
  	this.alert.create({
  		title:'Username',
  		inputs:[{
  			name:'username',
  			placeholder: 'username'
  		}],
  		buttons:[{
  			text: 'Continue',
  			handler: username =>{
  				this.name = username
  			}
  		}]
  	}).present();

  	//reading data from firebase
  	this.ref.on('value',data => {
  		let tmp = [];
  		data.forEach( data => {
  			tmp.push({
  				key: data.key,
  				name: data.val().name,
  				message: data.val().message
  			})
  		});
  		this.messagesList = tmp;
  	});
  }
  send(){
  	// add new data to firebase
  	this.ref.push({
  		name: this.name.username,
  		message: this.newmessage
  	});
  }

}
