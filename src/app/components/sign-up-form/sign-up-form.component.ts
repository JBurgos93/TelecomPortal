import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { SignUpFormService } from './sign-up-form.service';
import { MustMatch } from './helpers/must-match.validator';
@Component({
    selector: 'app-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.css']
})

export class SignUpFormComponent implements OnInit {

  regForm!:FormGroup
  public emailExists = false;

  constructor(
    private fb : FormBuilder,
    private signupService : SignUpFormService    
    ) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      email:['',[Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")]],
      password: ['', [Validators.required, Validators.pattern("[a-zA-z0-9@_]{6,}")]],
      confirmPassword: ['', [Validators.required, Validators.pattern("[a-zA-z0-9@_]{6,}")]]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
  }

  register(){
    let user : User
    user = new User(
          this.regForm.value.firstname,
          this.regForm.value.lastname,
          this.regForm.value.email,
          this.regForm.value.password
        );
    
    this.signupService.registration(user).subscribe({
      next: () => this.regForm.reset(), 
      error: (err: any) => { 
          this.emailExists = true;
          console.log(err);
        }
    });    
  }
}