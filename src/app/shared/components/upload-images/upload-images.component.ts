import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
/* 
Note: credit for the following
goes to Jeff from Fireship 

-upload-images.component
-upload-task.component
-dropzone.directive

https://angularfirebase.com/lessons/firebase-storage-with-angularfire-dropzone-file-uploader/) 
 */
export class UploadImagesComponent {

  isHovering: boolean;


  // toggle loading whenever doing an upload
  @Output() loading = new EventEmitter<boolean>();
  @Output() uploadEvent = new EventEmitter<any []>();
  @Output() deleteEvent = new EventEmitter<any []>();
  files: File[] = [];
  successfullyUploaded: {downloadURL : string, path : string, name : string} [];


  //for saving the downloadURL to database
  upload(event$) {
    this.uploadEvent.emit(event$);
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    this.loading.emit(true)
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
    this.loading.emit(false);

    // really this should happen if a user de selects the component
  }

  delete(fileName) {
    /* 
    upload-task.delete(uid)
    handles removing from storage,
    
    so here we just need to get the record
    of the upload out of the files array. */
    for (let i = 0; i < this.files.length; i++) {
      if (this.files[i].name == fileName)
        this.files.splice(i,1);
    }

  }
}
