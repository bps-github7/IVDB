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
  
  // Need to wait till forms submitted to delete from storage,
  // else user could cancle this form edit and downloadURL for their img would not exist.
  deleteOnSubmit: string [] = [];


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
    /* Feel like it be more responsible to give this a name like pushImage */
    
    // this good???
    this.images.value.push(file);
    
  }

  get titleCardImage() {
    return this.form.get('titleCardImage');
  }

  get images() {
    return this.form.get('images');
  }

  

  //methods triggered by using the buttons in mat-dialog-actions
  
  save() {
    const returnValue = {uid : this.docUid, urlsToDelete : this.deleteOnSubmit, ...this.form.value}    
    this.dialogRef.close(returnValue);    
  }

  reset() {
    this.deleteOnSubmit.push(this.titleCardImage.value.downloadURL)
    for (let i = 0; i < this.images.value.length; i++)
      this.deleteOnSubmit.push(this.images.value[i].downloadURL);
    this.form.reset();
  }

  cleanStorage() {
    // gets rid of images in storage from current upload, should the user close the form.
    if (this.titleCardImage.value) {
      this.deleteOnSubmit.push(this.titleCardImage.value.downloadURL);
 
      // this.deleteFromStorage(this.titleCardImage.value.downloadURL);
      console.log("titleCard successfully deleted!")
    }
    if (this.images.value.length) {
      for(let i = 0; i < this.images.value.length; i++)
        this.deleteOnSubmit.push(this.images.value[i].downloadURL);
      console.log('all images successfully deleted!')
      }
    
  }

  // this one is a helper for above cleanStorage.
  deleteFromStorage(url) {
    this.storage.storage.refFromURL(url).delete();
  }

  deleteTitleCard(url='') {
    this.setTitleCard();
    if (url) {
      this.deleteOnSubmit.push(url);   
    }
  }

  deleteImage(url) {
    /* for deleting a single image previously uploaded-
    deletes from both storage and formgroup images array */
    if (this.images.value.length === 1) {
      this.form.patchValue({images : []});
    }
    else {
      for(let i = 0; i < this.images.value.length; i++) {
        if (this.images.value[i].downloadURL === url) {
          const imgs = this.images.value;
          this.form.patchValue({images : imgs.splice(i,1)})
        }
      }
    }
    this.deleteOnSubmit.push(url)
  }
}