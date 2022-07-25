import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceModalService {

    private showDeviceModal?: Boolean = false;
    
    private planID?: Number = 0;
    private displayStyle?: String = "none";

    constructor() { }

    getShow(): Boolean{
        return <Boolean>this.showDeviceModal;
    }
    show(id: Number): void{
        this.showDeviceModal = true;
        this.planID = id;
        this.displayStyle = "block";
    }
    hide(): void{
        this.displayStyle = "none";
    }
}
