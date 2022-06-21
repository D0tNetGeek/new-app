import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';
import { LoggerService } from './logger.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  private _loggerService : LoggerService;
  private _employees : Employee[] = [];

  constructor(private http: HttpClient, loggerService: LoggerService) {
    this._loggerService = loggerService;

    this._loggerService.log("Employee Service constructed.")
   }

  private rootUrl = environment.apiUrl;

  getEmployees() : Observable<Employee[]>{
    this._loggerService.log("Get Employees called.");

    return this.http.get<Employee[]>(this.rootUrl + '/employees');
  }
}