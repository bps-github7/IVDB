import { Component, OnInit } from '@angular/core';
import { AuthService } from './common/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './common/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
    title = 'ivdb';

    // question for stacksexchange- why can i only access typescript properties declared with access modifier in constrc?
    // ie - when router is declared `router : Router` i cant acess it as this.router, only when its `private router : Router`
    constructor(private auth : AuthService, private router : Router, private userService : UserService) {
        auth.user$.subscribe(user => {
            if (user) {
                //this line below should be in create_account and other components where user updates profile (maybe | prob not).
                userService.save(user);
                let returnUrl = localStorage.getItem('returnUrl');
                router.navigateByUrl(returnUrl);
            }
        })
    }

    // This does the OPPOSITE of what you want!!
    // ngOnInit() {
    //     this.router.navigate([''])
    // }
}
