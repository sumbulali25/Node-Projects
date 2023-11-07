"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
class Student {
    constructor(id, name, studentNumber) {
        this.id = id;
        this.name = name;
        this.studentNumber = studentNumber;
    }
}
class StudentManagementSystem {
    constructor() {
        this.students = [];
    }
    addStudent(id, name, studentNumber) {
        const student = new Student(id, name, studentNumber);
        this.students.push(student);
    }
    getStudents() {
        return this.students;
    }
    displayStudents() {
        console.log('List of Students:');
        this.students.forEach(student => {
            console.log(`ID: ${student.id}, Name: ${student.name}, Student Number: ${student.studentNumber}`);
        });
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const studentSystem = new StudentManagementSystem();
        while (true) {
            const choice = yield inquirer_1.default.prompt([
                {
                    type: 'list',
                    name: 'action',
                    message: 'Select an action:',
                    choices: ['Add Student', 'Display Students', 'Exit']
                }
            ]);
            if (choice.action === 'Add Student') {
                const studentInfo = yield inquirer_1.default.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Enter student name:'
                    },
                    {
                        type: 'input',
                        name: 'studentNumber',
                        message: 'Enter student number:'
                    }
                ]);
                const id = studentSystem.getStudents().length + 1;
                studentSystem.addStudent(id, studentInfo.name, studentInfo.studentNumber);
                console.log('Student added successfully!');
            }
            else if (choice.action === 'Display Students') {
                studentSystem.displayStudents();
            }
            else {
                break;
            }
        }
    });
}
main();
