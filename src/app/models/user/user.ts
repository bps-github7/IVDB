/* display name is what the user provided as a username
username is for internal use (route params in url, document id in database) 
 */
export interface User {
    uid: string,
    email : string,
    username : string,
    displayname ?: string,
    isAdmin? : boolean
}