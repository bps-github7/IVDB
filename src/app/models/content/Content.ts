import { Timestamp } from 'rxjs/internal/operators/timestamp';
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

  //the image displayed when content is displayed as card or in grid
  // the main image that captures the essesense of the content / article.
  titleCardImage?: string,


  // extra stuff
  images?: (string | string []),
  links?: (string | string []),
  misc?: (string | string [])

  // Metadata
  createdAt: any,
  updatedAt?: any,
  category: string,
  tags?: string [],
  feedback?: UserFeedback
}