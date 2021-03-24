import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './modules/composite/misc/home/home.component';
import { NotFoundComponent } from './modules/composite/misc/not-found/not-found.component';
import { SearchComponent } from './modules/composite/misc/search/search.component';
import { DropdownComponent } from './modules/composite/misc/dropdown/dropdown.component';
import { ZippyComponent } from './modules/composite/display/zippy/zippy.component';
import { CarouselComponent } from './modules/composite/display/carousel/carousel.component';
import { CommentSectionComponent } from './modules/composite/display/comment-section/comment-section.component';
import { FavoriteComponent } from './modules/composite/misc/favorite/favorite.component';


const routes: Routes = [ 
    //routes asscesible to annoymous users
    //temporarily swapped this for learning css. conveninece.
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '**', component: NotFoundComponent }

    
];
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})

export class AppRoutingModule { }