import { User } from 'src/app/models/user/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

import firebase from 'firebase';
import { AuthService } from '../../core/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
	user$ : Observable<User>;


  constructor(
		private authService : AuthService) { }


	// is there a more centralized way to store the authenticated user 
  ngOnInit(): void {
		this.user$ = this.authService.getUserEntity$()
	}

	logOut() {
		this.authService.logOut()
	}

}
