import { Injectable } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';
import { PhonePlan } from '../models/phone-plan.model';

@Injectable({
    providedIn: 'root'
})
export class UserPlansService {

    private phonePlans: PhonePlan[] = [
        { id: 1, name: "Family Plan 1", cost: "$60.00", description: "Affordable for the whole family.", currentDevices: 0, maxDevices: 8},
        { id: 2, name: "Family Plan 2", cost: "$80.00", description: "Great value for the price, I guess.", currentDevices: 0, maxDevices: 12},
        { id: 3, name: "Family Plan 3", cost: "$100.00", description: "Most expensive.", currentDevices: 0, maxDevices: 16},
        { id: 4, name: "Individual Plan 1", cost: "$10.00", description: "Affordable for your lonely self.", currentDevices: 0, maxDevices: 2},
        { id: 5, name: "Individual Plan 2", cost: "$20.00", description: "Twice the cost, twice the coverage.", currentDevices: 0, maxDevices: 4},
        { id: 6, name: "Individual Plan 3", cost: "$30.00", description: "Why do you have 6 devices/tablets?.", currentDevices: 0, maxDevices: 6}
    ];
    private activePlans: PhonePlan[] = [
        { id: 1, name: "Family Plan 1", cost: "$60.00", description: "Affordable for the whole family.", currentDevices: 0, maxDevices: 8},
        { id: 6, name: "Individual Plan 3", cost: "$30.00", description: "Why do you have 6 devices/tablets?.", currentDevices: 0, maxDevices: 6}
    ];

    constructor() { }

    createPlans() : void{
        // this.phonePlans = [
        //     { name: "Family Plan 1", cost: "$60.00", description: "Affordable for the whole family.", maxDevices: 8},
        //     { name: "Family Plan 2", cost: "$80.00", description: "Great value for the price, I guess.", maxDevices: 12},
        //     { name: "Family Plan 3", cost: "$100.00", description: "Most expensive.", maxDevices: 16},
        //     { name: "Individual Plan 1", cost: "$10.00", description: "Affordable for your lonely self.", maxDevices: 2},
        //     { name: "Individual Plan 2", cost: "$20.00", description: "Twice the cost, twice the coverage.", maxDevices: 4},
        //     { name: "Individual Plan 3", cost: "$30.00", description: "Why do you have 6 devices/tablets?.", maxDevices: 6}
        // ];
        // this.activePlans = [
        //     { name: "Family Plan 1", cost: "$60.00", description: "Affordable for the whole family.", maxDevices: 8},
        //     { name: "Family Plan 2", cost: "$80.00", description: "Great value for the price, I guess.", maxDevices: 12},
        //     { name: "Family Plan 3", cost: "$100.00", description: "Most expensive.", maxDevices: 16},
        //     { name: "Individual Plan 1", cost: "$10.00", description: "Affordable for your lonely self.", maxDevices: 2},
        //     { name: "Individual Plan 2", cost: "$20.00", description: "Twice the cost, twice the coverage.", maxDevices: 4},
        //     { name: "Individual Plan 3", cost: "$30.00", description: "Why do you have 6 devices/tablets?.", maxDevices: 6}
        // ];
    }

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

    removePlan(name: String) {
        console.log("This is the removePlan() method.");
        // this.activePlans.forEach(plan => {
        //     if(plan.name == name){
                
        //     }
        // });
        const indexOfPlan = this.activePlans.findIndex(plan => {
            return plan.name == name;
        })
        if(indexOfPlan !== -1){
            this.activePlans = this.activePlans.splice(indexOfPlan,1);
        }
    }
}
