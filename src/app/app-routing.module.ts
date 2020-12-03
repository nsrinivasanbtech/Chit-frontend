import { NgModule } from '@angular/core';
import { AdminGuard } from './components/admin/admin.guard';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PatientComponent } from '../app/components/patient/patient.component';
import { DoctorComponent } from '../app/components/doctor/doctor.component';
import { DetailsResolver } from './resolvers/details.resolver';
// import { BlogsComponent } from '../app/components/blogs/blogs/blogs.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: PatientComponent, canActivate: [AdminGuard], resolve: {data: DetailsResolver}},
  {path: 'users', component: DoctorComponent, canActivate: [AdminGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
