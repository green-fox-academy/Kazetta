'use strict'

import {Animal} from './Animal'

export class Mammal extends Animal {
    constructor (name:string, age: number = 8, breed:string='viviparous'){
        super(name,age,breed);
    }
}