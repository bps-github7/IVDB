import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// export const DIALOG_DATA = new InjectionToken('DIALOG_DATA')


@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.sass']
})


export class NewUserDialogComponent implements OnInit {

  googleUser : boolean = false;
  newUserPreferences = {
    setPreferencesNow: '',
    preferences : {},
    setNewDisplayName : false,
    newDisplayName: null

  }


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  ngOnInit(): void {

    if (this?.data) {
      this.googleUser = this?.data?.googleUser
    }
    console.log(this.data)

  }

  // submitPreferences(newUser : any) {
  //   console.log(newUser)
  // }

}
