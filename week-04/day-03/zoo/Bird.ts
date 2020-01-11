'use strict'

import {Animal} from './Animal';

export class Bird extends Animal {

    constructor(name:string, age:number=3, breed:string='oviparous') {
        super(name, age, breed);
    }
}