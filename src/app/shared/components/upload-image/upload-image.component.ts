import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {


  @Input() label : string = "Enter a title card image"
  @Input() folder : string = 'titleCardImages'

  file : File;
  @Output() loading = new EventEmitter<boolean>();
  @Output() deleteEvent = new EventEmitter<any>();
  @Output() uploadEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  upload(event) {
    this.loading.emit(true); 
    // so the upload-task doesnt start before we have a folder name provided.
    this.file = event.target.files[0];
    
  }

  delete() {
    this.file = null;
    this.deleteEvent.emit();
  }

  save(event) {
    this.uploadEvent.emit(event);
  } 
}
