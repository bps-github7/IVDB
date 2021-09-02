import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
	user : firebase.User;

  constructor(private afAuth : AngularFireAuth) { }

  ngOnInit(): void {
		this.afAuth.authState.subscribe(user => this.user = user);
  }

}
