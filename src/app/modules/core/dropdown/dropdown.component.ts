import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { AuthService } from '../../core/auth.service';
import { User } from 'src/app/models/user/user';



@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class DropdownComponent implements OnInit {
    appUser : User;

    // constructor(private auth : AuthService) { 
    //     this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    // }


		constructor() { }

    ngOnInit() { }

    logout() { console.log("loging you out") }
		// logout() { this.auth.logout(); }
}
