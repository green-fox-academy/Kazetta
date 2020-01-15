'use strict';

import { Aircraft } from "./airCraft";
import { F16 } from './F16';
import { F35 } from './F35';

class Carrier {
    listOfAircraft:Aircraft [] = [];
    storeOfAmmo: number;
    healthPoint:number;

    constructor(ammo: number, hp: number){
        this.storeOfAmmo=ammo;
        this.healthPoint=hp;
    };

    add(type:string):void{
        if(type ==='F35') {
            this.listOfAircraft.push(new F35());
        } else if (type === 'F16') {
            this.listOfAircraft.push(new F16());
        }
    };

    fill(): void{ 
        if(this.storeOfAmmo === 0){
            throw 'there is no ammo';
        }else{
            for (let i:number =0; i < this.listOfAircraft.length; i++) {
                if(!this.listOfAircraft[i].isPriority()) {
                    this.storeOfAmmo = this.listOfAircraft[i].refill(this.storeOfAmmo);
                }
            }
        }
    };

    getAllDamage():number {
        let allDamage = 0;
        for(let i:number; i < this.listOfAircraft.length; i++) {
            allDamage = allDamage + this.listOfAircraft[i].getMaxDamage();
        }
        return allDamage;
    };

    fight(anotherCarrier:Carrier): void {
        anotherCarrier.healthPoint = anotherCarrier.healthPoint - this.getAllDamage();
    };

    getAircraftList(): string {
        let list: string = '';
        for (let i: number = 0; i < this.listOfAircraft.length; i++) {
          list = list + this.listOfAircraft[i].getStatus() + '\r\n';
        }
        return list;
      };

    getStatus():string {
        if(this.healthPoint === 0) {
            return `It's dead Jim :(`;
        }
        return `HP: ${this.healthPoint}, Aircraft count: ${this.listOfAircraft.length}, Ammo Storage: ${this.storeOfAmmo}, Total Damage: ${this.getAllDamage()}, Aircrafts: 
        ${this.getAircraftList()}`;
    };
};

let motherShip = new Carrier(2300, 5000);
motherShip.add('F35');
motherShip.add('F35');
motherShip.add('F35');
motherShip.add('F16');
motherShip.add('F16');
motherShip.fill();
console.log(motherShip.getStatus());