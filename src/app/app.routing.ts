import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { AdminAuthGuard } from './common/services/admin-auth-guard.service';
import { AuthGuard } from './common/services/auth-guard.service';
import { ForumInfoFormComponent } from './components/admin/forum/forum-info-form/forum-info-form.component';
import { ManageForumsComponent } from './components/admin/forum/manage-forums/manage-forums.component';
import { ManageThreadsComponent } from './components/admin/forum/manage-threads/manage-threads.component';
import { ManageUsersComponent } from './components/admin/forum/manage-users/manage-users.component';
import { GameFormComponent } from './components/admin/game-form/game-form.component';
import { GameInfoFormComponent } from './components/admin/game-info-form/game-info-form.component';
import { GameInfoComponent } from './components/admin/game-info/game-info.component';
import { GameComponent } from './components/admin/game/game.component';
import { ContentDashboardComponent } from './components/content/content-dashboard/content-dashboard.component';
import { NewsComponent } from './components/content/news/news.component';
import { RecentlyPostedComponent } from './components/content/recently-posted/recently-posted.component';
import { StreamingComponent } from './components/content/streaming/streaming.component';
import { WatchlistsComponent } from './components/content/watchlists/watchlists.component';
import { ContribDashboardComponent } from './components/contributions/contrib-dashboard/contrib-dashboard.component';
import { DisplayReviewComponent } from './components/contributions/display-review/display-review.component';
import { EditReviewComponent } from './components/contributions/edit-review/edit-review.component';
import { ViewAllPostsComponent } from './components/contributions/view-all-posts/view-all-posts.component';
import { ViewAllRatingsComponent } from './components/contributions/view-all-ratings/view-all-ratings.component';
import { ViewAllReviewsComponent } from './components/contributions/view-all-reviews/view-all-reviews.component';
import { ViewRatingsComponent } from './components/contributions/view-ratings/view-ratings.component';
import { ViewReviewsComponent } from './components/contributions/view-reviews/view-reviews.component';
import { CategoriesComponent } from './components/gaming-index/categories/categories.component';
import { ConsoleComponent } from './components/gaming-index/console/console.component';
import { CreatorsComponent } from './components/gaming-index/creators/creators.component';
import { GamesComponent } from './components/gaming-index/games/games.component';
import { GamingIndexComponent } from './components/gaming-index/gaming-index/gaming-index.component';
import { PlatformsComponent } from './components/gaming-index/platforms/platforms.component';
import { ViewGameComponent } from './components/gaming-index/view-game/view-game.component';
import { HomeComponent } from './components/misc/home/home.component';
import { NotFoundComponent } from './components/misc/not-found/not-found.component';
import { SearchComponent } from './components/misc/search/search.component';
import { EditContributionsComponent } from './components/profile/edit-contributions/edit-contributions.component';
import { EditPreferencesComponent } from './components/profile/edit-preferences/edit-preferences.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { CreateAccountComponent } from './components/sign-in/create-account/create-account.component';
import { ForgotPasswordComponent } from './components/sign-in/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in/sign-in.component';


const routes: Routes = [ 
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
    

    // how does forum.routing get imported    
    
    
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
    { path: 'admin/forum/threads', component: ManageThreadsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'admin/forum/users', component: ManageUsersComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    
    { path: 'admin/game/:id', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },

    { path: 'admin/game', component: GameComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    { path: 'admin/forum', component: ManageForumsComponent, canActivate: [AuthGuard, AdminAuthGuard] },

    
    //wildcard for fallthrough cases.
    { path: '**', component: NotFoundComponent }

    
];
@NgModule({ 
   imports: [RouterModule.forRoot(routes)], 
   exports: [RouterModule] 
})
export class AppRoutingModule { } export const
RoutingComponent = [HomeComponent, ]