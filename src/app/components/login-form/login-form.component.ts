import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormService } from './login-form.service';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    
    //user = new User('','');
    
    // user: User = {
    //     email: "",
    //     password: ""
    // };
    
    credentials = {
        username : '',
        password : ''
    }

    //private user = {
    //    email: String,
    //    password: String
    //};

    constructor(private loginService : LoginFormService, private userDataService: UserDataService,
         private router: Router) { }

    ngOnInit(): void {
    }
    // This is where there should be a query to the database to check if the login information is valid
    // Right now it just checks against some hard-coded strings
    login(){
        // console.log(`email = ${this.user.email}, password = ${this.user.password}`)
        // /*
        // this.authService.validate(this.user.email, this.user.password)
        //     .then((response: any) => {
        //         console.log(response);
        //         this.authService.setUserInfo({'user' : response['user']});
        //         //this.authService.setUserInfo({'user' : response});
        //         this.router.navigate(['home']);
        // });
        // */

        
        // if(this.user.email == "test@email.com" && this.user.password == "test"){
        //     let route = this.router.config.find(r => r.path === 'home');
        //     if(route){
        //         this.router.navigateByUrl('/home');
        //     }
        // } else{
        //     console.log("Incorrect email/password combo");
        // }
        if ((this.credentials.username != '' && this.credentials.password != '') 
            && (this.credentials.username != null && this.credentials.password != null)) {
            
            console.log("Submit");
            this.loginService.generateToken(this.credentials).subscribe({
                next: (response: any) => {
                    console.log(response.token);
                    this.loginService.loginUser(response.token);
                },
                error: (err) => console.log(err)
            })

            this.userDataService.getUser(this.credentials.username).subscribe({
                next: (response: any) => {
                    console.log(response);
                    localStorage.setItem("user", JSON.stringify(response));
                    window.location.href="/home";
                },
                error: (err) => console.log(err)
            })
        } else {
            console.log("Fields are empty");
        }

    }


}
