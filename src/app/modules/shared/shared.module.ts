import { SharedStoreModule } from './shared.index';
import { DisplayNameUniqueService } from './validators/display-name-unique.service';
import { uniqueDisplayNameValidator } from './validators/display-name-unique.validators';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SearchComponent } from './components/search/search.component';
import { ZippyComponent } from './components/zippy/zippy.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DisableControlDirective } from './directives/disable-control.directive';
import { ReactiveFormControlComponent } from './components/reactive-form-control/reactive-form-control.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { MatDataTableComponent } from './components/mat-data-table/mat-data-table.component';
// import { DropzoneDirective } from './directives/dropzone.directive';

import { DialogComponent } from './components/dialog/dialog.component';
import { MultiSelectChipsComponent } from './components/multi-select-chips/multi-select-chips.component';
import { CrudHubComponent } from './components/crud-hub/crud-hub.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MaterialModule } from './material/material.module';
import { ReactiveAsyncFormControlComponent } from './components/reactive-async-form-control/reactive-async-form-control.component';
import { ConnectFormDirective } from './directives/connect-form.directive';
// import { DisplayNameUniqueValidationDirective } from './directives/display-name-unique-validation.directive';

@NgModule({
  declarations: [
    FavoriteComponent,
    SearchComponent,
    ZippyComponent,
    ReactiveFormControlComponent,
    MatDataTableComponent,
		DialogComponent,
    MultiSelectChipsComponent,
    CarouselComponent,
		CrudHubComponent,
		ReactiveAsyncFormControlComponent,

		
		// uniqueDisplayNameValidator,
		// pipes

    // directives     
		ConnectFormDirective,
		// DisplayNameUniqueValidationDirective,
		// DisableControlDirective,
    // DropzoneDirective,
    
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
		//basically just User reducer + effect since we need that in create-account
		SharedStoreModule
  ],
  providers: [
		DisplayNameUniqueService
	],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FavoriteComponent,
    SearchComponent,
    ZippyComponent,
    ReactiveFormControlComponent,
    MatDataTableComponent,
 
		//for testing only
		CrudHubComponent,
    CarouselComponent,
		MaterialModule,
		// pipes

    // directives 
    // DisableControlDirective,
    // DropzoneDirective
		ConnectFormDirective
  ]
})
export class SharedModule { }
