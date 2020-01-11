'use strict'

import { Vehicle } from './Vehicle'
import { Flyable } from './flyable'

export class Helicopter extends Vehicle implements Flyable {
    constructor(color:string, mileage:number = 0, serial:string) {
        super(color,mileage,serial); 
    }
    land(): boolean {
        return true;
    };
    fly():boolean {
        return true;
    };
    takeOff(): boolean {
        return true;
    };
}
