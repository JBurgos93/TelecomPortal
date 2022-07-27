import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
    // private user: User = {
    //     email: "",
    //     password: ""
    // }

    constructor(private http: HttpClient) { }


    getUser(email: string) : Observable<User>{
      return this.http.get<User>("http://localhost:8080/user/find/" + email);
    }

}
