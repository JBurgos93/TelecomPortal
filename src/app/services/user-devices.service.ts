import { HttpClient } from '@angular/common/http';
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

    createDevice(id: String, phonePlanID: Number, phoneNumber: Number) : void {
        const device: Device = {
            id: id,
            phonePlanID: phonePlanID,
            phoneNumber: phoneNumber
        }
        this.devices.push(device);
    }

    getDevices(): Observable<Device[]>{
        let user = JSON.parse(localStorage.getItem("user")  || '{}');
        return this.http.get<Device[]>("http://localhost:8080/device/all/user/" + user.id);
    }

    deleteDevice(id: String){
        const indexOfDevice = this.devices.findIndex(device => {
            return device.id == id;
        })
        if(indexOfDevice !== -1){
            this.devices = this.devices.splice(indexOfDevice,1);
        }
    }
}
