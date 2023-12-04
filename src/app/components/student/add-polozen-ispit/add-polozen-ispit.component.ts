import { Component, OnInit } from '@angular/core';
import { PolozenIspit, Predmet, Student } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-polozen-ispit',
  templateUrl: './add-polozen-ispit.component.html',
  styleUrls: ['./add-polozen-ispit.component.css']
})
export class AddPolozenIspitComponent implements OnInit {
  polozenIspit: PolozenIspit = {
    polozenIspit: 0,
    studentID: 0,
    predmetID: 0,
    datumPolaganja: new Date(),
    ocena: 0,
    Student: {
      studentID: 0,
      ime: '',
      prezime: '',
      brojIndeksa: '',
      datumRodjenja: new Date(),
      adresa: '',
      telefon: ''
    },
    Predmet: {
      predmetID: 0,
      naziv: ''
    },
  };

  students: Student[] = [];
  predmeti: Predmet[] = [];
  errorMessage: string = '';

  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {

    this.studentService.getAllStudents().subscribe(students => {
      this.students = students;
      console.log('Students:', this.students);
    });

    this.studentService.getPredmeti().subscribe(

      predmeti => {
        this.predmeti = predmeti;
        console.log('Predmeti:', this.predmeti);
      },

      error => {
        console.error(error);
      }
      
    );
  }

  addPolozenIspit(): void {
   
    if (this.polozenIspit.studentID && this.polozenIspit.predmetID) {

      this.studentService.addPolozenIspit(this.polozenIspit).subscribe({
        next: (response) => {
          console.log('Uspešno:', response);
          alert('Ispit je uspešno dodat.');
        },

        error: (error) => {
          console.error('Greška: ', error);
          alert('Greška prilikom dodavanja ispita ' + error);
        },

      });

    } else {

      console.log('Molimo vas da izaberete studenta i predmet.');

    }
  }
  
}

