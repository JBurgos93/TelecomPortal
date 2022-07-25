import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-billing-content',
    templateUrl: './billing-content.component.html',
    styleUrls: ['./billing-content.component.css']
})
export class BillingContentComponent implements OnInit {

    public displayStyle: String = "none";

    constructor() { }

    ngOnInit(): void { }

    showBilling = () => this.displayStyle = "block";
    hide = () => this.displayStyle = "none";
    
}
