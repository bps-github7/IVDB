import { ContentEffects } from './content.effects';
import { GameEffects } from './game.effects';
import { GameInfoEffects } from './game-info.effects';
import { ForumEffects } from './forum.effects';
import { ForumInfoEffects } from './forum-info.effects';
import { VideogameConsoleEffects } from './videogame-console.effects';
// import { ForumEffects } from './forum.effects';

export const effects : any [] = [
	ContentEffects, 
	GameEffects, 
	GameInfoEffects, 
	ForumEffects, 
	ForumInfoEffects, 
	VideogameConsoleEffects
];
// export const effects : any [] = [ContentEffects, GameEffects, ContributionEffects, ForumEffects];


/* TODO: should we make this file admin.index.ts?? 
1. what other modules need multiple data sources?
2. is it that inefficient to import all effects to each lazily loaded module (when we will only need to use one or two most of the time?)  */

export * from './content.effects';
export * from './game.effects';
export * from './game-info.effects';
export * from './forum.effects';
export * from './forum-info.effects';
// export * from './contribution.effects';
// export * from './forum.effects';