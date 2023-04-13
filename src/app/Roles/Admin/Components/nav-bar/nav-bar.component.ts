import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthFunctionService } from 'src/app/Services/Auth/AuthFunction/auth-function.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent  {
  // @ViewChild('tog', { static: true })tog!: ElementRef;
  // expander:boolean=false;
  constructor(private authFunction:AuthFunctionService) {
    
  }
  // for logout i remove the token in local storage
  logout(){
  this.authFunction.logout();

  }

}
