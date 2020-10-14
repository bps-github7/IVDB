import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdf-multi-form-control',
  templateUrl: './tdf-multi-form-control.component.html',
  styleUrls: ['./tdf-multi-form-control.component.css']
})
export class TdfMultiFormControlComponent implements OnInit {

    contents = []


  constructor() { }

  ngOnInit(): void {
  }

  delete(i) {
      this.contents.splice(i, 1);
  }

  add(item) {
    this.contents.push(item)
  }

  

}
