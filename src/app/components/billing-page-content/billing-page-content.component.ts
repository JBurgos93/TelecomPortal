import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { PhonePlan } from 'src/app/models/phone-plan.model';
import { UserDevicesService } from 'src/app/services/user-devices.service';
import { UserPlansService } from 'src/app/services/user-plans.service';

@Component({
    selector: 'app-billing-page-content',
    templateUrl: './billing-page-content.component.html',
    styleUrls: ['./billing-page-content.component.css']
})
export class BillingPageContentComponent implements OnInit {

    public phonePlans: PhonePlan[] = [];
    public allDevices: Device[] = [];
    public total: number = 0.0;
    public rowNumber: number = 1;

    constructor(private userPlansService: UserPlansService, private userDevicesService: UserDevicesService) {
        this.calculateTotalBill();
    }

    ngOnInit(): void {
        this.userDevicesService.getDevices().subscribe(result => { 
            this.allDevices = result;
            this.phonePlans = this.userPlansService.getActivePlansArray();
            this.calculateTotalBill();
        });
    }

    calculateTotalBill(){
        let plans = this.userPlansService.getAllPlans();
        //console.log(`calculate bill: ${JSON.stringify(plans)}`);
        let sum = 0;
        let temp = true;
        for(let i=1; i<7; i++){
            temp = true;
            this.allDevices.forEach( device => {
                //console.log(`device.plan == i -> ${device.plan == i}`)
                if(device.plan == i && temp){
                    sum += <number>plans[i-1].cost;
                    //console.log(`${}`);
                    temp = false;
                }
            })
        }
        this.total = sum;
        // this.allDevices.forEach( device => {
        //     this.phonePlans.forEach( plan => {
        //         if (plan.id == device.plan)
        //             this.total += <number>plan.cost;
        //     })
        // })
    }
}
