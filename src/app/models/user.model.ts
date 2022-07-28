export class User {

    private firstname : string;
    private lastname : string;
    private email : string;
    private password : string;
    
    constructor(firstname ?: any, lastname ?:any, email ?: any, password ?: any) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    getEmail() {
        return this.email;
    }
}