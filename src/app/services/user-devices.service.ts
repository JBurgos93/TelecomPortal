import { Injectable } from '@angular/core';
import { Device } from '../models/device.model';
@Injectable({
    providedIn: 'root'
})
export class UserDevicesService {
    private devices: Device[] = [];
    
    constructor() { }

    createDevice(id: String, phonePlanID: Number, phoneNumber: Number) : void {
        const device: Device = {
            id: id,
            phonePlanID: phonePlanID,
            phoneNumber: phoneNumber
        }
        this.devices.push(device);
    }

    getDevices = () => {
        return this.devices;
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
