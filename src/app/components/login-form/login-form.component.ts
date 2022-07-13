import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    user: User = new User('','');
    public whichForm: string;

    constructor(private router: Router) {
        this.whichForm = "login";
    }

    onSubmit(): void {
        if(this.user.email == "test@email.com" && this.user.password == "test"){
            let route = this.router.config.find(r => r.path === 'home');
            if(route){
                this.router.navigateByUrl('/home');
            }
        } else{
            console.log("Incorrect email/password combo");
        }
    }

    ngOnInit(): void {
    }

}
