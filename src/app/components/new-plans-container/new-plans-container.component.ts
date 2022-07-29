import { Component, OnInit } from '@angular/core';
import { UserPlansService } from 'src/app/services/user-plans.service';
import { PhonePlan } from 'src/app/models/phone-plan.model';
@Component({
    selector: 'app-new-plans-container',
    templateUrl: './new-plans-container.component.html',
    styleUrls: ['./new-plans-container.component.css']
})
export class NewPlansContainerComponent implements OnInit {
    /*
        Is in the Plan Page. Generates a series of cards, one for each Phone Plan in the system. It passes each card it's own phone plan information.
    */
    public phonePlans: PhonePlan[] = [];
    public enableAddBtns: Boolean[] = [];

    constructor(private userPlansService: UserPlansService) { 
    }
    ngOnInit(){
        this.phonePlans = this.userPlansService.getAllPlans();
    }

}
