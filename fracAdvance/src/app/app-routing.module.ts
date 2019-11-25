import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { LogoutComponent } from './component/logout/logout.component';
import { HeaderComponent } from './component/header/header.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { LoginComponent } from './component/login/login.component';



const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'tester', component: TestComponentRenderer },
  { path: 'logout', component: LogoutComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'app-add-employee', component: AddEmployeeComponent},
    { path: 'app-add-employee', component: AddEmployeeComponent},
    { path: '', component: LoginComponent},
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
