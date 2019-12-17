'use strict'

/*Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one*/

class Animal {
    hunger: number;
    thirst: number;

    constructor(hunger:number = 50, thirst:number = 50) {
        this.hunger = hunger
        this.thirst = thirst
    }

public eat(): void {
    this.hunger -= 1;
    }

public drink(): void {
    this.thirst -= 1;
    }

public play(): void {
    this.hunger += 1
    this.thirst += 1
    }

}

let a1 = new Animal();
a1.eat();
a1.drink();
a1.play();

let a2 = new Animal();
a2.drink();
a2.play();

console.log(a1) 
console.log(a2)

export {Animal}