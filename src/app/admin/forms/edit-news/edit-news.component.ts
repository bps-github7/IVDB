import { ThrowStmt } from '@angular/compiler';
import { Component, InjectionToken, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from 'src/app/models/content/content';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NewsService } from 'src/app/services/news.service';

// how we define our own Injection Token
// export const DIALOG_DATA = new InjectionToken('DIALOG_DATA');
// then in admin.module providers : { provide: DIALOG_DATA, useValue : {} }


@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  form: FormGroup;
  categories: string [] = ["game","console","culture","misc"];
  initialState = {
        title: ['', Validators.required],
        creator: [localStorage.getItem('username'), Validators.required],
        description: [''],
        body: ['', Validators.required],
        images: this.fb.array([]),
        links: this.fb.array([]),
        misc: this.fb.array([]),
        created : [''],
        category : [''],
        tags: this.fb.array([]),
      };
  editingDoc: Content;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef : MatDialogRef<EditNewsComponent>,
    private fb: FormBuilder,
    private firebaseService : FirebaseService,
    ) {
      if (data) {
        this.editingDoc = data;
      }
      
   }

  ngOnInit(): void {
    // old approach: 
  this.form = this.fb.group(this.initialState)
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

  delete(uid : string) {
    if (confirm('Are you sure you want to delete this news piece?')) {
      // this.NewsService.delete(uid)

      // emit deleteEvent
    }
  }

}
