import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {


    form: FormGroup;
    categories: string [] = ["game","console","culture","misc"];


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
