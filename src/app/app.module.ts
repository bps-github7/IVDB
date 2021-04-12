//imports and decorators
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFirestoreModule } from '@angular/fire/firestore';




//declarations/ bootstraps
import { AppComponent } from './app.component';

// misc / composite - doesnt belong in a dedicated feature module, perhaps a shared, lazily loaded one.
import { DropdownComponent } from './dropdown/dropdown.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ZippyComponent } from './zippy/zippy.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarouselComponent } from './carousel/carousel.component';





// admin module- all things accessible only to administrators, 
import { GameComponent } from './admin/game/game.component';
import { GameFormComponent } from './admin/forms/game-form/game-form.component';
import { PostComponent } from './post/post.component';
import { DescriptorFormComponent } from './descriptor-form/descriptor-form.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ConsoleInfoFormComponent } from './admin/forms/console-info-form/console-info-form.component';
import { GameInfoComponent } from './admin/game-info/game-info.component';
import { GameInfoFormComponent } from './admin/forms/game-info-form/game-info-form.component';



// auth module - componentry related to authentication and profile 
import { SignInComponent } from './sign-in/sign-in.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// we combined profile with auth for now, for simplicity sake. less modules better while routing doesnt work fully
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditPreferencesComponent } from './edit-preferences/edit-preferences.component';




// forum module
import { ForumComponent } from './forum/forum.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';


// games module- browsing games, filtering games, searching games, viewing games
import { GamesComponent } from './games/games.component';
import { ViewGameComponent } from './view-game/view-game.component';
import { GamingIndexComponent } from './gaming-index/gaming-index.component';
import { CategoriesComponent } from './categories/categories.component';
import { CreatorsComponent } from './creators/creators.component';
import { ConsoleComponent } from './console/console.component';
import { GameCardComponent } from './game-card/game-card.component';



// content module - all things the site contains which is not user generated, such as streaming, reccomendations, news, etc
import { StreamingComponent } from './streaming/streaming.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { NewsComponent } from './news/news.component';
import { ContentDashboardComponent } from './content/content-dashboard/content-dashboard.component';
import { DisplayReviewComponent } from './display-review/display-review.component';
import { DisplayRatingComponent } from './display-rating/display-rating.component';
import { DisplayAverageRatingComponent } from './display-average-rating/display-average-rating.component';


// Inclined to remove these, but they are a good idea if they werent soo buggy and unreliable - (debug + test  | redesign -> implement)
import { ReactiveDefaultFormControlComponent } from './form-controls/reactive-default-form-control/reactive-default-form-control.component';
import { ReactiveSelectFormControlComponent } from './form-controls/reactive-select-form-control/reactive-select-form-control.component';
import { ReactiveTextareaFormControlComponent } from './form-controls/reactive-textarea-form-control/reactive-textarea-form-control.component';
import { CredentialFormControlComponent } from './form-controls/credential-form-control/credential-form-control.component';
import { DisableControlDirective } from './common/directives/disable-control.directive';
import { TdfMultiFormControlComponent } from './form-controls/tdf-multi-form-control/tdf-multi-form-control.component';

// contrib module - all things that user can create, modify delete- comments, forum posts, reviews, ratings
import { ContribDashboardComponent } from './contrib/contrib-dashboard/contrib-dashboard.component';
import { EditContributionsComponent } from './edit-contributions/edit-contributions.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { ViewRatingsComponent } from './view-ratings/view-ratings.component'; // iffy here- could be content or contrib- users can view other users ratings or reviews
import { ViewReviewsComponent } from './view-reviews/view-reviews.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { RecentlyPostedComponent } from './recently-posted/recently-posted.component';
import { ViewAllRatingsComponent } from './view-all-ratings/view-all-ratings.component';
import { ViewAllReviewsComponent } from './view-all-reviews/view-all-reviews.component';
import { ViewAllPostsComponent } from './view-all-posts/view-all-posts.component';
import { ProvideRatingComponent } from './provide-rating/provide-rating.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { SuggestNewComponent } from './suggest-new/suggest-new.component';


//environment 
import { environment } from 'src/environments/environment';



//not sure why, but these are not getting detected from our service main module.
import { AdminAuthGuard } from './common/services/admin-auth-guard.service';
import { AuthGuard } from './common/services/auth-guard.service';

// main service module
import { ServicesModule } from './common/services/services.module';
import { PlatformsComponent } from './platforms/platforms.component';
import { ViewThreadComponent } from './view-thread/view-thread.component';
import { ViewForumComponent } from './view-forum/view-forum.component';
import { ForumsListComponent } from './forums-list/forums-list.component';
import { ConsolePostComponent } from './admin/forms/console-post/console-post.component';
import { ConsoleFormComponent } from './admin/forms/console-form/console-form.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AppRoutingModule } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,



    CreatePostComponent,
    ConsoleFormComponent,
    ConsolePostComponent,
    AdminDashboardComponent,
    GameInfoFormComponent,
    GameFormComponent,
    EditProfileComponent,
    ViewProfileComponent,
    EditPreferencesComponent,
    DropdownComponent,
    FavoriteComponent,
    PanelComponent,
    ZippyComponent,
    HomeComponent,
    SignInComponent,
    CreateAccountComponent,
    ForumComponent,
    GamesComponent,
    StreamingComponent,
    ReccomendationsComponent,
    WatchlistsComponent,
    SearchComponent,
    ForgotPasswordComponent,
    CreateThreadComponent,
    NotFoundComponent,
    GameComponent,
    // GameFormComponent,
    ViewGameComponent,
    ViewRatingsComponent,
    ReactiveDefaultFormControlComponent,
    ReactiveSelectFormControlComponent,
    ReactiveTextareaFormControlComponent,
    CredentialFormControlComponent,
    DisableControlDirective,
    TdfMultiFormControlComponent,
    PostComponent,
    GamingIndexComponent,
    CategoriesComponent,
    CreatorsComponent,
    PlatformsComponent,
    ConsoleComponent,
    ConsoleInfoFormComponent,
    ContribDashboardComponent,
    EditContributionsComponent,
    EditReviewComponent,
    NewsComponent,

    ContentDashboardComponent,
    ViewReviewsComponent,
    ViewPostsComponent,
    RecentlyPostedComponent,
    ViewAllRatingsComponent,
    ViewAllReviewsComponent,
    ViewAllPostsComponent,
    ViewThreadComponent,
    ViewForumComponent,
    ForumsListComponent,
    DisplayReviewComponent,
    DisplayRatingComponent,
    ProvideRatingComponent,
    DisplayAverageRatingComponent,
    GameCardComponent,
    CarouselComponent,
    CommentSectionComponent,
    GameInfoComponent,
    GameInfoFormComponent,
    SuggestNewComponent,
    DescriptorFormComponent,
    ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    
  ],
    providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
