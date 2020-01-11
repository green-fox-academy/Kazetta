'use strict'

import {Domino} from './Domino';
import {Todo} from './Todo';

let dominoes: Domino[] = [new Domino(3,2), new Domino(2,5),new Domino(5,7)];
let todos: Todo[] = [new Todo('buy trash bag', 'high', true),new Todo('do the cleaning', 'low', true),new Todo('do the workout', 'low', false)]

for (let domino of dominoes) {
    domino.printAllFields();
  }
  
  for (let todo of todos) {
    todo.printAllFields();
  }