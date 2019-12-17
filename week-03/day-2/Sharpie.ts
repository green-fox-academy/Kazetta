'use strict'

/*Create Sharpie class
We should know about each 
sharpie their 
color (which should be a string), 
width (which will be a floating point number), 
inkAmount (another floating point number)

When creating one, we need to specify the 
color and the 
width

Every sharpie is created with a 
default 100 as inkAmount

We can use() the sharpie objects
which decreases inkAmount*/

class Sharpie {
    color: string;
    swidth: number;
    inkAmount: number;

    constructor(color:string, swith:number, inkAmount:number = 100) {
        this.color = color
        this.swidth = swith
        this.inkAmount = inkAmount
    }

use (): void {
    this.inkAmount -= 1
    }
}

let sPencil = new Sharpie("black",0.5);
sPencil.use();

console.log(sPencil);

export {Sharpie}