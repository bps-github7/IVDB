import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'ivdb';
    
    constructor(private router : Router,
      private dialog : MatDialog) {
      let returnUrl = localStorage.getItem('returnUrl');
      this.router.navigateByUrl(returnUrl);
    }  

    openDialog() {
      
    }
}
