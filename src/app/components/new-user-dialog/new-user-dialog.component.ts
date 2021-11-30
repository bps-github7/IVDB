import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-new-user-dialog',
  templateUrl: './new-user-dialog.component.html',
  styleUrls: ['./new-user-dialog.component.sass']
})


export class NewUserDialogComponent implements OnInit {
  /**
   * For gathering initially user preferences.
   * Will ask user a few questions after their first login
   * which will inform preference gathering for future logins.
   */
  googleUser : boolean = false;
  newUserPreferences = {
    setPreferencesNow: '',
    preferences : {
      currentlyPlaying: '',
      favoriteGame: '',
      consolesOwned: '',
      categories : '',
      creators: '',
      consoleMakers : ''
    },
    remindMe : '',
    setReminder: '',
    setNewDisplayName : false,
    newDisplayName: ''

  }


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef : MatDialogRef<NewUserDialogComponent>,
    ) { }

  ngOnInit(): void {
    if (this?.data) {
      this.googleUser = this?.data?.googleUser
    }
  }

  submitPreferences() {
    this.dialogRef.close(this.newUserPreferences)
  }
}
