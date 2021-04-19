import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Component, Input, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  @Input() mode : string = 'single'; 
  @Input() label : string;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;


  //for storing 
  uploaded: { downloadURL : string, uploadPercentage : number } [];

  file : any;

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  uploadImagesArray() {

  }
  
  upload(file) {
    // this.id = Math.random().toString(36).substring(2);
    
    const folder = this.mode == 'single' ? 'titleCardImages' : 'contentImages' 


    const filePath = `${folder}/${file.name}`;
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file)
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
    )
    .subscribe(() => {
    // what to do here is the question. we need to emit two differt values over time
    // uploadPercent and downloadURL
    })
    }







  

  // useStorage(uploadForm : any) {
  //   this.handleUploads(uploadForm)
  // }


  delete(downloadUrl) {
    //TODO: do we need to call afStorag.storage?
    return this.afStorage.storage.refFromURL(downloadUrl).delete();
  }
}
