import { PreferencesEffects } from './preferences.effects';
import { ContributionEffects } from './contribution.effects';
import { UsersEffects } from './users.effects';
import { SuggestionEffects } from './suggestion.effects';
import { ReviewEffects } from './review.effects';
import { RatingEffects } from './rating.effects';
import { ThreadEffects } from './thread.effects';
import { ContentEffects } from './content.effects';
import { GameEffects } from './game.effects';
import { GameInfoEffects } from './game-info.effects';
import { ForumEffects } from './forum.effects';
import { ForumInfoEffects } from './forum-info.effects';
import { VideogameConsoleEffects } from './videogame-console.effects';
import { FeedbackEffects } from './feedback.effects';

export const effects : any [] = [
	ContentEffects, 
	GameEffects, 
	GameInfoEffects, 
	ForumEffects, 
	ForumInfoEffects, 
	VideogameConsoleEffects,
	ThreadEffects,
	RatingEffects,
	ReviewEffects,
	SuggestionEffects,
	FeedbackEffects,
	//this one is injected at root
	// UserEffects,
	UsersEffects,
	ContributionEffects,
	PreferencesEffects
];

export * from './content.effects';
export * from './game.effects';
export * from './game-info.effects';
export * from './forum.effects';
export * from './forum-info.effects';
export * from './feedback.effects';
export * from './suggestion.effects';
export * from './thread.effects';
export * from './rating.effects';
export * from './review.effects';
export * from './contribution.effects';
export * from './preferences.effects';
export * from './videogame-console.effects';