import { Component, OnInit } from '@angular/core';
import { DeviceModalService } from 'src/app/services/device-modal.service';
import { UserDevicesService } from 'src/app/services/user-devices.service';

@Component({
    selector: 'app-add-device-modal',
    templateUrl: './add-device-modal.component.html',
    styleUrls: ['./add-device-modal.component.css']
})
export class AddDeviceModalComponent implements OnInit {
    /*
        This modal pops up when the user presses 'Add Device'. This modal allows the user to add a new device to their current plan.
    */
    public id?: Number;
    public phoneNumber?: Number;
    public phonePlanID?: Number;
    displayStyle = "none";

    constructor(private userDevicesService: UserDevicesService) { }

    ngOnInit(): void { }

    addDevice(){
        this.userDevicesService.createDevice(<number>this.id, <number>this.phonePlanID, <Number>this.phoneNumber)
            .subscribe();
    }
}
