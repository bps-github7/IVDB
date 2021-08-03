import { Metadata } from "..";

export interface Thread {

	// essential + logisitcal data.
	id : string;
	forum: string;
	title: string;


	// authorship + maintance.
	creator: string;
	moderator: string;


	// metadata + descriptors.
	closed : boolean;
	description?: string;
	metadata ?: Metadata;
	family ?: string;
	prefixes?: string;
	threadType ?: string;
	invitees?: string [];
}