import { Preferences, Profile } from '..';
export interface User {
	id: string;
	email : string;
	displayName : string;
	profile?: Profile;
	preferences?: Preferences;
	privalleges? : number;
}

export class User {
	constructor(public id: string, public displayName: string) {	}
}