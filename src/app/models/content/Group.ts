import { User } from '../user/user';

export interface Group {
    title: string,
    purpose : string,
    members : User []
}