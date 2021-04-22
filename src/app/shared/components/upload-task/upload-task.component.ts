import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit {

/* 
Component for managing the state of an image upload to firebase storage.
allowing users to pause, resume or cancle upload, while presenting upload percentage
and file name when finished
 */
  @Input() file: File;

  // good practice would be to override this default. something like: images/content/news/news.title
  @Input() folder: string = "images";

  // for emitting the download URL to parent form
  @Output() uploadEvent = new EventEmitter<{downloadURL : string, path : string, name : string}>();
  @Output() deleteEvent = new EventEmitter<string>();


  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() { 
    this.startUpload();
  }

  delete(downloadUrl) {
    this.deleteEvent.emit(downloadUrl);
  }

  startUpload() {
    /* The path to location in storage. by default, stores in a folder called 'images' */
    const path = `${this.folder}/${this.file.name}`;
    
    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.uploadEvent.emit({
          "downloadURL" : this.downloadURL,
          "path" : path,
          "name": this.file.name });
      }),
    );
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
