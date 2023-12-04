import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Student, PolozenIspit, Predmet, Korisnik } from '../models/student.model';
import { Observable, catchError, tap, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http : HttpClient) { }

  getAllStudents() : Observable<Student[]>{
    return this.http.get<Student[]>(this.baseApiUrl + '/api/Student/GetAllStudents')
  }

  getPredmeti(): Observable<Predmet[]> {
    return this.http.get<Predmet[]>(this.baseApiUrl + '/api/Student/GetPredmeti');
  }

  addStudent(addStudentRequest: Student) : Observable<Student>{
    //addStudentRequest.studentID = 0;
    return this.http.post<Student>(this.baseApiUrl + '/api/Student/AddStudent', addStudentRequest).pipe(
      catchError((error) => {
        console.error('Greška prilikom slanja zahteva:', error);
        throw error;
      }) 
  )}

  getStudent(studentID: number): Observable<Student> {
      return this.http.get<Student>(this.baseApiUrl + '/api/Student/info/' + studentID).pipe(
      tap(response => console.log('getStudent response:', response))
        );
    }

  getPredmet(predmetID: number): Observable<Predmet> {
      return this.http.get<Predmet>(this.baseApiUrl + '/api/Student/predmeti/' + predmetID).pipe(
      tap(response => console.log('getPredmet response:', response))
      );
    }
      
  getStudentDetails(studentID: number): Observable<PolozenIspit[]> {
      return this.http.get<PolozenIspit[]>(this.baseApiUrl + '/api/Student/GetStudentDetailsById/' + studentID).pipe(
       tap(response => console.log('getStudent response:', response))
        ); 
    }

    deleteStudent(studentID: number): Observable<void> {
      const url = (this.baseApiUrl + '/api/Student/delete/' + studentID);
      return this.http.delete<void>(url).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 400) {
            console.error('Greška:', error.error?.ErrorMessage);
          }
          throw error;
        })
      );
    }

    addPolozenIspit(polozenIspit: PolozenIspit): Observable<PolozenIspit> {
      return this.http.post<PolozenIspit>(this.baseApiUrl + '/api/Student/add-polozen-ispit', polozenIspit)
      .pipe(
        catchError((error) => {
          console.error('Greška prilikom dodavanja ispita:', error);
          let errorMessage = 'Greška prilikom dodavanja ispita.';
              if (error && error.error && error.error.error) {
                errorMessage = error.error.error;
              }
              return throwError(errorMessage);
          })
        );
      }
      
    getPolozenIspitData(): Observable<PolozenIspit[]> {
      return this.http.get<PolozenIspit[]>(this.baseApiUrl + '/api/Student/get-polozen-ispit-data')
      .pipe(
        catchError((error) => {
          console.error('Greška pri dodavanju ispita:', error);
          throw error;
         })
       );
      }

      login(loginRequest: Korisnik): Observable<Korisnik> {
        return this.http.post<Korisnik>(this.baseApiUrl + '/api/Korisnik/login', loginRequest)
        .pipe(
        catchError(error => {
          console.error('Greška prilikom prijave:', error);
            return throwError(error);
          })
        );
     }
              
}
