import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  buildInfo: {};
  initialState: {};
  controls: any;
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) data: any,
  private dialogRef : MatDialogRef<DialogComponent>,
  private fb : FormBuilder) {
    this.buildInfo = Object.values(data.buildInfo);
    this.initialState = data.initialState;

  }

  // this is certainly not an ideal way to do this!



  ngOnInit(): void { 
    

    this.form = this.fb.group(this.initialState) }
    
  save() {
    // where uid is anything else u need to return 
    // const returnValue = { uid: this.docUid, ...this.form.value }
    this.dialogRef.close(this.form.value);
  }

  reset() {
    this.form.reset();
  }
}