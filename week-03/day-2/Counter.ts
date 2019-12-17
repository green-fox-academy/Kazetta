'use strict'

/*Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value*/

class Counter {
    baseNumber:number;
    integer:number;

    constructor(integer:number=0) {
        this.integer = integer;
        this.baseNumber = integer;
    }

    add (input?:number): void {
        if (input===undefined) {
        this.integer += 1;
        } else {
        this.integer += input;
        }
    }

    get (): string {
        return this.integer+"";
    }

    reset():number { 
    return this.baseNumber}
}   

let nCount = new Counter(5);
nCount.add(2);

console.log(nCount);
console.log(nCount.get())
console.log(nCount.reset())

export {Counter}