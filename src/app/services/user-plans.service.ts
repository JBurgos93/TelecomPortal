import { Injectable } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';
import { PhonePlan } from '../models/phone-plan.model';

@Injectable({
    providedIn: 'root'
})
export class UserPlansService {

    // List of all phone plans
    private phonePlans: PhonePlan[] = [
        { id: 1, name: "Family Plan 1", cost: "$60.00", description: "Affordable for the whole family.", currentDevices: 0, maxDevices: 8, enableAdd: true},
        { id: 2, name: "Family Plan 2", cost: "$80.00", description: "Great value for the price, I guess.", currentDevices: 0, maxDevices: 12, enableAdd: true},
        { id: 3, name: "Family Plan 3", cost: "$100.00", description: "Most expensive.", currentDevices: 0, maxDevices: 16, enableAdd: true},
        { id: 4, name: "Individual Plan 1", cost: "$10.00", description: "Affordable for your lonely self.", currentDevices: 0, maxDevices: 2, enableAdd: true},
        { id: 5, name: "Individual Plan 2", cost: "$20.00", description: "Twice the cost, twice the coverage.", currentDevices: 0, maxDevices: 4, enableAdd: true},
        { id: 6, name: "Individual Plan 3", cost: "$30.00", description: "Why do you have 6 devices/tablets?.", currentDevices: 0, maxDevices: 6, enableAdd: true}
    ];
    // List of the user's active phone plans
    private activePlans: PhonePlan[] = [
        { id: 1, name: "Family Plan 1", cost: "$60.00", description: "Affordable for the whole family.", currentDevices: 0, maxDevices: 8, enableAdd: true},
        { id: 6, name: "Individual Plan 3", cost: "$30.00", description: "Why do you have 6 devices/tablets?.", currentDevices: 0, maxDevices: 6, enableAdd: true}
    ];

    constructor() {
        // Comparing the active plans to all plans
        this.activePlans.forEach(activePlan => {
            this.phonePlans.forEach(phonePlan => {
                if(activePlan.id == phonePlan.id){
                    phonePlan.enableAdd = false;
                }
            });
        });
    }

    createPlans() : void{ }

    incDeviceCount(id: Number) : void{
        const indexOfPlan = this.activePlans.findIndex(plan => {
            return plan.id == id;
        })
        if(indexOfPlan !== -1){
            this.activePlans[indexOfPlan].currentDevices = <number>this.activePlans[indexOfPlan].currentDevices + 1;
        }
    }

    decDeviceCount(id: Number) : void{
        const indexOfPlan = this.activePlans.findIndex(plan => {
            return plan.id == id;
        })
        if(indexOfPlan !== -1){
            this.activePlans[indexOfPlan].currentDevices = <number>this.activePlans[indexOfPlan].currentDevices - 1;
        }
    }
    getAllPlans() : PhonePlan[] {
        return this.phonePlans;
    }
    getActivePlans() : PhonePlan[] {
        return this.activePlans;
    }

    addPlan(id: Number){
        this.activePlans.push(this.phonePlans[<number>id-1]);
        this.phonePlans[<number>id-1].enableAdd = false;
    }
    removePlan(id: Number) {
        const indexOfPlan = this.activePlans.findIndex(plan => {
            return plan.id == id;
        });
        if(indexOfPlan !== -1){
            this.activePlans.splice(indexOfPlan,1);
            this.phonePlans[<number>id-1].enableAdd = true;
        }
    }
}
