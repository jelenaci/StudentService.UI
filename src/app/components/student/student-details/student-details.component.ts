import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { Student, PolozenIspit, Predmet } from 'src/app/models/student.model';
import { catchError, forkJoin, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentID: number = 0; 
  studentDetails: Student = { studentID: 0, ime: '', prezime: '', brojIndeksa: '', datumRodjenja: new Date(), adresa: '', telefon: ''};
  polozeniIspiti: PolozenIspit [] = [];
  predmetDetails: Predmet[] = [];
  noExam: string = '';

  constructor(private route: ActivatedRoute, private studentService: StudentsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
  
      if (idParam !== null) {
        this.studentID = +idParam;
  
        this.studentService.getStudentDetails(this.studentID).pipe(
          tap(polozeniIspiti => {

            console.log('Uspešno:', polozeniIspiti);
            this.polozeniIspiti = polozeniIspiti;
            
          }),

          switchMap(polozeniIspiti => {

            const predmetObservables = polozeniIspiti.map(ispit =>
              this.studentService.getPredmet(ispit.predmetID)
            );
            return forkJoin(predmetObservables);

          }),

          tap(predmetDetails => {

            console.log('Detalji o predmetu:', predmetDetails);
            this.predmetDetails = predmetDetails;

          }),

          catchError(error => {
            console.error('Greška: ', error);
            throw error;
          })

        ).subscribe();

  
        this.studentService.getStudent(this.studentID).pipe(

          tap(student => {

            if (student?.studentID != null) {
              this.studentDetails = student;
            } else {
              console.error('Student nije pronadjen.');
              alert('Student nije pronadjen.');
            }
          }),

          catchError(error => {
            console.error('Greška: ', error);
            throw error;
          })

        ).subscribe();

      }
    });
  }
}  
