import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './components/student/students-list/students-list.component';
import { AddStudentComponent } from './components/student/add-student/add-student.component';
import { StudentDetailsComponent } from './components/student/student-details/student-details.component';
import { AddPolozenIspitComponent } from './components/student/add-polozen-ispit/add-polozen-ispit.component';
import { LoginComponent } from './components/korisnik/login/login.component';




const routes: Routes = [
  {
    path:'student',
    component: StudentsListComponent
  },
  {
    path:'student/add',
    component: AddStudentComponent
  },
  {
    path: 'student/details/:id', 
    component: StudentDetailsComponent
  },
  {
    path: 'student/add-polozen-ispit', 
    component: AddPolozenIspitComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
