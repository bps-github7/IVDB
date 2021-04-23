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


  delete(url='') {
    this.file = null;
    if (url) {
      this.deleteEvent.emit(url)
    } else {
      this.deleteEvent.emit();
    }
    // ensures the option to delete isnt rendered after button is clicked
    this.editing = ''; 
  }

  save(event) {
    this.file = null;
    this.uploadEvent.emit(event);
  } 
}
