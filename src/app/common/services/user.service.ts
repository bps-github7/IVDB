import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private db: AngularFireStorage) { }

    save(user: firebase.User) {
        //... do i need to use a promise to do this?
        // return new Promise<any> ((resolve, reject) => {
        //     this.db.upload('/users', user);
        // })
        this.db.upload('/users/', {
            name: user.displayName,
            email: user.email,
            //username: user.username
            //password: user.password
        })

        // // Mosh code
        // this.db.a  
        //   object(/users/ + user.uid).update();
  }
}
