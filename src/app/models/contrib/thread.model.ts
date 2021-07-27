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
	description?: string;
	metadata : Metadata;
	prefixes?: string;
	threadType : string;
	invitees?: string [];
}