import { Component } from '@angular/core';
import { User } from 'src/app/Models/User/user';
import { RegisterService } from 'src/app/Services/Auth/Register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // object for register Data 
  registerData: User = new User();

  constructor(private registerService:RegisterService) {}

  // for regiset the user , we send the data to spring by using service (Register Service)
  userRegister() {
    console.log(this.registerData)
    this.registerService.userRegister(this.registerData).subscribe(
      (Response)=>{
        console.log(Response)
      },
      (Error)=>{
        
      }
    )
  }
}
