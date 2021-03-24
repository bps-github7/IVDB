import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponents, ProfileRoutingModule } from './profile.routing';
import { BrowseProfilesComponent } from './browse-profiles/browse-profiles.component';
import { CompositeModule } from '../composite/composite.module';



@NgModule({
  declarations: [BrowseProfilesComponent, ProfileComponents],
  imports: [
    ProfileRoutingModule,
    CompositeModule
  ]
})
export class ProfileModule { }
