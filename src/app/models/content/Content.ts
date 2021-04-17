import { UserFeedback } from "./user-feedback";

export interface Content {

  /*
  Original/unique data and materials
  associated with this piece of content:


  description: short summary, a bio or abstract
  body : the actual content being 
  */
  uid?: string,

  title: string,
  creator: string,
  description?: string,
  body?: string,


  // extra stuff
  images?: (string | string []),
  links?: (string | string []),
  misc?: (string | string [])

  // Metadata
  created: string, // timestamp
  category: string,
  tags?: string [],
  feedback?: UserFeedback
}