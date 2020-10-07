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
export class DropdownComponent implements OnInit {
    appUser : User;

    constructor(private auth : AuthService) { 
        this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    }

    ngOnInit() {
        
    }

    logout() { this.auth.logout(); }
}
