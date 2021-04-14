import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-contributions',
  templateUrl: './edit-contributions.component.html',
  styleUrls: ['./edit-contributions.component.css']
})
export class EditContributionsComponent implements OnInit {

    form: any;
    selected : string;

  constructor(
    private route : ActivatedRoute,
    private fb : FormBuilder) {

        this.form = fb.group({
            type : ['']
        })
     }

  ngOnInit(): void {
  }

}
