import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents()
      .subscribe({
          next: (students) => {
            this.students = students;
          },
          error: (response)=> {
            console.log(response);
          }
        });
     this.loadStudents();
   }

  loadStudents(): void {
    this.studentService.getAllStudents()
      .subscribe({
        next: (students) => {
          this.students = students;
        },
        error: (response) => {
          console.log(response);
        }
      });
    }

  deleteStudent(studentID: number): void {
    this.studentService.deleteStudent(studentID)
      .subscribe({
        next: () => {
          alert('Student je uspešno obrisan.');
          this.loadStudents();
          
        },
        error: (error) => {
          console.error(error);
          alert('Student koji ima polozen ispit ne moze biti obrisan. ');
        }
      });
  }
}
