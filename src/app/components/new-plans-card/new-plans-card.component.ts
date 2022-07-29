import { Component, Input, OnInit } from '@angular/core';
import { UserPlansService } from 'src/app/services/user-plans.service';

@Component({
  selector: 'app-new-plans-card',
  templateUrl: './new-plans-card.component.html',
  styleUrls: ['./new-plans-card.component.css']
})
export class NewPlansCardComponent implements OnInit {
    /*
        Is inside of New-Plans-Container. Each card represents one of the available plans.
        There is a button for adding the plan to the user's account. If the plan is already active, the button is hidden.
    */
    @Input() id?: Number;
    @Input() name?: String;
    @Input() cost?: Number;
    @Input() description?: String;
    @Input() maxDevices?: Number;
    @Input() enableAdd?: Boolean;

    constructor(private userPlansService: UserPlansService) { }

    ngOnInit(): void { }

    addPlan(){
        this.userPlansService.addPlan(<Number>this.id);
    }
}
