import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from './common/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './common/services/user.service';
import * as firebase from 'firebase';
import { ProfileService } from './common/services/profile.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


export interface Item { name: string, skone_id : number }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'ivdb';

    //would be helpful if this could cast to User.
    user: any;
    displayName;
    private itemsCollection: AngularFirestoreCollection<Item>;
    items: Observable<Item[]>;
    

    constructor(
        private auth : AuthService,
        private router : Router,
        private userService : UserService,
        private route: ActivatedRoute,
        private profileService : ProfileService,
        private afs : AngularFirestore
        ) {
            this.itemsCollection = afs.collection<Item>('items');
            this.items = this.itemsCollection.valueChanges();
        this.auth.user$.subscribe(user => {
            if (user) {
                this.user = user;
                //saves the most recent user date to db
                this.userService.save(user);
                let returnUrl = localStorage.getItem('returnUrl');
                this.router.navigateByUrl(returnUrl);
            }
        });
        //retrieveing the current user profile should happen here in app.component!
    }

    // This does not do what you want it to do!!
    // ngOnInit() {
    //     this.router.navigate([this.router.url])
    // }   
}
