import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee';
import { LoggerService } from './logger.service';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()

export class EmployeeService {
  private _loggerService: LoggerService;
  employees: any[] = [];
  employee: Employee[] = [];
  
  constructor(loggerService: LoggerService) {
    this._loggerService = loggerService;
    this._loggerService.log("Employee Service Constructed");
   }

  getEmployees(){
    this._loggerService.log("Get Employees Called");

    this.employees = [
      {empId: 'emp1', empName: 'tom arnold', gender: 'male', dob: '12/8/1988', salary: 1234.22, deptId: '1001'},
      {empId: 'emp2', empName: 'sarah lamb', gender: 'female', dob: '10/14/1989', salary: 2352.34, deptId: '1002'},
      {empId: 'emp3', empName: 'cheryl aspole', gender: 'female', dob: '7/24/1992', salary: 4577.65, deptId: '1003'},
      {empId: 'emp4', empName: 'david leary', gender: 'male', dob: '8/19/1990', salary: 5433.76, deptId: '1004'}
    ];
  
    this._loggerService.log(this.employees);

    return this.employees;
  }

  getEmployee(empId:string){
    this._loggerService.log("Get Employee called for :"+empId);

    this.employee = [{empId: 'emp1', empName: 'tom arnold', gender: 'male', dob: '12/8/1988', salary: "1234.22", deptId: '1001'}];

    return this.employee;
  }

  getEmployeees(){
    this._loggerService.log("Get Employeee called");

    let employeee: Employee[];

    employeee = [
      new Employee('1', 'Employee1', 'Male', '2/09/1980', '1999.99', '1001'),
      new Employee('2', 'Employee2', 'Female', '09/03/1930', '3999.99','1002'),
    ]

    this._loggerService.log(employeee);

    return employeee;
  }
}
