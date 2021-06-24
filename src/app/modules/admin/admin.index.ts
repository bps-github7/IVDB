import { ContentEffects } from '../../effects/content.effects';
import { GameEffects } from '../../effects/game.effects';
import { ContributionEffects } from '../../effects/contribution.effects';
import { GameInfoEffects } from '../../effects/game-info.effects';
// import { ForumEffects } from './forum.effects';

export const effects : any [] = [ContentEffects, GameEffects, ContributionEffects, GameInfoEffects];
// export const effects : any [] = [ContentEffects, GameEffects, ContributionEffects, ForumEffects];


/* TODO: not sure this is ideal.. double back soon  */

export * from '../../effects/content.effects';
export * from '../../effects/game.effects';
export * from '../../effects/game-info.effects';
export * from '../../effects/contribution.effects';
// export * from '../../effects/forum.effects';