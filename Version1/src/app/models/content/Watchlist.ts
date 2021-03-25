import { User } from '../user/user';
import { Game } from './Game';

export interface Watchlist {
    title : string,
    watched : Game,
    watchers : User []
}