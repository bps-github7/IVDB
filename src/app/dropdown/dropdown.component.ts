import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../common/services/auth.service';
import { AppUser } from '../models/app.user';


@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
    appUser : AppUser;

    constructor(public auth : AuthService) { 
        auth.appUser$
            .subscribe(appUser => this.appUser = appUser);
    }


    logout() { this.auth.logout(); }
}
