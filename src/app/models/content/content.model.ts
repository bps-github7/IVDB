import { Metadata } from "./metadata.model";
// export interface Content {

  /*
 a very basic interface for site content created by admins or moderators. (vetted contributors)
 this is the data that is shared between all types of content, but the implementations / categories
 will go on to include "watchlists", "news", "streams" and "official reviews"  
	*/
  // title: string,
  // description?: string,
  // body?: string,

  // titleCardImage?: Image,


  // extra stuff
  // images?: Image [],
  // links?: string [],
  // misc?: string []
  // feedback?: UserFeedback

	  
// }
export interface Content {
	id: string,
	title ?: string,
	description ?: string,
	body ?: string,
	family?: string,
	metadata ?: Metadata
}
