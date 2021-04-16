import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit-stream',
  templateUrl: './edit-stream.component.html',
  styleUrls: ['./edit-stream.component.css']
})
export class EditStreamComponent implements OnInit {

    form : FormGroup;
    consoles : string [] = ["nintendo", "sony", "microsoft", "pc", "mobile", "classic"]

    constructor(
      @Inject(MAT_DIALOG_DATA) data: any,
      private dialogRef : MatDialogRef<EditStreamComponent>,
      private fb: FormBuilder,
      private firebaseService : FirebaseService,
  
      ) {
        console.log(data)
  
      this.form = this.fb.group({
        title: ['', Validators.required],
        creator: [ localStorage.getItem('username')],
        description: [''],
        body: ['', Validators.required],
  
        images: this.fb.array([]),
        links: this.fb.array([]),
        misc: this.fb.array([]),
  
  
  
        created : [],
        category : [],
        tags: this.fb.array([]),
      })
     }
  
    ngOnInit(): void {
    }
  
    save() {
      // I think what we want to do is call the respecitve service...
      this.dialogRef.close(this.form.value);
    }
  
    update() {
  
    }
  
    reset() {
      this.form.reset()
    }
  
}
