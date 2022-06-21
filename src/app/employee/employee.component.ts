import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { EmployeeApiService } from '../services/employee-api.service';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService, EmployeeApiService]
})

export class EmployeeComponent implements OnInit {
  employees: any[] = [];
  employeees: Employee[]=[];
  employeesApi: Employee[]=[];

  private _employeeService: EmployeeService;
  private _employeeApiService: EmployeeApiService;

  cc : string = '';
  errorMessage: any;

  // constructor(private _employeeService: EmployeeService) {
  //   this.employees = this._employeeService.getStudents();
  // }
  constructor(employeeService: EmployeeService, employeeApiService: EmployeeApiService) {
    this._employeeService = employeeService;
    this._employeeApiService = employeeApiService;
  }

  ngOnInit(): void {

    this.employees = this._employeeService.getEmployees();
    this.employeees = this._employeeService.getEmployeees();

    this._employeeApiService.getEmployees().subscribe(response =>{
     this.employeesApi = response;
     console.table(response);
    }
    );
  }
}