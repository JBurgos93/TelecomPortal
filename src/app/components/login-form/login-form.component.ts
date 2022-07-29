import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormService } from './login-form.service';
import { UserDataService } from 'src/app/services/user-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
       
    regForm!:FormGroup

    credentials = {
        username : '',
        password : ''
    }

    constructor(private loginService : LoginFormService, private userDataService: UserDataService,
         private router: Router, private fb : FormBuilder) { }

    ngOnInit(): void {
        this.regForm = this.fb.group({
            email:['',[Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]],
            password: ['', [Validators.required, Validators.pattern("[a-zA-z0-9@_]{6,}")]]
        });
    }
    
    login(){
        if ((this.credentials.username != '' && this.credentials.password != '') 
            && (this.credentials.username != null && this.credentials.password != null)) {
            
            this.loginService.generateToken(this.credentials).subscribe({
                next: (response: any) => {
                    this.loginService.loginUser(response.token);
                },
                error: (err) => console.log(err)
            })

            this.userDataService.getUser(this.credentials.username).subscribe({
                next: (response: any) => {
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
