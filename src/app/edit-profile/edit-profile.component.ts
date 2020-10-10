import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

    // just use the auth state to get user data.
    // having username in url is a n2h, non implementation detail - hadurh!

  ngOnInit(): void {
  }

}
