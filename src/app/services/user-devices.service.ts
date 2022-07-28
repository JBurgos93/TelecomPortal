import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Device } from '../models/device.model';
import { User } from '../models/user.model';
@Injectable({
    providedIn: 'root'
})
export class UserDevicesService {
    private devices: Device[] = [];
    
    constructor(private http: HttpClient) { }

    createDevice(id: number, planId: number, phoneNumber: Number): Observable<Device> {
        let user = JSON.parse(localStorage.getItem("user")  || '{}');
        let plans = JSON.parse(localStorage.getItem("plans")   || '{}');
        let plan = plans[planId - 1];
        const device = {
            id: id,
            phoneNumber: phoneNumber,
            user,
            plan
        }
        console.log("create devices called");
        console.log(JSON.stringify(device));
        return this.http.post<Device>("http://localhost:8080/device/add", JSON.stringify(device)
            ,{ headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8') });
    }

    getDevices(): Observable<Device[]>{
        let user = JSON.parse(localStorage.getItem("user")  || '{}');
        return this.http.get<Device[]>("http://localhost:8080/device/all/user/" + user.id);
    }

    deleteDevice(id: Number): Observable<unknown>{
        return this.http.delete("http://localhost:8080/device/delete/" + id);
    }
}
