import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreferencesService } from '../common/services/preferences.service';
import { Preferences } from '../models/user/preferences';


@Component({
  selector: 'app-edit-preferences',
  templateUrl: './edit-preferences.component.html',
  styleUrls: ['./edit-preferences.component.css']
})
export class EditPreferencesComponent implements OnInit {

    uid : any;
    preferences : any;

    constructor(private preferencesService : PreferencesService, private router : Router, private route : ActivatedRoute) {
        this.uid = this.route.snapshot.paramMap.get('uid');
        this.preferencesService.get$(this.uid).subscribe((doc) => {this.preferences = doc});


   }

  ngOnInit(): void {
  }

}
