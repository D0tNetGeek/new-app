import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<string>;
  public isLoggedIn: Observable<string>;
  
  constructor() { 
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('isLoggedIn') || '{}');
    this.isLoggedIn = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): string {
    //console.log("Current User Subject : " + this.currentUserSubject.value);
    return this.currentUserSubject.value;
  }

  login() {
    //return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
       // .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('isLoggedIn', JSON.stringify('true'));
            this.currentUserSubject.next('true');
            return 'true';
       // }));
}

logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('isLoggedIn');
    this.currentUserSubject.next("");
  }
}
