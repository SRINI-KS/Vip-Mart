import { Component } from '@angular/core';
import { AuthFunctionService } from 'src/app/Services/Auth/AuthFunction/auth-function.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {

  constructor(private authFunction:AuthFunctionService) {
    
  }

  logout(){
    this.authFunction.logout()
  }

}
