import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsListComponent } from './components/student/students-list/students-list.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './components/student/student-details/student-details.component';
import { AddPolozenIspitComponent } from './components/student/add-polozen-ispit/add-polozen-ispit.component';
import { LoginComponent } from './components/korisnik/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    AddStudentComponent,
    StudentDetailsComponent,
    AddPolozenIspitComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
