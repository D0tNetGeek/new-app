import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private _loggerService: LoggerService;
  departments: any[] = [];

  constructor(loggerService: LoggerService) {
    this._loggerService = loggerService;
    this._loggerService.log("Department Service Constructed");
   }

  getDepartments(){
    this._loggerService.log("Get Departments Called");

    this.departments = [
      {deptId: '1001', deptName: 'hr', location: 'london'},
      {deptId: '1002', deptName: 'sales', location: 'milton keynes'},
      {deptId: '1003', deptName: 'marketing', location: 'leeds'},
      {deptId: '1004', deptName: 'survey', location: 'banglore'}
    ];
  
    this._loggerService.log(this.departments);

    return this.departments;
  }
}
