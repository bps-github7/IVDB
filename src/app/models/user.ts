export interface User {
    
    username: string;
    email: string;
    //  can't store this as plaintext...
    // password: string,
    isAdmin: boolean;
    uid?: string;
}