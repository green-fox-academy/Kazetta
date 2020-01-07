'use strict'

import { Person } from './person'
import { Student } from './student'
import { Sponsor } from './sponsor'
import { Mentor } from './mentor'

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male','BME' );
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148,'male','senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
let sponsor = new Sponsor();
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

people.forEach((person) => {
  person.introduce();
  person.getGoal();
});