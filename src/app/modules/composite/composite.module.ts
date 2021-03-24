import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './display/carousel/carousel.component';
import { CommentSectionComponent } from './display/comment-section/comment-section.component';
import { ZippyComponent } from './display/zippy/zippy.component';
import { DropdownComponent } from './misc/dropdown/dropdown.component';
import { FavoriteComponent } from './misc/favorite/favorite.component';
import { HomeComponent } from './misc/home/home.component';
import { NotFoundComponent } from './misc/not-found/not-found.component';
import { SearchComponent } from './misc/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* 
Composite is a shared module for simplifying the imports to the other feature modules
IT contains components that are used throughout the site and do not belong to a sepcific functional area.
 */
@NgModule({
  declarations: [
    CarouselComponent,
    CommentSectionComponent,
    ZippyComponent,
    DropdownComponent,
    FavoriteComponent,
    HomeComponent,
    NotFoundComponent,
    SearchComponent 
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule
],
  exports : [
    CarouselComponent,
    CommentSectionComponent,
    ZippyComponent,
    DropdownComponent,
    FavoriteComponent,
    HomeComponent,
    NotFoundComponent,
    SearchComponent,
    CommonModule,
    FormsModule
  ]
})
export class CompositeModule { }
