import { CustomFormControlsModule } from './custom-form-controls/custom-form-controls.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthGuard } from '../common/services/auth-guard.service';
import { AdminAuthGuard } from '../common/services/admin-auth-guard.service';
import { ServicesModule } from '../common/services/services.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PanelComponent } from './components/panel/panel.component';
import { SearchComponent } from './components/search/search.component';
import { ZippyComponent } from './components/zippy/zippy.component';
import {  } from './custom-form-controls/custom-form-controls.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CarouselComponent,
    DropdownComponent,
    FavoriteComponent,
    HomeComponent,
    NotFoundComponent,
    SearchComponent,
    ZippyComponent,
    PanelComponent,

    // pipes

    // directives 
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
    DropdownComponent,
    FavoriteComponent,
    HomeComponent,
    NotFoundComponent,
    SearchComponent,
    ZippyComponent,
    PanelComponent,
  ]
})
export class SharedModule { }
