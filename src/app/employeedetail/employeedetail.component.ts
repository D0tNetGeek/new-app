import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css'],
  providers: [EmployeeService]
})
export class EmployeedetailComponent implements OnInit {

  empId: string = '';
  employee: Employee[] = [];

  private _employeeService: EmployeeService;
  private _activatedRoute: ActivatedRoute

  constructor(employeeService: EmployeeService, activatedRoute: ActivatedRoute) 
  {
    this._employeeService = employeeService;
    this._activatedRoute = activatedRoute;

    this.empId = this._activatedRoute.snapshot.params['empId'];
    console.table("Employee ID: " + this.empId);

    this.employee = this._employeeService.getEmployee(this.empId);
  }

  ngOnInit(): void {
  }
}
