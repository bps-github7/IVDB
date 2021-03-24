import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile.routing';
import { BrowseProfilesComponent } from './browse-profiles/browse-profiles.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { CobtributionsComponent } from './cobtributions/cobtributions.component';



@NgModule({
  declarations: [BrowseProfilesComponent, PreferencesComponent, CobtributionsComponent],
  imports: [
      ProfileRoutingModule,
    CommonModule
  ]
})
export class ProfileModule { }
