import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {  
  isLoggedIn: string | undefined;
  backgroundColor = environment.navBarBackgroundColor;

  constructor(private router: Router,private authenticationService : AuthenticationService) {    
    this.authenticationService.isLoggedIn.subscribe(x=>this.isLoggedIn = x);
  }

  ngOnInit(): void {
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
