import { Component, Input, OnInit } from '@angular/core';

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
    constructor() { }

    ngOnInit(): void {
    }

}
