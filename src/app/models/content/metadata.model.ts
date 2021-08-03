import { timestamp } from 'src/app/services/firebase.service';

export interface Metadata {
	// this is a tricky little fig twiddler,,,
	createdAt: any,
	updatedAt?: any,
	creator: string,

	// 
	family: string,
	tags?: string [],

	// specfic for threads.
	forum?: string;
	moderator?: string;
	closed?: boolean;
	description?: string;
	prefixes?: string;
	threadType ?: string;
	invitees?: string [];

}

export class Metadata {
	constructor(

		public creator : string,
		public family : string,
		public tags ?: string [],
		public forum?: string,
		public moderator?: string,
		public closed?: boolean,
		public description?: string,
		public prefixes?: string,
		public threadType ?: string,
		public invitees?: string [],

		public createdAt = timestamp

	) {}
}
