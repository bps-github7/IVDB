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
import {MatTooltipModule} from '@angular/material/tooltip'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import { MatDialogComponent } from './components/mat-dialog/mat-dialog.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';

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
    
    ImageUploaderComponent

],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule, 
    MatTooltipModule,
    MatSlideToggleModule

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
