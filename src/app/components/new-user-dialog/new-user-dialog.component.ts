import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
