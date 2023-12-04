
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/models/student.model';
import { StudentsService } from 'src/app/services/students.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRequest: Korisnik = { korisnicko_ime: '', lozinka: '' };
  errorMessage: string = '';

  constructor(private studentService: StudentsService, private router: Router) {}

  login(): void {
    this.studentService.login(this.loginRequest).subscribe(
      response => {
        console.log('Uspešno prijavljivanje:', response);
        this.router.navigate(['student']);
      },

      error => {
        console.error('Neuspešno prijavljivanje:', error);
        alert("Pogrešno korisničko ime ili lozinka!");
      }
      
    );
  }
}
