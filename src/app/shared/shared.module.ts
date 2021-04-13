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

    // pipes

    // directives 
    DisableControlDirective,

    ReactiveFormControlComponent,
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
      AuthGuard,
      AdminAuthGuard,
      ServicesModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CarouselComponent,
    FavoriteComponent,
    SearchComponent,
    ZippyComponent,
    PanelComponent,
  ]
})
export class SharedModule { }
