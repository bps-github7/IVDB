import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';


@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

    user$: Observable<firebase.User>;

    constructor(private afAuth : AngularFireAuth) { 
        this.user$ = afAuth.authState
    }


    logout() {
        this.afAuth.signOut();
    }
}
