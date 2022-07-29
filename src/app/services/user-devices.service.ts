import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Device } from '../models/device.model';
import { User } from '../models/user.model';
import { UserPlansService } from './user-plans.service';
@Injectable({
    providedIn: 'root'
})
export class UserDevicesService {
    private devices: Device[] = [];
    
    constructor(private http: HttpClient, private userPlansService: UserPlansService){
        this.updateDeviceList();
    }

    updateDeviceList(){
        this.getDevices().subscribe(result => {
            this.devices = result;
        });
    }

    createDevice(id: number, planId: number, phoneNumber: Number): Observable<Device> {
        let user = JSON.parse(localStorage.getItem("user")  || '{}');
        let plan = this.userPlansService.getPlan(planId);
        const device = {
            id: id,
            phoneNumber: phoneNumber,
            user,
            plan
        }
        return this.http.post<Device>("http://localhost:8080/device/add", JSON.stringify(device)
            ,{ headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8') });
    }

    getDevices(): Observable<Device[]>{
        let user = JSON.parse(localStorage.getItem("user")  || '{}');
        return this.http.get<Device[]>("http://localhost:8080/device/all/user/" + user.id);
    }

    getDevicesById(id: Number): Device[]{
        return this.devices.filter(x => x.plan == id);
    }

    deleteDevice(id: Number): Observable<unknown>{
        return this.http.delete("http://localhost:8080/device/delete/" + id);
    }
}
