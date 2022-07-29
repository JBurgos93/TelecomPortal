import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-billing-content',
    templateUrl: './billing-content.component.html',
    styleUrls: ['./billing-content.component.css']
})
export class BillingContentComponent implements OnInit {
    /*
        Is on the Home Page, inside of Billing-Container. Has a button for opening a modal that displays a detailed breakdown of the User's monthly bill.
    */
    public displayStyle: String = "none";

    constructor() { }

    ngOnInit(): void { }

    showBilling = () => this.displayStyle = "block";
    hide = () => this.displayStyle = "none";
    
}
