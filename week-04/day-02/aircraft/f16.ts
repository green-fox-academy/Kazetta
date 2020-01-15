'use strict';

import { Aircraft } from "./airCraft";

export class F16 extends Aircraft{
    
    constructor(){
        super('f16',8,30)
    }

    isPriority():boolean {
        return false;
    }

};

