import { InjectionToken } from '@angular/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export const DIALOG_DATA = new InjectionToken('DIALOG_DATA')


@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.sass']
})


export class NewUserDialogComponent implements OnInit {

  // immediatePreferences: string
  // preferences : any={}
  googleUser : boolean = false;
  // displayNamePreference: Boolean = false;



  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef : MatDialogRef<NewUserDialogComponent>
    ) {
      // possible this here is the issue
      if (data) {
        this.googleUser = data.googleUser
      }
     }

  ngOnInit(): void {
    
  }

  submitPreferences(newUser : any) {
    console.log(newUser)
  }

}
