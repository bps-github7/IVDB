import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-stream',
  templateUrl: './edit-stream.component.html',
  styleUrls: ['./edit-stream.component.css']
})
export class EditStreamComponent implements OnInit {

    form : FormGroup;
    consoles : string [] = ["nintendo", "sony", "microsoft", "pc", "mobile", "classic"]

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

}
