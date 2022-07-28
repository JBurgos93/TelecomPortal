import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormService } from '../login-form/login-form.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn = false;
  public user = JSON.parse(localStorage.getItem("user")  || '{}');

  constructor(private loginService: LoginFormService, private router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
  }

  logoutUser() {
    this.loginService.logout();
    // window.location.href="/login";
    this.router.navigate(['/login']);
  }

}
