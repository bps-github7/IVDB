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

import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './components/dialog/dialog.component';
import { MultiSelectChipsComponent } from './components/multi-select-chips/multi-select-chips.component';


@NgModule({
  declarations: [
    FavoriteComponent,
    SearchComponent,
    ZippyComponent,
    ReactiveFormControlComponent,
    MatDataTableComponent,

    // pipes

    // directives 
    // DisableControlDirective,
    // DropzoneDirective,

    // MatDialogComponent,
    DialogComponent,
    MultiSelectChipsComponent

],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule, 
    MatTooltipModule,
    MatSlideToggleModule,
    // MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FavoriteComponent,
    SearchComponent,
    ZippyComponent,
    ReactiveFormControlComponent,
    MatDataTableComponent,
 
		MatIconModule,
    MatTableModule, 
    MatTooltipModule,
    MatSlideToggleModule,
    // MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatProgressBarModule,
    MatSelectModule,
    MatCheckboxModule
    // pipes

    // directives 
    // DisableControlDirective,
    // DropzoneDirective
  ]
})
export class SharedModule { }
