import { Component, Input, OnInit } from '@angular/core';
import { UserPlansService } from 'src/app/services/user-plans.service';

@Component({
  selector: 'app-new-plans-card',
  templateUrl: './new-plans-card.component.html',
  styleUrls: ['./new-plans-card.component.css']
})
export class NewPlansCardComponent implements OnInit {

    @Input() id?: Number;
    @Input() name?: String;
    @Input() cost?: String;
    @Input() description?: String;
    @Input() maxDevices?: Number;
    @Input() enableAdd?: Boolean;

    constructor(private userPlansService: UserPlansService) { }

    ngOnInit(): void { }

    addPlan(){
        this.userPlansService.addPlan(<Number>this.id);
    }
}
