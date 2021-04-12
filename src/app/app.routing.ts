import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
 
 
const routes: Routes = [
    
    // home page
    { path: '', component: HomeComponent },

    { 
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    // { 
    //     path: 'user',
    //     loadChildren: () => import('./user/user.module').then(m => m.UserModule)
    // },
    // { 
    //     path: 'games',
    //     loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
    // },
    // { 
    //     path: 'forum',
    //     loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule)
    // },
    // { 
    //     path: 'content',
    //     loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
    // },
    // { 
    //     path: 'contrib',
    //     loadChildren: () => import('./contrib/contrib.module').then(m => m.ContribModule)
    // },
    // { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    // { path: 'user', loadChildren: './user/user.module#UserModule' },
    //
    // { path: 'game', loadChildren: './game/game.module#GameModule' },
    // { path: 'forum', loadChildren: './forum/forum.module#ForumModule' },
    // { path: 'content', loadChildren: './content/content.module#ContentModule' },
    // { path: 'contrib', loadChildren: './contrib/contrib.module#ContribModule' },



    



    /* 
    One piece urls- some or most will become
    the roots of feature modules if thats possible
    */
    // { path: 'admin', component: AdminDashboardComponent },
    // { path: 'sign_in', component: SignInComponent },
    // { path: 'search', component: SearchComponent },
    // { path: 'forum', component: ForumComponent },  
    // { path: 'games', component: GamesComponent },
    // { path: 'content-dashboard', component: ContentDashboardComponent },

    // /* 
    //     Two piece urls
    //  */
    // { path: 'admin/game', component: GameComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    // { path: 'forum/:forum_id', component: ViewForumComponent },    
    // { path: 'forum/create-thread', component: CreateThreadComponent, canActivate: [AuthGuard] },
    // { path: 'sign_in/createAccount', component: CreateAccountComponent },
    // { path: 'profile/:uid', component: ViewProfileComponent, canActivate: [AuthGuard] },
    // { path: 'preferences/:uid', component: EditPreferencesComponent, canActivate: [AuthGuard] },    
    // { path: 'games/:id', component: ViewGameComponent },
    // { path: 'games/info', component: GamingIndexComponent },
    

    // /* 
    //     Three piece urls
    // */
    // { path: 'forum/:forum_id/:thread_id', component : ViewThreadComponent},
    // //TODO: test if user trying to edit is owner of the thread or mod, should fail otherwise
    // { path: 'forum/create-thread/:id', component: CreateThreadComponent, canActivate: [AuthGuard] },
    
    // { path: 'forum/:forum_id/edit', component: CreateThreadComponent },    
    // { path: 'forum/:forum_id/new', component: CreateThreadComponent },    
    // { path: 'forum/create-thread/:id', component: CreateThreadComponent, canActivate: [AuthGuard] },
    // { path: 'forum/my-posts/:id', component: ViewAllPostsComponent },

    // { path: 'sign_in/createAccount/forgotPassword', component: ForgotPasswordComponent },
    // // change uid here to displayname to be user and search friendlier
    // { path: 'sign_in/create_profile/:uid', component: EditProfileComponent, canActivate: [AuthGuard] },
    
    // { path: 'profile/:uid/:username', component: ViewProfileComponent, canActivate: [AuthGuard] },
    // { path: 'preferences/:uid/:username', component: EditPreferencesComponent, canActivate: [AuthGuard] },
    
    
    
    // { path: 'games/:game_title/review', component: EditReviewComponent, canActivate: [AuthGuard] },
    // { path: 'games/info/creators', component: CreatorsComponent },
    // { path: 'games/info/categories', component: CategoriesComponent },
    // { path: 'games/info/platforms', component: PlatformsComponent },
    
    // { path: 'contrib-dashboard/ratings/:username', component: ViewRatingsComponent, canActivate: [AuthGuard] },
    // { path: 'contrib-dashboard/reviews/:username', component: ViewReviewsComponent, canActivate: [AuthGuard] },
    // { path: 'contrib-dashboard/:username', component: ContribDashboardComponent, canActivate: [AuthGuard] },
    // { path: 'contributions/:uid/:username', component: EditContributionsComponent, canActivate: [AuthGuard] },
    
    // { path: 'content-dashboard/recently-posted/ratings', component: ViewAllRatingsComponent },
    // { path: 'content-dashboard/recently-posted/reviews', component: ViewAllReviewsComponent },
    // { path: 'content-dashboard/recently-posted/posts', component: ViewAllPostsComponent },
    // { path: 'content-dashboard/watchlists', component: WatchlistsComponent },
    // { path: 'content-dashboard/streams', component: StreamingComponent },
    // { path: 'content-dashboard/news', component: NewsComponent },
    // { path: 'content-dashboard/recently-posted', component: RecentlyPostedComponent },


    // { path: 'admin/game/info', component: GameInfoComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    // { path: 'admin/game/new', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },    
    // { path: 'admin/game/:id', component: GameFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },

    // // four layer routes
    // { path: 'games/info/creators/:creator', component: CreatorsComponent },
    // { path: 'forum/:forum_id/:thread_id/edit', component : CreatePostComponent},
    // { path: 'forum/:forum_id/:thread_id/new', component : CreatePostComponent},
    // { path: 'games/info/categories/:category', component: CategoriesComponent },
    // { path: 'games/info/platforms/:name', component: PlatformsComponent },
    // { path: 'contrib-dashboard/reviews/:username/:game_title', component: DisplayReviewComponent, canActivate: [AuthGuard] },
    // { path: 'admin/game/info/new', component: GameInfoFormComponent, canActivate: [AuthGuard, AdminAuthGuard] },
    
    // // five layer routes
    // { path: 'games/info/platforms/:name/:qualified_name', component: ConsoleComponent },
         
    //wildcard for fallthrough cases.
    { path: '**', component: NotFoundComponent }
];
 
@NgModule({
  imports: [SharedModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }