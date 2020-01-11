'use strict'

import {Animal} from '../zoo/Animal';
import {Flyable} from './flyable';

class Bird extends Animal implements Flyable {
    constructor(name:string, age:number=3, breed:string='oviparous'){
        super(name, age, breed);
    }
    land(): boolean {
        return true;
    };
    fly(): boolean {
        return true;
    }
    takeOff(): boolean {
        return true;
    };
};