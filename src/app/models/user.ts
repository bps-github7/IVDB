export interface User {
    
    name: string;
    email: string;
    //  can't store this as plaintext...
    // password: string,
    isAdmin: boolean;
    uid?: string;
}