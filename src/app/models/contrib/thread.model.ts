import { Metadata } from "..";

export interface Thread {

	// essential + logisitcal data.
	id : string;
	title: string;


	// metadata - ideally should just use a metadata model and include all these props in there, based on metadata type
	metadata ?: Metadata;
	forum: string;
	creator?: string;
	moderator?: string;
	closed?: boolean;
	description?: string;
	family ?: string;
	prefixes?: string;
	threadType ?: string;
	invitees?: string [];
}

export class Thread {
	constructor(
		public id : string,  
		public title : string,  

	) {}
}

