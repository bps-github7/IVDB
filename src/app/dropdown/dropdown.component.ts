import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../common/services/auth.service';

import { User } from '../models/user';


@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
    appUser : User;

    constructor(private auth : AuthService) { 
        auth.appUser$
            .subscribe(appUser => this.appUser = appUser);
    }

    logout() { this.auth.logout(); }
}
