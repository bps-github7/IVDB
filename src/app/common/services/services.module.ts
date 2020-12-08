import { ModuleWithProviders, NgModule } from '@angular/core';
import { StarService } from 'src/app/star.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { GameService } from './game.service';
import { GameInfoService } from './gameinfo.service';
import { NewsService } from './news.service';
import { PreferencesService } from './preferences.service';
import { ProfileService } from './profile.service';
import { RatingService } from './rating.service';
import { ThreadsService } from './threads.service';
import { UserAuthGuard } from './user-auth-guard.service';
import { UserService } from './user.service';


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [],
})
export class ServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ServicesModule,
            providers: [
                // authentication services
                AuthService,
                UserService,
                // user profile services
                ProfileService,
                PreferencesService,
                
                // auth guards
                AuthGuard,
                AdminAuthGuard,
                UserAuthGuard,
                
                // app wide resource services
                ThreadsService,
                RatingService,
                NewsService,
                StarService, // perhaps this is an issue because its provided in root module?
                GameInfoService,
                GameService,
    
            ]
        };
    }
}