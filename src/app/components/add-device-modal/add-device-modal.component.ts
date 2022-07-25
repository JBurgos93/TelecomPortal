import { Component, OnInit } from '@angular/core';
import { DeviceModalService } from 'src/app/services/device-modal.service';
import { UserDevicesService } from 'src/app/services/user-devices.service';

@Component({
    selector: 'app-add-device-modal',
    templateUrl: './add-device-modal.component.html',
    styleUrls: ['./add-device-modal.component.css']
})
export class AddDeviceModalComponent implements OnInit {

    public id?: String;
    public phoneNumber?: Number;
    public phonePlanID?: Number;
    displayStyle = "none";
    //public show = false;

    constructor(private deviceModalService: DeviceModalService, private userDevicesService: UserDevicesService) { }

    ngOnInit(): void { }

    // openPopup() {
    //     this.displayStyle = "block";
    //     this.deviceModalService.setShow(true);
    //   }
    //   closePopup() {
    //     this.displayStyle = "none";
    //     this.deviceModalService.setShow(false);
    // }
    addDevice(){
        this.userDevicesService.createDevice(<String>this.id, <Number>this.phonePlanID, <Number>this.phoneNumber)
    }
}
