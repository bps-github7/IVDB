import { ModuleWithProviders, NgModule } from '@angular/core';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from '../core/auth.service';
import { CommentService } from './comment.service';
import { GameService } from './game.service';
import { GameInfoService } from './gameinfo.service';
import { NewsService } from './news.service';
import { PreferencesService } from './preferences.service';
import { ProfileService } from './profile.service';
import { RatingService } from './rating.service';
import { ReviewService } from './review.service';
import { ThreadService } from './thread.service';
import { UserAuthGuard } from './user-auth-guard.service';
import { UserService } from './user.service';
import { CategoriesService } from './categories.service';
import { ForumInfoService } from './forum-info.service';
import { ForumsService } from './forums.service';
import { ForumPostService } from './forum-post.service';
import { SuggestionService } from './suggestion.service';

/* a strange syntax... why even bother w decorating at this point?!!
 */
@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [],
})
export class ServicesModule {
    static forRoot(): ModuleWithProviders<ServicesModule> {
        return {
            ngModule: ServicesModule,
            providers: [
                // authentication services
                // this is provided already by core. 
                AuthService,

                // this can all go in user module some day SOON!?
                UserService,
                ProfileService,
                PreferencesService,
                
                // auth guards
                AuthGuard,
                AdminAuthGuard,
                UserAuthGuard,
                
                
                
                
                GameInfoService,
                GameService,
                RatingService,
                ReviewService,


                // content
                NewsService,
                CommentService,
                CategoriesService,
                SuggestionService,
                
 
                // forum 
                ForumsService,
                ForumInfoService,
                ForumPostService,
                ThreadService
            ]
        };
    }
}