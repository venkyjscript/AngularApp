import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ShowDepComponent } from './departments/show-dep/show-dep.component';
import { AddDelDepComponent } from './departments/add-del-dep/add-del-dep.component';
import {MiddlewareService} from './middleware.service';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { PermenantComponent } from './employee/permenant/permenant.component'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    ShowDepComponent,
    AddDelDepComponent,
    EmployeeComponent,
    PermenantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MiddlewareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
