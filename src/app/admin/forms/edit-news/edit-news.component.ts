import { AngularFireStorage } from '@angular/fire/storage';
import { Component, InjectionToken, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  form: FormGroup;
  categories: string [] = ['game','console','culture','misc'];
  initialState = {
        title: ['', Validators.required],
        creator: [localStorage.getItem('username'), Validators.required],
        description: [''],
        body: ['', Validators.required],
        titleCardImage: [''],
        images: this.fb.array([]),
        links: this.fb.array([]),
        misc: this.fb.array([]),
        createdAt : [''],
        updatedAt : [''],
        category : ['news'],
        tags: this.fb.array([]),
      };
  docUid : string;
  //these should disable the submit button if set to true
  titleCardLoading : boolean = false;
  imagesLoading : boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef : MatDialogRef<EditNewsComponent>,
    private fb: FormBuilder,
    private storage : AngularFireStorage,
    private firebaseService : FirebaseService,
    ) {
      if (data) {
        this.docUid = data?.uid;

        //set the initial state to contain the object we want to edit
        this.initialState = {
          title: [data?.title, Validators.required],
          creator: [localStorage.getItem('username'), Validators.required],
          description: [data?.description],
        //  TODO: implement these later. have to be in the intial state for the form to work..
          body: [data?.body, Validators.required],
          titleCardImage : [data?.titleCardImage],
          images: this.fb.array(data?.images),
          links: this.fb.array(data?.links),
          misc: this.fb.array(data?.misc),
          // dont need this form controls here since user wont ever edit them
          createdAt : [data?.createdAt],
          updatedAt: [data?.updatedAt],
          category : ['news'],
          tags: this.fb.array(data?.tags),
        }
    }}

  ngOnInit(): void { this.form = this.fb.group(this.initialState) }
  
  /* 
  Giving file a default value allows us to delete titleCard
  from form should no file be passed in
   */
  setTitleCard(file = '') {
    this.form.patchValue({titleCardImage : file});
  }

  // deleteTitleCard() {
  //   this.form.patchValue({titleCardImage : ''});
  // }

  addTag(tag) {

  }

  // TODO: upload-images needs to emit a new list of uploaded images every time it deletes one
  // then when the deleteEvent is emitted, re save the list

  setImages(file) {
    // console.log(files);
    // const currentImages = "bikini bitch"
    // currentImages.push(file)

    // is this the problem?
    this.images.value.push(file);
    // console.log(file);
    // this.form.patchValue({images : "bikini bitch!"})
  }

  get titleCardImage() {
    return this.form.get('titleCardImage');
  }

  get images() {
    return this.form.get('images');
  }

  

  //methods triggered by using the buttons in mat-dialog-actions
  
  save() {
    const returnValue = {uid : this.docUid, ...this.form.value}
    this.dialogRef.close(returnValue);    
    /* 
    you could also use this as an attribute instead of writing a method...
    [mat-dialog-close]='form.value' */
  }

  reset() {
    this.cleanStorage();
    this.form.reset();
  }

  cleanStorage() {
    // gets rid of images in storage from current upload, should the user close the form.
    if (this.titleCardImage.value) {
      this.deleteFromStorage(this.titleCardImage.value.downloadURL);
      console.log("titleCard successfully deleted!")
    }
    if (this.images.value.length) {
      for(let i = 0; i < this.images.value.length; i++)
        this.deleteFromStorage(this.images.value[i].downloadURL)
      console.log('all images successfully deleted!')
      }
    
  }

  // this one is a helper for above cleanStorage.
  deleteFromStorage(url) {
    this.storage.storage.refFromURL(url).delete();
  }

}