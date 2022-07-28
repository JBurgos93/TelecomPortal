import { Component, Input, OnInit } from '@angular/core';
import { PhonePlan } from 'src/app/models/phone-plan.model';
import { UserPlansService } from 'src/app/services/user-plans.service';

@Component({
    selector: 'app-billing-page-content',
    templateUrl: './billing-page-content.component.html',
    styleUrls: ['./billing-page-content.component.css']
})
export class BillingPageContentComponent implements OnInit {

    public phonePlans: PhonePlan[] = [];
    public total: number = 0.0;
    public rowNumber: number = 1;

    constructor(private userPlansService: UserPlansService) {
        this.calculateTotalBill();
    }

    ngOnInit(): void {
        this.phonePlans = this.userPlansService.getActivePlansArray();
        this.calculateTotalBill();
    }

    calculateTotalBill(){
        this.total = 0;
        this.phonePlans.forEach(plan => {
            //this.total += plan.cost;
        });
    }
}
