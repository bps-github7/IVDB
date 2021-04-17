import { FirebaseService } from './../../../services/firebase.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-watchlist',
  templateUrl: './edit-watchlist.component.html',
  styleUrls: ['./edit-watchlist.component.css']
})
export class EditWatchlistComponent implements OnInit {

    form : FormGroup;
    themes : string [] = ["upcoming", "recent", "admin-reccomended", "mod-reccomended", "throwback", "classic", "game-changing", "relevant"]
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
    docUid: string;


  constructor(
    @Inject(MAT_DIALOG_DATA) data : any,
    private dialogRef : MatDialogRef<EditWatchlistComponent>,
    // TODO: remove this if we end up doing timestamp w/ parent site-dashboard component.
    private FirebaseService : FirebaseService,
    private fb : FormBuilder) {
      if (data) {
        this.docUid = data?.uid;
        this.initialState = {
          title: [data?.title, Validators.required],
          creator: [localStorage.getItem('username'), Validators.required],
          description: [data?.description],
        //  TODO: implement these later. have to be in the intial state for the form to work..
          body: ["", Validators.required],
          images: this.fb.array([]),
          links: this.fb.array([]),
          misc: this.fb.array([]),
          created : [""],
          category : [""],
          tags: this.fb.array([]),
        }
    }
  }

  ngOnInit(): void { this.form = this.fb.group(this.initialState); }

  save() {
    const returnValue = {uid : this.docUid, ...this.form.value}
    this.dialogRef.close(returnValue);    
  }


  reset() {
    this.form.reset();
  }

}