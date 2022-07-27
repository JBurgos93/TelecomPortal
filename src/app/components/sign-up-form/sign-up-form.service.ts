import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { UserDataService } from 'src/app/services/user-data.service';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpFormService {

  constructor(private userDataService: UserDataService, private http : HttpClient) { }


  // POST - USER DATA FROM SIGN UP FORM TO BACKEND
  registration(user:User){ 
    return this.http.post("http://localhost:8080/user/add", user);
  }
}
