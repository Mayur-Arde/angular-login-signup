import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthenticationService, private router: Router){

  }

  login = true;


  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);
      this.login = false;
    })
  }
}
