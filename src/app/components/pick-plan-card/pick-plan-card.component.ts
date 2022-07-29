import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeviceModalService } from 'src/app/services/device-modal.service';
import { UserPlansService } from 'src/app/services/user-plans.service';
import { PhonePlan } from 'src/app/models/phone-plan.model';
import { UserDevicesService } from 'src/app/services/user-devices.service';
import { Device } from 'src/app/models/device.model';

@Component({
    selector: 'app-pick-plan-card',
    templateUrl: './pick-plan-card.component.html',
    styleUrls: ['./pick-plan-card.component.css']
})
export class PickPlanCardComponent implements OnInit {
    /*
        Is inside of View-Plans-Container. Each card represents an active plan in the user's account.
        It tracks how many devices are currently attached to the plan. The remove device button is hidden if no devices are in the plan.
        The add device button is hidden if the max device limit has already been reached.
    */

    public phonePlan?: PhonePlan;
    public devices: Device[] = [];
    public devicePerPlanCount?: number;

    @Input() id?: Number;
    @Input() name?: String;
    @Input() cost?: Number;
    @Input() description?: String;
    @Input() currentDevices?: Number;
    @Input() maxDevices?: Number;

    public enableAdd?: Boolean = true;
    public enableRem?: Boolean = true;

    public displayStyle1?: String = "none";
    public displayStyle2?: String = "none";

    public phoneNumber?: Number;
    public phoneID?: Number;

    constructor(private userPlansService: UserPlansService, private deviceModalService: DeviceModalService, private userDevicesService: UserDevicesService){
    }

    ngOnInit(): void { 
        this.devices = this.userDevicesService.getDevicesById(<Number>this.id);
        this.currentDevices = this.devices?.length;
        this.checkButtonEnabling();
    }

    checkButtonEnabling = () => {
        if(<Number>this.currentDevices <= 0){
            this.enableRem = false;
        } else{
            this.enableRem = true;
        }
        if(<Number>this.currentDevices >= <Number>this.maxDevices){
            this.enableAdd = false;
        } else{
            this.enableAdd = true;
        }
    }

    addDevice = () => {
        this.displayStyle1 = "block";
    }

    removeDevice = () => {
        this.displayStyle2 = "block";
    }

    deletePlan = () => {
        this.devices.forEach(device => {
            this.userDevicesService.deleteDevice(<number><unknown>device.id)
                .subscribe(result => {
                    this.userDevicesService.updateDeviceList();
                });
        });
        this.userPlansService.removePlan(<Number>this.id);
    }

    hide1 = () => {
        this.displayStyle1 = "none";
    }

    hide2 = () => {
        this.displayStyle2 = "none";
    }

    submitRemoveDevice = () => {
        this.userDevicesService.deleteDevice(<number><unknown>this.phoneID?.toString().split(" : ")[0])
            .subscribe( result => {
                this.userDevicesService.updateDeviceList();
                this.userDevicesService.getDevices().subscribe(data => {
                    this.devices = data.filter(x => x.plan == this.id);
                    this.devices = this.userDevicesService.getDevicesById(<Number>this.id);
                    this.currentDevices = this.devices?.length;
                    this.checkButtonEnabling();
                });

            });
            this.phoneNumber = new Number;
            this.phoneID = new Number;
        this.displayStyle2 = "none";
    }

    submitDevice = () => {
        if(this.phoneNumber?.toString().length == 10){
            this.userDevicesService.createDevice(<number>this.phoneID, <number>this.id, <Number>this.phoneNumber)
            .subscribe( result => {
                this.userDevicesService.updateDeviceList();
                this.userDevicesService.getDevices().subscribe(data => {
                    this.devices = data.filter(x => x.plan == this.id);
                    this.devices = this.userDevicesService.getDevicesById(<Number>this.id);
                    this.currentDevices = this.devices?.length;
                    this.checkButtonEnabling();
                });
            });
            this.phoneNumber = new Number;
            this.phoneID = new Number;
            this.displayStyle1 = "none";
        }
        
    }
}
