import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_name:string='';
  login_password:string='';

  constructor(private route: ActivatedRoute, private _router: Router, private authenticationService: AuthenticationService) {
    //console.log("CURRENT USER : " + this.authenticationService.currentUserValue);
    //if(this.authenticationService.currentUserValue){
      //this._router.navigate(['/employee']);
    //}
   }

  ngOnInit(): void {
    
  }

  login(){
    this.authenticationService.login();
    this._router.navigate(['/employee']);
  }
}
