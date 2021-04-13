Error: Can't resolve all parameters for ViewProfileComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/user/view-profile/view-profile.component.ts: (?, [object Object], [object Object]).
Can't resolve all parameters for EditPreferencesComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/user/edit-preferences/edit-preferences.component.ts: ([object Object], ?, [object Object], [object Object], ?).
Can't resolve all parameters for EditProfileComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/user/edit-profile/edit-profile.component.ts: (?, [object Object], [object Object]).
Can't resolve all parameters for CreatorsComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/games/creators/creators.component.ts: ([object Object], [object Object], ?).
Can't resolve all parameters for PlatformsComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/games/platforms/platforms.component.ts: ([object Object], [object Object], ?).
Can't resolve all parameters for DisplayAverageRatingComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/game/display-average-rating/display-average-rating.component.ts: (?).
Can't resolve all parameters for DisplayReviewComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/game/display-review/display-review.component.ts: (?, [object 
Object], [object Object], ?).
Can't resolve all parameters for ViewGameComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/game/view-game/view-game.component.ts: (?, ?, [object Object], [object Object]).
Can't resolve all parameters for WatchlistsComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/content/watchlists/watchlists.component.ts: (?).
Can't resolve all parameters for EditReviewComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/contrib/edit-review/edit-review.component.ts: (?, [object Object], [object Object]).
Can't resolve all parameters for ProvideRatingComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/contrib/provide-rating/provide-rating.component.ts: (?, [object Object]).
Can't resolve all parameters for SuggestNewComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/contrib/suggest-new/suggest-new.component.ts: (?).
Can't resolve all parameters for ViewRatingsComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/contrib/view-ratings/view-ratings.component.ts: (?, [object Object], [object Object]).
Can't resolve all parameters for ViewReviewsComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/contrib/view-reviews/view-reviews.component.ts: (?, [object Object]).
Cannot determine the module for class UserComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/user/user.component.ts! Add UserComponent to the NgModule to fix 
it.
Cannot determine the module for class GameComponent in C:/Users/Ben/VsCode/web/IVDB/src/app/game/game.component.ts! Add GameComponent to the NgModule to fix 
it.



    
    Error: src/app/user/view-profile/view-profile.component.ts:4:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    4 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/view-profile/view-profile.component.ts:5:32 - error TS2307: Cannot find module '../common/services/profile.service' or its corresponding type declarations.
    
    5 import { ProfileService } from '../common/services/profile.service';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/view-profile/view-profile.component.ts:6:25 - error TS2307: Cannot find module '../models/user/profile' or its corresponding type declarations.
    
    6 import { Profile } from '../models/user/profile';
                              ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:4:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    4 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:5:36 - error TS2307: Cannot find module '../common/services/preferences.service' or its corresponding type declarations.
    
    5 import { PreferencesService } from '../common/services/preferences.service';
                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    6msrc/app/user/edit-preferences/edit-preferences.component.ts:6:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type 
declarations.
    
    6 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:7:29 - error TS2307: Cannot find module '../models/user/preferences' or its corresponding type declarations.
    
    7 import { Preferences } from '../models/user/preferences';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/forgot-password/forgot-password.component.ts:1:36 - error TS2307: Cannot find module '../common/validators/password.validators' or its corresponding type declarations.
    
    1 import { PasswordValidators } from '../common/validators/password.validators';
                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:4:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    4 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:5:32 - error TS2307: Cannot find module '../common/services/profile.service' or its corresponding type declarations.
    
    5 import { ProfileService } from '../common/services/profile.service';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:6:29 - error TS2307: Cannot find module '../common/services/user.service' or its corresponding type declarations.
    
    6 import { UserService } from '../common/services/user.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:7:25 - error TS2307: Cannot find module '../models/user/profile' or its corresponding type declarations.
    
    7 import { Profile } from '../models/user/profile';
                              ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/games/creators/creators.component.ts:3:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    3 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/games/platforms/platforms.component.ts:3:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    3 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-average-rating/display-average-rating.component.ts:2:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    2 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-rating/display-rating.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding 
type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-rating/display-rating.component.ts:5:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    5 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:3:29 - error TS2307: Cannot find module '../common/services/game.service' or its corresponding type declarations.
    
    3 import { GameService } from '../common/services/game.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:4:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding 
type declarations.
    
    4 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:5:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type declarations.
    
    5 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:6:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    6 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:2:29 - error TS2307: Cannot find module '../common/services/game.service' or its corresponding type declarations.
    
    2 import { GameService } from '../common/services/game.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:4:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type declarations.   
    
    4 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:5:29 - error TS2307: Cannot find module '../common/services/user.service' or its corresponding type declarations.
    
    5 import { UserService } from '../common/services/user.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:6:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    6 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:7:22 - error TS2307: Cannot find module '../models/user/user' or its corresponding type declarations.      
    
    7 import { User } from '../models/user/user';
                           ~~~~~~~~~~~~~~~~~~~~~
    src/app/content/watchlists/watchlists.component.ts:4:29 - error TS2307: Cannot find module '../common/services/news.service' or its corresponding type declarations.
    
    4 import { NewsService } from '../common/services/news.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/content/watchlists/watchlists.component.ts:5:22 - error TS2307: Cannot find module '../models/content/news' or its corresponding type declarations.
    
    5 import { News } from '../models/content/news';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/edit-review/edit-review.component.ts:4:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding type declarations.
    
    4 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/edit-review/edit-review.component.ts:5:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    5 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/provide-rating/provide-rating.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/provide-rating/provide-rating.component.ts:5:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    5 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/suggest-new/suggest-new.component.ts:2:35 - error TS2307: Cannot find module '../common/services/suggestion.service' or its corresponding type declarations.
    
    2 import { SuggestionService } from '../common/services/suggestion.service';
                                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-ratings/view-ratings.component.ts:3:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    3 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-ratings/view-ratings.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-reviews/view-reviews.component.ts:3:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding type declarations.
    
    3 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-reviews/view-reviews.component.ts:4:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    4 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    
    Error: src/app/user/view-profile/view-profile.component.ts:4:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    4 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/view-profile/view-profile.component.ts:5:32 - error TS2307: Cannot find module '../common/services/profile.service' or its corresponding type declarations.
    
    5 import { ProfileService } from '../common/services/profile.service';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/view-profile/view-profile.component.ts:6:25 - error TS2307: Cannot find module '../models/user/profile' or its corresponding type declarations.
    
    6 import { Profile } from '../models/user/profile';
                              ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:4:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    4 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:5:36 - error TS2307: Cannot find module '../common/services/preferences.service' or its corresponding type declarations.
    
    5 import { PreferencesService } from '../common/services/preferences.service';
                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    6msrc/app/user/edit-preferences/edit-preferences.component.ts:6:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type 
declarations.
    
    6 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:7:29 - error TS2307: Cannot find module '../models/user/preferences' or its corresponding type declarations.
    
    7 import { Preferences } from '../models/user/preferences';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/forgot-password/forgot-password.component.ts:1:36 - error TS2307: Cannot find module '../common/validators/password.validators' or its corresponding type declarations.
    
    1 import { PasswordValidators } from '../common/validators/password.validators';
                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:4:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    4 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:5:32 - error TS2307: Cannot find module '../common/services/profile.service' or its corresponding type declarations.
    
    5 import { ProfileService } from '../common/services/profile.service';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:6:29 - error TS2307: Cannot find module '../common/services/user.service' or its corresponding type declarations.
    
    6 import { UserService } from '../common/services/user.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:7:25 - error TS2307: Cannot find module '../models/user/profile' or its corresponding type declarations.
    
    7 import { Profile } from '../models/user/profile';
                              ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/games/creators/creators.component.ts:3:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    3 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/games/platforms/platforms.component.ts:3:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    3 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-average-rating/display-average-rating.component.ts:2:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    2 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-rating/display-rating.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding 
type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-rating/display-rating.component.ts:5:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    5 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:3:29 - error TS2307: Cannot find module '../common/services/game.service' or its corresponding type declarations.
    
    3 import { GameService } from '../common/services/game.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:4:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding 
type declarations.
    
    4 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:5:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type declarations.
    
    5 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:6:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    6 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:2:29 - error TS2307: Cannot find module '../common/services/game.service' or its corresponding type declarations.
    
    2 import { GameService } from '../common/services/game.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:4:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type declarations.   
    
    4 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:5:29 - error TS2307: Cannot find module '../common/services/user.service' or its corresponding type declarations.
    
    5 import { UserService } from '../common/services/user.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:6:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    6 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:7:22 - error TS2307: Cannot find module '../models/user/user' or its corresponding type declarations.      
    
    7 import { User } from '../models/user/user';
                           ~~~~~~~~~~~~~~~~~~~~~
    src/app/content/watchlists/watchlists.component.ts:4:29 - error TS2307: Cannot find module '../common/services/news.service' or its corresponding type declarations.
    
    4 import { NewsService } from '../common/services/news.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/content/watchlists/watchlists.component.ts:5:22 - error TS2307: Cannot find module '../models/content/news' or its corresponding type declarations.
    
    5 import { News } from '../models/content/news';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/edit-review/edit-review.component.ts:4:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding type declarations.
    
    4 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/edit-review/edit-review.component.ts:5:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    5 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/provide-rating/provide-rating.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/provide-rating/provide-rating.component.ts:5:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    5 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/suggest-new/suggest-new.component.ts:2:35 - error TS2307: Cannot find module '../common/services/suggestion.service' or its corresponding type declarations.
    
    2 import { SuggestionService } from '../common/services/suggestion.service';
                                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-ratings/view-ratings.component.ts:3:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    3 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-ratings/view-ratings.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-reviews/view-reviews.component.ts:3:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding type declarations.
    
    3 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-reviews/view-reviews.component.ts:4:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    4 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    
    Error: src/app/user/view-profile/view-profile.component.ts:4:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    4 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/view-profile/view-profile.component.ts:5:32 - error TS2307: Cannot find module '../common/services/profile.service' or its corresponding type declarations.
    
    5 import { ProfileService } from '../common/services/profile.service';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/view-profile/view-profile.component.ts:6:25 - error TS2307: Cannot find module '../models/user/profile' or its corresponding type declarations.
    
    6 import { Profile } from '../models/user/profile';
                              ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:4:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    4 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:5:36 - error TS2307: Cannot find module '../common/services/preferences.service' or its corresponding type declarations.
    
    5 import { PreferencesService } from '../common/services/preferences.service';
                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    6msrc/app/user/edit-preferences/edit-preferences.component.ts:6:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type 
declarations.
    
    6 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:7:29 - error TS2307: Cannot find module '../models/user/preferences' or its corresponding type declarations.
    
    7 import { Preferences } from '../models/user/preferences';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/forgot-password/forgot-password.component.ts:1:36 - error TS2307: Cannot find module '../common/validators/password.validators' or its corresponding type declarations.
    
    1 import { PasswordValidators } from '../common/validators/password.validators';
                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:4:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    4 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:5:32 - error TS2307: Cannot find module '../common/services/profile.service' or its corresponding type declarations.
    
    5 import { ProfileService } from '../common/services/profile.service';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:6:29 - error TS2307: Cannot find module '../common/services/user.service' or its corresponding type declarations.
    
    6 import { UserService } from '../common/services/user.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:7:25 - error TS2307: Cannot find module '../models/user/profile' or its corresponding type declarations.
    
    7 import { Profile } from '../models/user/profile';
                              ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/games/creators/creators.component.ts:3:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    3 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/games/platforms/platforms.component.ts:3:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    3 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-average-rating/display-average-rating.component.ts:2:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    2 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-rating/display-rating.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding 
type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-rating/display-rating.component.ts:5:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    5 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:3:29 - error TS2307: Cannot find module '../common/services/game.service' or its corresponding type declarations.
    
    3 import { GameService } from '../common/services/game.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:4:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding 
type declarations.
    
    4 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:5:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type declarations.
    
    5 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:6:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    6 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:2:29 - error TS2307: Cannot find module '../common/services/game.service' or its corresponding type declarations.
    
    2 import { GameService } from '../common/services/game.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:4:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type declarations.   
    
    4 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:5:29 - error TS2307: Cannot find module '../common/services/user.service' or its corresponding type declarations.
    
    5 import { UserService } from '../common/services/user.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:6:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    6 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:7:22 - error TS2307: Cannot find module '../models/user/user' or its corresponding type declarations.      
    
    7 import { User } from '../models/user/user';
                           ~~~~~~~~~~~~~~~~~~~~~
    src/app/content/watchlists/watchlists.component.ts:4:29 - error TS2307: Cannot find module '../common/services/news.service' or its corresponding type declarations.
    
    4 import { NewsService } from '../common/services/news.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/content/watchlists/watchlists.component.ts:5:22 - error TS2307: Cannot find module '../models/content/news' or its corresponding type declarations.
    
    5 import { News } from '../models/content/news';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/edit-review/edit-review.component.ts:4:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding type declarations.
    
    4 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/edit-review/edit-review.component.ts:5:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    5 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/provide-rating/provide-rating.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/provide-rating/provide-rating.component.ts:5:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    5 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/suggest-new/suggest-new.component.ts:2:35 - error TS2307: Cannot find module '../common/services/suggestion.service' or its corresponding type declarations.
    
    2 import { SuggestionService } from '../common/services/suggestion.service';
                                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-ratings/view-ratings.component.ts:3:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    3 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-ratings/view-ratings.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-reviews/view-reviews.component.ts:3:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding type declarations.
    
    3 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-reviews/view-reviews.component.ts:4:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    4 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    
    Error: src/app/user/view-profile/view-profile.component.ts:4:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    4 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/view-profile/view-profile.component.ts:5:32 - error TS2307: Cannot find module '../common/services/profile.service' or its corresponding type declarations.
    
    5 import { ProfileService } from '../common/services/profile.service';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/view-profile/view-profile.component.ts:6:25 - error TS2307: Cannot find module '../models/user/profile' or its corresponding type declarations.
    
    6 import { Profile } from '../models/user/profile';
                              ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:4:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    4 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:5:36 - error TS2307: Cannot find module '../common/services/preferences.service' or its corresponding type declarations.
    
    5 import { PreferencesService } from '../common/services/preferences.service';
                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    6msrc/app/user/edit-preferences/edit-preferences.component.ts:6:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type 
declarations.
    
    6 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:7:29 - error TS2307: Cannot find module '../models/user/preferences' or its corresponding type declarations.
    
    7 import { Preferences } from '../models/user/preferences';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/forgot-password/forgot-password.component.ts:1:36 - error TS2307: Cannot find module '../common/validators/password.validators' or its corresponding type declarations.
    
    1 import { PasswordValidators } from '../common/validators/password.validators';
                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:4:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    4 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:5:32 - error TS2307: Cannot find module '../common/services/profile.service' or its corresponding type declarations.
    
    5 import { ProfileService } from '../common/services/profile.service';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:6:29 - error TS2307: Cannot find module '../common/services/user.service' or its corresponding type declarations.
    
    6 import { UserService } from '../common/services/user.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:7:25 - error TS2307: Cannot find module '../models/user/profile' or its corresponding type declarations.
    
    7 import { Profile } from '../models/user/profile';
                              ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/games/creators/creators.component.ts:3:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    3 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/games/platforms/platforms.component.ts:3:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    3 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-average-rating/display-average-rating.component.ts:2:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    2 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-rating/display-rating.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding 
type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-rating/display-rating.component.ts:5:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    5 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:3:29 - error TS2307: Cannot find module '../common/services/game.service' or its corresponding type declarations.
    
    3 import { GameService } from '../common/services/game.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:4:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding 
type declarations.
    
    4 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:5:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type declarations.
    
    5 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:6:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    6 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:2:29 - error TS2307: Cannot find module '../common/services/game.service' or its corresponding type declarations.
    
    2 import { GameService } from '../common/services/game.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:4:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type declarations.   
    
    4 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:5:29 - error TS2307: Cannot find module '../common/services/user.service' or its corresponding type declarations.
    
    5 import { UserService } from '../common/services/user.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:6:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    6 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:7:22 - error TS2307: Cannot find module '../models/user/user' or its corresponding type declarations.      
    
    7 import { User } from '../models/user/user';
                           ~~~~~~~~~~~~~~~~~~~~~
    src/app/content/watchlists/watchlists.component.ts:4:29 - error TS2307: Cannot find module '../common/services/news.service' or its corresponding type declarations.
    
    4 import { NewsService } from '../common/services/news.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/content/watchlists/watchlists.component.ts:5:22 - error TS2307: Cannot find module '../models/content/news' or its corresponding type declarations.
    
    5 import { News } from '../models/content/news';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/edit-review/edit-review.component.ts:4:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding type declarations.
    
    4 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/edit-review/edit-review.component.ts:5:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    5 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/provide-rating/provide-rating.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/provide-rating/provide-rating.component.ts:5:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    5 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/suggest-new/suggest-new.component.ts:2:35 - error TS2307: Cannot find module '../common/services/suggestion.service' or its corresponding type declarations.
    
    2 import { SuggestionService } from '../common/services/suggestion.service';
                                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-ratings/view-ratings.component.ts:3:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    3 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-ratings/view-ratings.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-reviews/view-reviews.component.ts:3:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding type declarations.
    
    3 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-reviews/view-reviews.component.ts:4:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    4 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    
    Error: src/app/user/view-profile/view-profile.component.ts:4:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    4 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/view-profile/view-profile.component.ts:5:32 - error TS2307: Cannot find module '../common/services/profile.service' or its corresponding type declarations.
    
    5 import { ProfileService } from '../common/services/profile.service';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/view-profile/view-profile.component.ts:6:25 - error TS2307: Cannot find module '../models/user/profile' or its corresponding type declarations.
    
    6 import { Profile } from '../models/user/profile';
                              ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:4:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    4 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:5:36 - error TS2307: Cannot find module '../common/services/preferences.service' or its corresponding type declarations.
    
    5 import { PreferencesService } from '../common/services/preferences.service';
                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    6msrc/app/user/edit-preferences/edit-preferences.component.ts:6:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type 
declarations.
    
    6 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-preferences/edit-preferences.component.ts:7:29 - error TS2307: Cannot find module '../models/user/preferences' or its corresponding type declarations.
    
    7 import { Preferences } from '../models/user/preferences';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/forgot-password/forgot-password.component.ts:1:36 - error TS2307: Cannot find module '../common/validators/password.validators' or its corresponding type declarations.
    
    1 import { PasswordValidators } from '../common/validators/password.validators';
                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:4:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    4 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:5:32 - error TS2307: Cannot find module '../common/services/profile.service' or its corresponding type declarations.
    
    5 import { ProfileService } from '../common/services/profile.service';
                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:6:29 - error TS2307: Cannot find module '../common/services/user.service' or its corresponding type declarations.
    
    6 import { UserService } from '../common/services/user.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/user/edit-profile/edit-profile.component.ts:7:25 - error TS2307: Cannot find module '../models/user/profile' or its corresponding type declarations.
    
    7 import { Profile } from '../models/user/profile';
                              ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/games/creators/creators.component.ts:3:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    3 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/games/platforms/platforms.component.ts:3:33 - error TS2307: Cannot find module '../common/services/gameinfo.service' or its corresponding type declarations.
    
    3 import { GameInfoService } from '../common/services/gameinfo.service';
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-average-rating/display-average-rating.component.ts:2:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    2 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-rating/display-rating.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding 
type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-rating/display-rating.component.ts:5:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    5 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:3:29 - error TS2307: Cannot find module '../common/services/game.service' or its corresponding type declarations.
    
    3 import { GameService } from '../common/services/game.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:4:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding 
type declarations.
    
    4 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:5:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type declarations.
    
    5 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/display-review/display-review.component.ts:6:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    6 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:2:29 - error TS2307: Cannot find module '../common/services/game.service' or its corresponding type declarations.
    
    2 import { GameService } from '../common/services/game.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:4:22 - error TS2307: Cannot find module '../models/content/Game' or its corresponding type declarations.   
    
    4 import { Game } from '../models/content/Game';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:5:29 - error TS2307: Cannot find module '../common/services/user.service' or its corresponding type declarations.
    
    5 import { UserService } from '../common/services/user.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:6:29 - error TS2307: Cannot find module '../common/services/auth.service' or its corresponding type declarations.
    
    6 import { AuthService } from '../common/services/auth.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/game/view-game/view-game.component.ts:7:22 - error TS2307: Cannot find module '../models/user/user' or its corresponding type declarations.      
    
    7 import { User } from '../models/user/user';
                           ~~~~~~~~~~~~~~~~~~~~~
    src/app/content/watchlists/watchlists.component.ts:4:29 - error TS2307: Cannot find module '../common/services/news.service' or its corresponding type declarations.
    
    4 import { NewsService } from '../common/services/news.service';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/content/watchlists/watchlists.component.ts:5:22 - error TS2307: Cannot find module '../models/content/news' or its corresponding type declarations.
    
    5 import { News } from '../models/content/news';
                           ~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/edit-review/edit-review.component.ts:4:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding type declarations.
    
    4 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/edit-review/edit-review.component.ts:5:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    5 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/provide-rating/provide-rating.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/provide-rating/provide-rating.component.ts:5:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    5 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/suggest-new/suggest-new.component.ts:2:35 - error TS2307: Cannot find module '../common/services/suggestion.service' or its corresponding type declarations.
    
    2 import { SuggestionService } from '../common/services/suggestion.service';
                                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-ratings/view-ratings.component.ts:3:24 - error TS2307: Cannot find module '../models/content/rating' or its corresponding type declarations.
    
    3 import { Rating } from '../models/content/rating';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-ratings/view-ratings.component.ts:4:31 - error TS2307: Cannot find module '../common/services/rating.service' or its corresponding type declarations.
    
    4 import { RatingService } from '../common/services/rating.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-reviews/view-reviews.component.ts:3:31 - error TS2307: Cannot find module '../common/services/review.service' or its corresponding type declarations.
    
    3 import { ReviewService } from '../common/services/review.service';
                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    src/app/contrib/view-reviews/view-reviews.component.ts:4:24 - error TS2307: Cannot find module '../models/content/Review' or its corresponding type declarations.
    
    4 import { Review } from '../models/content/Review';
                             ~~~~~~~~~~~~~~~~~~~~~~~~~~
    