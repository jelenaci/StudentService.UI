import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudentRequest: Student = {
    studentID: 0,
    ime: '',
    prezime:'',
    brojIndeksa:'',
    datumRodjenja:new Date(),
    adresa: '',
    telefon:''
  }
  errorMessage: string='';
  

  constructor(private studentService: StudentsService, private router: Router) { }

  ngOnInit(): void {
      
    }

    addStudent() {

      if (
        this.addStudentRequest.ime &&
        this.addStudentRequest.prezime &&
        this.addStudentRequest.brojIndeksa &&
        this.addStudentRequest.datumRodjenja &&
        this.addStudentRequest.adresa &&
        this.addStudentRequest.telefon
        ) {

        this.studentService.addStudent(this.addStudentRequest).subscribe(
          (student) => {
            this.router.navigate(['student']);
          },

          (error) => {
            console.error("Greška prilikom unosa podataka:", error);
    
            if (error.status === 400 && error.error && error.error.ErrorMessage) {
              this.errorMessage = error.error.ErrorMessage;
            } else {
              this.errorMessage = 'Broj indeksa već postoji.';
            }
    
            alert(this.errorMessage);
          }

        );
      } else {

        alert("Molimo vas da unesete sve podatke.");
        
      }
    }
  }    