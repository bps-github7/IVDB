import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.sass']
})
export class ProfileEditorComponent implements OnInit {

	form : FormGroup;

  constructor() { }

  ngOnInit(): void {
		this.form = new FormGroup({
			nickname : new FormControl(null)
		});
  }

	saveProfile() {
		console.log(this.form.value);
	}

}
