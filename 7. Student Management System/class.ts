import inquirer from 'inquirer';

class Student {
  constructor(public id: number, public name: string, public studentNumber: string) {}
}

class StudentManagementSystem {
  private students: Student[] = [];

  addStudent(id: number, name: string, studentNumber: string): void {
    const student = new Student(id, name, studentNumber);
    this.students.push(student);
  }

  getStudents(): Student[] {
    return this.students;
  }

  displayStudents(): void {
    console.log('List of Students:');
    this.students.forEach(student => {
      console.log(`ID: ${student.id}, Name: ${student.name}, Student Number: ${student.studentNumber}`);
    });
  }
}

async function main() {
  const studentSystem = new StudentManagementSystem();

  while (true) {
    const choice = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Select an action:',
        choices: ['Add Student', 'Display Students', 'Exit']
      }
    ]);

    if (choice.action === 'Add Student') {
      const studentInfo: any = await inquirer.prompt([
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
    } else if (choice.action === 'Display Students') {
      studentSystem.displayStudents();
    } else {
      break;
    }
  }
}

main();

