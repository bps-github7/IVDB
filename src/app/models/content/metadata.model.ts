
export interface Metadata {
	// this is a tricky little fig twiddler,,,
	createdAt: any,
	updatedAt?: any,
	creator: string | string [], 
	family: string,
	tags?: string [],
}

export class Metadata {
	constructor(
		public creator : string | string [],
		public family : string,
		public createdAt: any
	) {}	
}

export class ContentMetadata extends Metadata {
	constructor(
		public creator : string | string [],
		public createdAt: any,
		public tags : string [],
	) {
		super(creator, createdAt, "CONTENT")
	}
}

export class ThreadMetadata extends Metadata {
	constructor(
		public creator : string | string [],
		public createdAt: any,
	
		// categorical properties
		public forumFamily?: string,
		public forum?: string,
		public prefixes?: string [],
		public threadType?: string,
		
		// administrative properties
		public moderator?: string,
		public closed?: boolean,
		public invitees?: string [],
		public banned?: string []
		) {
		super(creator, createdAt, "THREAD")
	}
}