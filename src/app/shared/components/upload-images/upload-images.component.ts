import { Component } from '@angular/core';

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



  files: File[] = [];

  //for saving the downloadURL to database
  upload(event$) {
    console.log(`successfully uploaded file with name: ${event$.name} and url: ${event$.downloadURL}`);
  }

  //erase the file from files array
  // to get rid of the upload-task component for that file.
  delete(fileName) {
    for (let i = 0; i < this.files.length; i++) {
      if (this.files[i] == fileName)
        this.files.splice(i,1);
    }
    //TODO: trigger re-render of div at bottom of page so its up to date
    console.log(this.files)
  }



  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
  }
}
