import { Metadata, Preferences, Profile } from '..';
export interface User {
	id: string;
	email : string;
	displayName : string;
	privalleges? : number;

	metadata : {
		provider : string,
		firstLogin : boolean,
		hasProfile : boolean,
		hasPreferences : boolean
	}
	profile?: Profile;
	preferences?: Preferences;

}

export class User {
	constructor(public id: string, public displayName: string) {
		this.metadata = {
			provider : '',
			firstLogin : true,
			hasProfile: false,
			hasPreferences : false
		}
	}
}