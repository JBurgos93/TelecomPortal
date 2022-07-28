import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

    constructor(private http: HttpClient) { }


    getUser(email: string) : Observable<User>{
      return this.http.get<User>("http://localhost:8080/user/find/" + email);
    }

}
