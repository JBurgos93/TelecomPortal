import { Component, OnInit } from '@angular/core';
import { LoginFormService } from '../login-form/login-form.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn = false;
  public user = JSON.parse(localStorage.getItem("user")  || '{}');

  constructor(private loginService: LoginFormService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();
  }

  logoutUser() {
    this.loginService.logout();
    window.location.href="/login";
  }

}
