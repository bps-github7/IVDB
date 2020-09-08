export interface User {
    
    email: string,
    displayName: string,
    //  can't store this as plaintext...
    // password: string,
    isAdmin?: boolean,
    uid?: string
}