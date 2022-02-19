
export interface Forum {
	family : string;
	title : string;
	description : string;
	creator : string;

	//optional stuff we deal with after tis fresh meatball!
	moderator?: (string | string []); 
	threads?: any [];
	id?: string;
}