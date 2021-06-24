import { ContentEffects } from '../../store/effects/content.effects';
import { GameEffects } from '../../store/effects/game.effects';
import { ContributionEffects } from '../../store/effects/contribution.effects';
import { GameInfoEffects } from '../../store/effects/game-info.effects';
// import { ForumEffects } from './forum.effects';

export const effects : any [] = [ContentEffects, GameEffects, ContributionEffects, GameInfoEffects];
// export const effects : any [] = [ContentEffects, GameEffects, ContributionEffects, ForumEffects];


/* TODO: not sure this is ideal.. double back soon  */

export * from '../../store/effects/content.effects';
export * from '../../store/effects/game.effects';
export * from '../../store/effects/game-info.effects';
export * from '../../store/effects/contribution.effects';
// export * from '../../store/effects/forum.effects';