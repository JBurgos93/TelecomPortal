import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from 'src/app/auth.service';

@Component({
    selector: 'app-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

    //user: User = new User('','');
    constructor(private authService : AuthService, private router: Router) { }

    public firstName = "";
    public lastName = "";
    public email = "";
    public password1 = "";
    public password2 = "";


    ngOnInit(): void { }
    signUp(){
        if(this.firstName != "" && this.lastName != "" && this.email != "" && this.password1 != "" && this.password2 != "" && this.password1 == this.password2){
            let route = this.router.config.find(r => r.path === 'home');
            if(route){
                this.router.navigateByUrl('/home');
            }
        }
        /*
        this.authService.validate(this.user.email, this.user.password)
            .then((response: any) => {
                console.log(response);
                this.authService.setUserInfo({'user' : response['user']});
                //this.authService.setUserInfo({'user' : response});
                this.router.navigate(['home']);
        });

        
        if(this.user.email == "test@email.com" && this.user.password == "test"){
            let route = this.router.config.find(r => r.path === 'home');
            if(route){
                this.router.navigateByUrl('/home');
            }
        } else{
            console.log("Incorrect email/password combo");
        }
        */
    }
}
