'use strict'

import { Student } from "./Student";
import { Mentor } from "./Mentor";

export class Cohort {
    name:string;
    students:Student []  = [];
    mentors:Mentor [] = [];

    addStudent(student:Student) {
        this.students.push(student)
    }
    addMentor(mentor:Mentor) {
        this.mentors.push(mentor)
    }
    info(){
        console.log("The " + this.name + " cohort has " + this.students.length + this.mentors.length + "mentors.")
    }

    constructor (name:string="reddit") {
        this.name = name;
        this.students = [];
        this.mentors = [];
    }
}

let cohort1 = new Cohort("reddit");