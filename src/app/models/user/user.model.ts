import { Metadata } from '..';
export interface User {
	id: string;
	email : string;
	displayName : string;
	privalleges? : number;

	metadata : {
		provider : '',
		firstLogin : boolean,
		hasProfile : boolean,
		hasPreferences : boolean
	}
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