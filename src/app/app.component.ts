import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'ivdb';
    
    constructor(private router : Router) {
      let returnUrl = localStorage.getItem('returnUrl');
      this.router.navigateByUrl(returnUrl);
    }  

}
