import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { Department } from '../employee/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments: Department[]=[];

  private _departmentService: DepartmentService;

  constructor(departmentService: DepartmentService) { 
    this._departmentService = departmentService;
  }

  ngOnInit(): void {
    this.departments = this._departmentService.getDepartments();
  }
}
