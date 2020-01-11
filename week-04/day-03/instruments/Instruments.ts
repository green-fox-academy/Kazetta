'use strict'


export abstract class Instrument {
    name:string;

    constructor(name:string) {
        this.name = name;
    } 

    play() {
    };
};

export abstract class StringedInstrument extends Instrument {
    numberOfStrings:number;
    
    constructor(name:string, numberOfStrings:number) {
        super(name);
        this.numberOfStrings = numberOfStrings;
    }

    sound():string {
        return '';
    }
}

export class ElectricGuitar extends StringedInstrument {
        

    constructor(numberOfstrings:number=6) {
        super("Electric Guitar", numberOfstrings);
    }
    sound():string {
        return 'Twang'
    }
    play() {
        console.log(`${this.name} a ${this.numberOfStrings} -stringed instrument that goes ${this.sound()}`)
    }
} 

export class BassGuitar extends StringedInstrument {
    
    constructor(numberOfstrings:number=4) {
        super("Bass Guitar",numberOfstrings,);
    }

    sound ():string {
        return 'Duum-duum-duum';
    }
    play() {
        console.log(`${this.name} a ${this.numberOfStrings} -stringed instrument that goes ${this.sound()}`)
    }
}

export class Violin extends StringedInstrument {

    constructor(name:string="Violin",numberOfStrings:number=4) {
        super(name,numberOfStrings);
    }

    sound ():string {
        return 'Screech'
    }
    play() {
        console.log(`${this.name} a ${this.numberOfStrings} -stringed instrument that goes ${this.sound()}`)
    }
}