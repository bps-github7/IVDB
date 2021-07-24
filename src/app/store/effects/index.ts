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
import { UserEffects } from './user.effects';

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
	UserEffects
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
export * from './user.effects';
export * from './videogame-console.effects';