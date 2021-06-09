import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from './shared/components/dialog/dialog.component';

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
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.height = '1600px';
      dialogConfig.width = `1200px`;
      
      this.dialog.open(DialogComponent, dialogConfig);
    }
}
