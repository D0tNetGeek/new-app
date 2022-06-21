import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FootercomponentComponent } from './footer/footercomponent/footercomponent.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoggerService } from './services/logger.service';
import { CreditCardImageDirective  } from './directives/cc-logo.directive';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './department/department.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormGroupComponent } from './form-group/form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    FootercomponentComponent,
    EmployeeComponent,
    CreditCardImageDirective,
    DepartmentComponent,
    PagenotfoundComponent,
    EmployeedetailComponent,
    NavBarComponent,
    FormGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    ReactiveFormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }