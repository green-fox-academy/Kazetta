'use strict';

import { Aircraft } from "./airCraft";

export class F35 extends Aircraft{
    constructor(){
        super('f35',12,50)
    }

    isPriority():boolean {
        return true;
    }

};
