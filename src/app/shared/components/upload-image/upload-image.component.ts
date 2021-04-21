import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent implements OnInit {


  
  @Input() label : string = "Enter a title card image"
  @Input() folder : string = 'titleCardImages'
  @Input() editing : any;

  file : File;
  display : any;
  @Output() loading = new EventEmitter<boolean>();

  @Output() deleteEvent = new EventEmitter<any>();
  @Output() uploadEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    if (this.editing.value) {

      //assigning to file is problematic because it
      // would trigger upload again, in theory.
      // instead, we need an input prop to upload-task,
      this.editing = this.editing.value;
    }
  }

  upload(event) {
    this.loading.emit(true); 
    // so the upload-task doesnt start before we have a folder name provided.
    this.file = event.target.files[0];
    
  }

  delete(msg = '') {
    if (msg) {
      console.log(msg);
      console.log("Need to go to the basement and get some salami- delete from storage")
    }
    this.file = null;
    this.deleteEvent.emit();
  }

  save(event) {
    this.uploadEvent.emit(event);
  } 
}
