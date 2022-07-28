import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Device } from '../models/device.model';
import { PhonePlan } from '../models/phone-plan.model';

@Injectable({
    providedIn: 'root'
})
export class UserPlansService {

    // List of all phone plans
    private phonePlans: PhonePlan[] = [
        { id: 1, name: "Family Plan 1", cost: 60, description: "Affordable for the whole family.", currentDevices: 0, maxDevices: 8, enableAdd: true},
        { id: 2, name: "Family Plan 2", cost: 80, description: "Great value for the price, I guess.", currentDevices: 0, maxDevices: 12, enableAdd: true},
        { id: 3, name: "Family Plan 3", cost: 100, description: "Most expensive.", currentDevices: 0, maxDevices: 16, enableAdd: true},
        { id: 4, name: "Individual Plan 1", cost: 10, description: "Affordable for your lonely self.", currentDevices: 0, maxDevices: 2, enableAdd: true},
        { id: 5, name: "Individual Plan 2", cost: 20, description: "Twice the cost, twice the coverage.", currentDevices: 0, maxDevices: 4, enableAdd: true},
        { id: 6, name: "Individual Plan 3", cost: 30, description: "Why do you have 6 devices/tablets?.", currentDevices: 0, maxDevices: 6, enableAdd: true}
    ];
    // List of the user's active phone plans
    private activePlans: PhonePlan[] = [];

    constructor(private http: HttpClient) {

        this.getActivePlans().subscribe(
            result => {
                this.activePlans = result;
                // Comparing the active plans to all plans
                this.activePlans.forEach(activePlan => {
                    this.phonePlans.forEach(phonePlan => {
                        if(activePlan.id == phonePlan.id){
                            phonePlan.enableAdd = false;
                            localStorage.setItem("plans", JSON.stringify(this.phonePlans));
                        }
                    });
                });
            }
        );        
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
    getActivePlans() : Observable<PhonePlan[]> {
        let user = JSON.parse(localStorage.getItem("user")  || '{}');
        return this.http.get<PhonePlan[]>("http://localhost:8080/device/plans/" + user.id);
    }

    getActivePlansArray(): PhonePlan[] {
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
