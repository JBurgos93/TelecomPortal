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

    public phonePlan?: PhonePlan;
    public devices?: Device[] = [];

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
        this.userDevicesService.getDevices().subscribe(result => { 
            this.devices = result;
            console.log(this.devices);
            //this.getDevices();
        });
        this.checkButtonEnabling();}

    // getDevices = () => {
    //     let temp: Device[] = this.devices!;
    //     console.log("in here")
    //     temp.forEach(device => {
    //         if(device.plan == this.id){
    //             console.log("here?")
    //             this.devices?.push(device);
    //         }
    //     });
    // }

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
            .subscribe({
                next: (data) => console.log(data),
                error: (e) => console.error(e)
            });
        console.log(this.phoneID?.toString().split(" : ")[0]);
        console.log("in submitRemoveDevice");
        this.displayStyle2 = "none";
        this.userPlansService.decDeviceCount(<Number>this.id);
        this.currentDevices = <number>this.currentDevices - 1;
        //this.getDevices();
        this.checkButtonEnabling();
    }

    submitDevice = () => {
        this.userDevicesService.createDevice(<number>this.phoneID, <number>this.id, <Number>this.phoneNumber)
            .subscribe({
                next: (data) => console.log(data),
                error: (e) => console.error(e)
            });
        console.log("in submitDevice");
        this.displayStyle1 = "none";
        this.userPlansService.incDeviceCount(<Number>this.id);
        this.currentDevices = <number>this.currentDevices + 1;
        //this.getDevices();
        this.checkButtonEnabling();
    }
}
