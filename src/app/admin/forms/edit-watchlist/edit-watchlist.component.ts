import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-watchlist',
  templateUrl: './edit-watchlist.component.html',
  styleUrls: ['./edit-watchlist.component.css']
})
export class EditWatchlistComponent implements OnInit {

    form : FormGroup;
    //select a theme to add it to 'tags'
    themes : string [] = ["upcoming", "recent", "admin-reccomended", "mod-reccomended", "throwback", "classic", "game-changing", "relevant"]

  constructor(private fb : FormBuilder) {
    this.form = this.fb.group({
        title : [''],
        description : [''],
        games : fb.array([]),
        tags : ['']
    })

   }

  ngOnInit(): void {
  }

  reset() {

  }

}
