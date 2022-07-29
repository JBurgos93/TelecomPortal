import { Component, Input, OnInit } from '@angular/core';
import { UserPlansService } from 'src/app/services/user-plans.service';
import { PhonePlan } from 'src/app/models/phone-plan.model';

@Component({
    selector: 'app-view-plans-container',
    templateUrl: './view-plans-container.component.html',
    styleUrls: ['./view-plans-container.component.css']
})

export class ViewPlansContainerComponent implements OnInit {
    /*
        Is on the Plan Page. Generates a card for each active plan on the user's account. Passes each card it's own phone plan data.
    */
    public activePlans: PhonePlan[] = [];

    constructor(private userPlansService: UserPlansService) { }

    ngOnInit(){
        this.activePlans = this.userPlansService.getActivePlansArray();
    }

}
