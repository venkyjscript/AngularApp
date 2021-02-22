import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentsComponent} from './departments/departments.component';
import {ShowDepComponent} from './departments/show-dep/show-dep.component';
import {EmployeeComponent} from './employee/employee.component';
import {PermenantComponent} from './employee/permenant/permenant.component';

const routes: Routes = [
  {path:'departments',component:DepartmentsComponent},
  {path:'show-deps',component:ShowDepComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'permenant',component:PermenantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
