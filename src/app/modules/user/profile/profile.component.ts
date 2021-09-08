import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

import firebase from 'firebase';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
	user : firebase.User;


  constructor(
		private afAuth : AngularFireAuth) { }


	// is there a more centralized way to store the authenticated user 
  ngOnInit(): void {
		this.afAuth.authState.subscribe(user => this.user = user);
	}

	logOut() {
		this.afAuth.signOut()
	}

}
