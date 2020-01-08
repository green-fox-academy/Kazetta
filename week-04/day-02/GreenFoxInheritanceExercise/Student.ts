'use strict'

import { Person } from "./Person";

export class Student extends Person {
    previousOrganization:string;
    skippedDays:number;
    
    constructor(name: string = "Jane Doe", age: number=30, gender: string="female",previousOrganization: string="School of Life", skippedDays: number=0) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays; 
    }
    getGoal1() {
        console.log("Be a junior software developer.")
    }
    introduce() {
        console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender 
        + " from " + this.previousOrganization +" who skipped " + this.skippedDays + 
        " days from the course already.")
    }
    skipDays(numberOfDays: number){
        this.skippedDays = this.skippedDays + numberOfDays;
    }
    
}

let student1 = new Student("Jane Doe",30,"female","School of Life",0);