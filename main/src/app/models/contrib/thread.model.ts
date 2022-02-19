import { Metadata } from "..";
import { ThreadMetadata } from "../content";

export interface Thread {

	// essential + logisitcal data.
	id : string;
	title: string;
	description: string;
	metadata : ThreadMetadata;
	// metadata - ideally should just use a metadata model and include all these props in there, based on metadata type
	// metadata ?: Metadata;
	// forum: string;
	// creator?: string;
	// moderator?: string;
	// closed?: boolean;
	// description?: string;
	// family ?: string;
	// prefixes?: string;
	// threadType ?: string;
	// invitees?: string [];
}

// export class Thread {
// 	constructor(
		// public id : string = "",  
		// public title : string = "",  
		// public description: string = "",
		// public threadMetadata : ThreadMetadata
		// // public creator: string | string [] = "",
		// public createdAt: any = "", // hoping any  will do, but prob not
		
		// public forumFamily: string = "",
		// public forum: string = "",
		// public prefixes: string [] = [],
		// public threadType: string = "",
		// public moderator: string = "",
		// public closed: boolean = false,
		// public invitees: string [] = [],
		// public banned: string [] = []

// 	) {	}
// }

// alt impl
export class Thread {
	constructor(
		public title : string,
		public description : string,
		public metadata : ThreadMetadata
	){ }
}