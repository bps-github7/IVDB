import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PanelComponent } from './components/panel/panel.component';
import { SearchComponent } from './components/search/search.component';
import { ZippyComponent } from './components/zippy/zippy.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableControlDirective } from './directives/disable-control.directive';
import { ReactiveSelectFormControlComponent } from './components/reactive-select-form-control/reactive-select-form-control.component';
import { ReactiveDefaultFormControlComponent } from './components/reactive-default-form-control/reactive-default-form-control.component';
import { ReactiveTextareaFormControlComponent } from './components/reactive-textarea-form-control/reactive-textarea-form-control.component';
import { ReactiveFormControlComponent } from './components/reactive-form-control/reactive-form-control.component';
import { AdminAuthGuard } from '../services/admin-auth-guard.service';
import { AuthGuard } from '../services/auth-guard.service';
import { ServicesModule } from '../services/services.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { ContentDropdownComponent } from './components/content-dropdown/content-dropdown.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { MatDataTableComponent } from './components/mat-data-table/mat-data-table.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import { MatDialogComponent } from './components/mat-dialog/mat-dialog.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';

//angular material imports:
import {MatButtonToggleModule} from '@angular/material/button-toggle';
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
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    CarouselComponent,
    FavoriteComponent,
    SearchComponent,
    ZippyComponent,
    PanelComponent,
    ReactiveDefaultFormControlComponent,
    ReactiveSelectFormControlComponent,
    ReactiveTextareaFormControlComponent,
    ReactiveFormControlComponent,
    ContentDropdownComponent,
    MatDataTableComponent,

    UploadImageComponent,
    UploadImagesComponent,
    UploadTaskComponent,
    // pipes

    // directives 
    DisableControlDirective,
    DropzoneDirective,

    MatDialogComponent,
    ImageUploaderComponent,
    DialogComponent

],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule, 
    MatTooltipModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatProgressBarModule,
    MatSelectModule
  ],
  providers: [
      AuthGuard,
      AdminAuthGuard,
      ServicesModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,CarouselComponent,
    FavoriteComponent,
    SearchComponent,
    ZippyComponent,
    PanelComponent,
    ReactiveDefaultFormControlComponent,
    ReactiveSelectFormControlComponent,
    ReactiveTextareaFormControlComponent,
    ReactiveFormControlComponent,
    ContentDropdownComponent,
    MatDataTableComponent,
    
    UploadImageComponent,
    UploadImagesComponent,
    UploadTaskComponent,
    // pipes

    // directives 
    DisableControlDirective,
    
    DropzoneDirective
  ]
})
export class SharedModule { }
