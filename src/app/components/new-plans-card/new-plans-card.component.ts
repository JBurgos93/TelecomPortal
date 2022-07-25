import { Component, Input, OnInit } from '@angular/core';
import { UserPlansService } from 'src/app/services/user-plans.service';

@Component({
  selector: 'app-new-plans-card',
  templateUrl: './new-plans-card.component.html',
  styleUrls: ['./new-plans-card.component.css']
})
export class NewPlansCardComponent implements OnInit {

    @Input() name?: String;
    @Input() cost?: String;
    @Input() description?: String;
    @Input() maxDevices?: Number;

    public enableAdd: Boolean = true;

    constructor(private userPlansService: UserPlansService) {
    }

    ngOnInit(): void {
        this.enableAdd = this.userPlansService.findDuplicate(<String>this.name);
    }

    addPlan(){
        this.userPlansService.addPlan(<String>this.name);
        this.enableAdd = false;
    }
}
