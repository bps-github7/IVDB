export interface User {
	id: string;
	email : string;
	displayName : string;
	privalleges? : number;

	// stuff that fireship impls, not sure how 
	loading ?: boolean;
	error?: string;
}

export class User {
	constructor(public id: string, public displayName: string) {	}
}