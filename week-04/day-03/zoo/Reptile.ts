'use strict'

import { Animal } from './Animal'

export class Reptile extends Animal {
    constructor (name:string, age:number=50,breed:string='oviparous'){
        super(name, age, breed);
    }
}