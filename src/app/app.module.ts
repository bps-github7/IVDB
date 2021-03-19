//imports and decorators
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CustomFormsModule } from 'ng2-validation';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//declarations/ bootstraps
/* We created our own organizational schema - 
src/app is divided into common (services, validators, form-controls, etc),
components and models (interfaces)

the component folder is further divided into logical groups:
-admin
-content
-contributions
-forum
-gaming-index
-misc
-profile
-sign-in

NOTE: that the routing doesnt exactly follow this organization, but you will find similaries
as a general rule, do not use the directory structuring to design the routes, but instead organize them logically.
*/

//components/admin
import { PostComponent } from './components/admin/post/post.component';
import { GameComponent } from './components/admin/game/game.component';
import { GameFormComponent } from './components/admin/game-form/game-form.component';
import { DescriptorFormComponent } from './components/admin/descriptor-form/descriptor-form.component';
import { ConsolePostComponent } from './components/admin/console-post/console-post.component';
import { ConsoleFormComponent } from './components/admin/console-form/console-form.component';
import { ConsoleInfoFormComponent } from './components/admin/console-info-form/console-info-form.component';
import { GameInfoComponent } from './components/admin/game-info/game-info.component';
import { GameInfoFormComponent } from './components/admin/game-info-form/game-info-form.component';

    //components/admin/forum
    import { ForumInfoFormComponent } from './components/admin/forum/forum-info-form/forum-info-form.component';





//components/content
import { StreamingComponent } from './components/content/streaming/streaming.component';
import { ReccomendationsComponent } from './components/content/reccomendations/reccomendations.component';
import { NewsComponent } from './components/content/news/news.component';
import { ContentDashboardComponent } from './components/content/content-dashboard/content-dashboard.component';
import { WatchlistsComponent } from './components/content/watchlists/watchlists.component';
import { RecentlyPostedComponent } from './components/content/recently-posted/recently-posted.component';
//components/contributions
import { ProvideRatingComponent } from './components/contributions/provide-rating/provide-rating.component';
import { DisplayAverageRatingComponent } from './components/contributions/display-average-rating/display-average-rating.component';
import { CommentSectionComponent } from './components/contributions/comment-section/comment-section.component';
import { SuggestNewComponent } from './components/contributions/suggest-new/suggest-new.component';
import { ViewRatingsComponent } from './components/contributions/view-ratings/view-ratings.component';
import { ContribDashboardComponent } from './components/contributions/contrib-dashboard/contrib-dashboard.component';
import { EditReviewComponent } from './components/contributions/edit-review/edit-review.component';
import { ViewReviewsComponent } from './components/contributions/view-reviews/view-reviews.component';
import { ViewPostsComponent } from './components/contributions/view-posts/view-posts.component';
import { ViewAllRatingsComponent } from './components/contributions/view-all-ratings/view-all-ratings.component';
import { ViewAllReviewsComponent } from './components/contributions/view-all-reviews/view-all-reviews.component';
import { ViewAllPostsComponent } from './components/contributions/view-all-posts/view-all-posts.component';
import { DisplayReviewComponent } from './components/contributions/display-review/display-review.component';
import { DisplayRatingComponent } from './components/contributions/display-rating/display-rating.component';
//components/forum
import { ForumComponent } from './components/forum/forum/forum.component';
import { ForumsListComponent } from './components/forum/forums-list/forums-list.component';


//components/gaming-index
import { GameCardComponent } from './components/gaming-index/game-card/game-card.component';
import { PlatformsComponent } from './components/gaming-index/platforms/platforms.component';
import { GamingIndexComponent } from './components/gaming-index/gaming-index/gaming-index.component';
import { CategoriesComponent } from './components/gaming-index/categories/categories.component';
import { CreatorsComponent } from './components/gaming-index/creators/creators.component';
import { ConsoleComponent } from './components/gaming-index/console/console.component';
import { GamesComponent } from './components/gaming-index/games/games.component';
import { ViewGameComponent } from './components/gaming-index/view-game/view-game.component';
//components/misc
import { CarouselComponent } from './components/misc/carousel/carousel.component';
import { DropdownComponent } from './components/misc/dropdown/dropdown.component';
import { FavoriteComponent } from './components/misc/favorite/favorite.component';
import { ZippyComponent } from './components/misc/zippy/zippy.component';
import { HomeComponent } from './components/misc/home/home.component';
import { SearchComponent } from './components/misc/search/search.component';
import { NotFoundComponent } from './components/misc/not-found/not-found.component';
//components/profile
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { EditPreferencesComponent } from './components/profile/edit-preferences/edit-preferences.component';
import { EditContributionsComponent } from './components/profile/edit-contributions/edit-contributions.component';
//components/sign-in
import { SignInComponent } from './components/sign-in/sign-in/sign-in.component';
import { CreateAccountComponent } from './components/sign-in/create-account/create-account.component';
import { ForgotPasswordComponent } from './components/sign-in/forgot-password/forgot-password.component';
//common/form-controls - should this get imported in sep module.asRoot() ?
import { ReactiveDefaultFormControlComponent } from './common/form-controls/reactive-default-form-control/reactive-default-form-control.component';
import { ReactiveSelectFormControlComponent } from './common/form-controls/reactive-select-form-control/reactive-select-form-control.component';
import { ReactiveTextareaFormControlComponent } from './common/form-controls/reactive-textarea-form-control/reactive-textarea-form-control.component';
import { CredentialFormControlComponent } from './common/form-controls/credential-form-control/credential-form-control.component';
import { DisableControlDirective } from './common/directives/disable-control.directive';
import { TdfMultiFormControlComponent } from './common/form-controls/tdf-multi-form-control/tdf-multi-form-control.component';



//environment
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { ServicesModule } from './common/services/services.module';

//not sure why, but these are not getting detected from our service main module.
import { AdminAuthGuard } from './common/services/admin-auth-guard.service';
import { AuthGuard } from './common/services/auth-guard.service';
import { ManageForumsComponent } from './components/admin/forum/manage-forums/manage-forums.component';
import { ManageThreadsComponent } from './components/admin/forum/manage-threads/manage-threads.component';
import { ManageUsersComponent } from './components/admin/forum/manage-users/manage-users.component';


@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    ViewProfileComponent,
    EditPreferencesComponent,
    DropdownComponent,
    FavoriteComponent,
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
    NotFoundComponent,
    GameComponent,
    GameFormComponent,
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
    ConsoleComponent,
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
    ConsolePostComponent,
    ConsoleFormComponent,
    ConsoleInfoFormComponent,
    PlatformsComponent,
    ForumInfoFormComponent,
    ForumsListComponent,
    ManageForumsComponent,
    ManageThreadsComponent,
    ManageUsersComponent,
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
    ServicesModule.forRoot(),
    RouterModule.forRoot([
    //routes asscesible to annoymous users
    //temporarily swapped this for learning css. conveninece.
    { path: '', component: HomeComponent },
    //note all the inconsistencies in your routing- camel case here, pascal case there. NOOO!


    { path: 'sign_in/createAccount/forgotPassword', component: ForgotPasswordComponent },
    { path: 'sign_in/createAccount', component: CreateAccountComponent },
    { path: 'sign_in', component: SignInComponent },
    { path: 'search', component: SearchComponent },
    // On deployment, change uid here to displayname to be user and search friendlier
    { path: 'sign_in/create_profile/:uid', component: EditProfileComponent, canActivate: [AuthGuard] },
    { path: 'profile/:uid/:username', component: ViewProfileComponent, canActivate: [AuthGuard] },
    //should delete this at somepoint- for now its a fail safe mechanism.
    { path: 'profile/:uid', component: ViewProfileComponent, canActivate: [AuthGuard] },
    { path: 'preferences/:uid/:username', component: EditPreferencesComponent, canActivate: [AuthGuard] },
    { path: 'preferences/:uid', component: EditPreferencesComponent, canActivate: [AuthGuard] },
    { path: 'contributions/:uid/:username', component: EditContributionsComponent, canActivate: [AuthGuard] },
    //you'll see more on these pages if youre signed in, but can view as anonymous user.
    { path: 'forum', component: ForumComponent },
    // { path: 'forum/view-threads/:id', component: ViewThreadsComponent },
    // { path: 'forum/view-threads', component: ViewThreadsComponent },
    
    //how you edit a forum
    //TODO: need a second auth guard for preventing non author user from editing forums.
    // { path: 'forum/create-thread/:id', component: CreateThreadComponent, canActivate: [AuthGuard] },
    // { path: 'forum/create-thread', component: CreateThreadComponent, canActivate: [AuthGuard] },
    { path: 'forum/my-posts/:id', component: ViewAllPostsComponent },
    
    
    { path: 'games', component: GamesComponent },
    { path: 'games/:id', component: ViewGameComponent },
    // where id refers to review-id
    { path: 'games/:game_title/review', component: EditReviewComponent, canActivate: [AuthGuard] },
    { path: 'gaming-index', component: GamingIndexComponent },
    { path: 'gaming-index/creators/:creator', component: CreatorsComponent },
    { path: 'gaming-index/creators', component: CreatorsComponent },
    { path: 'gaming-index/categories/:category', component: CategoriesComponent },
    { path: 'gaming-index/categories', component: CategoriesComponent },
    { path: 'gaming-index/platforms/:platform_name/:console_name', component: ConsoleComponent },
    { path: 'gaming-index/platforms/:platform_name', component: PlatformsComponent },
    { path: 'gaming-index/platforms', component: PlatformsComponent },
    //routes for logged in users
    // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'contrib-dashboard/ratings/:username', component: ViewRatingsComponent, canActivate: [AuthGuard] },
    { path: 'contrib-dashboard/reviews/:username/:game_title', component: DisplayReviewComponent, canActivate: [AuthGuard] },
    { path: 'contrib-dashboard/reviews/:username', component: ViewReviewsComponent, canActivate: [AuthGuard] },
    { path: 'contrib-dashboard/:username', component: ContribDashboardComponent, canActivate: [AuthGuard] },
    { path: 'content-dashboard', component: ContentDashboardComponent },
    { path: 'content-dashboard/watchlists', component: WatchlistsComponent },
    { path: 'content-dashboard/streams', component: StreamingComponent },
    { path: 'content-dashboard/news', component: NewsComponent },
    { path: 'content-dashboard/recently-posted', component: RecentlyPostedComponent },
    { path: 'content-dashboard/recently-posted/ratings', component: ViewAllRatingsComponent },
    { path: 'content-dashboard/recently-posted/reviews', component: ViewAllReviewsComponent },
    { path: 'content-dashboard/recently-posted/posts', component: ViewAllPostsComponent },
    // admin-only routes: probably dont need admin/home TBT
    { path: 'admin/forum/info/new', component: ForumInfoFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'admin/game/info/new', component: GameInfoFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'admin/game/info', component: GameInfoComponent, canActivate: [AuthGuard, AdminAuthGuard] },

    { path: 'admin/game/new', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    
    { path: 'admin/game/:id', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },

    { path: 'admin/game', component: GameComponent, canActivate: [AuthGuard, AdminAuthGuard] },

    
    //wildcard for fallthrough cases.
    { path: '**', component: NotFoundComponent }
], { relativeLinkResolution: 'legacy' })
  ],
    providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
