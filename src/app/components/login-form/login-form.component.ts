import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    
    //user = new User('','');
    
    user: User = new User('','');
    
    //private user = {
    //    email: String,
    //    password: String
    //};

    constructor(private authService : AuthService, private router: Router) { }

    ngOnInit(): void {
    }
    // This is where there should be a query to the database to check if the login information is valid
    // Right now it just checks against some hard-coded strings
    login(){
        console.log(`email = ${this.user.email}, password = ${this.user.password}`)
        /*
        this.authService.validate(this.user.email, this.user.password)
            .then((response: any) => {
                console.log(response);
                this.authService.setUserInfo({'user' : response['user']});
                //this.authService.setUserInfo({'user' : response});
                this.router.navigate(['home']);
        });
        */

        
        if(this.user.email == "test@email.com" && this.user.password == "test"){
            let route = this.router.config.find(r => r.path === 'home');
            if(route){
                this.router.navigateByUrl('/home');
            }
        } else{
            console.log("Incorrect email/password combo");
        }
    }


}
