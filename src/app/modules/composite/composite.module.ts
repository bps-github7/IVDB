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
import { GameCardComponent } from './display/game-card/game-card.component';
import { DisplayAverageRatingComponent } from './display/display-average-rating/display-average-rating.component';
import { DisplayRatingComponent } from './display/display-rating/display-rating.component';
import { DisplayReviewComponent } from './display/display-review/display-review.component';

/* 
Composite is a shared module for simplifying the imports to the other feature modules
IT contains components that are used throughout the site and do not belong to a sepcific functional area.
 */
@NgModule({
  declarations: [
    DisplayAverageRatingComponent,
    DisplayRatingComponent,
    DisplayReviewComponent,
    CarouselComponent,
    CommentSectionComponent,
    ZippyComponent,
    DropdownComponent,
    FavoriteComponent,
    HomeComponent,
    NotFoundComponent,
    SearchComponent,
    GameCardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
],
  exports : [
    DisplayAverageRatingComponent,
    DisplayRatingComponent,
    DisplayReviewComponent,
    CarouselComponent,
    CommentSectionComponent,
    ZippyComponent,
    DropdownComponent,
    FavoriteComponent,
    HomeComponent,
    NotFoundComponent,
    SearchComponent,
    CommonModule,
    GameCardComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CompositeModule { }
