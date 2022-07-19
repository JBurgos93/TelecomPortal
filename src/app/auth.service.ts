import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, take, lastValueFrom, firstValueFrom } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class AuthService {

constructor(private http : HttpClient) { }

    public isAuthenticated() : Boolean{
        let userData = localStorage.getItem('userInfo');
        if(userData && JSON.parse(userData)){
            return true;
        } 
        else return false;
    }

    // The types in these parameters were set to 'any' because I don't actually know what type
    // they are supposed to be yet, and VSCode was underlining them in red if I didn't do it
    public setUserInfo(user: any){
        console.log(`SetUserInfo: \n${JSON.stringify(user)}`)
    localStorage.setItem('userInfo', JSON.stringify(user));
  }
    public async validate(email: any, password: any){
        //console.log("auth.service.ts, validate()");
        //console.log(`email: ${email}, password: ${password}`);
        //const result = lastValueFrom(this.http.get('http://localhost:3000/'));
        //const result = await lastValueFrom(this.http.post('http://localhost:3000//api/authenticate', {'username' : email, 'password' : password}));
        //return this.http.post('http://localhost:3000/api/authenticate', {'username' : email, 'password' : password}).toPromise; // toPromise() is deprecated, I guess
        return await lastValueFrom(this.http.post('http://localhost:3000/api/authenticate', {'username' : email, 'password' : password})); // toPromise() is deprecated, I guess
        //console.log(`Result: \n${JSON.stringify(result)}`);
        
        //return result;
    }
}
