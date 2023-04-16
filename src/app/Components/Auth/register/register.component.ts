import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User/user';
import { AlertifyService } from 'src/app/Services/Alert/alertify.service';
import { RegisterService } from 'src/app/Services/Auth/Register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // object for register Data 
  registerData: User = new User();

  constructor(private registerService:RegisterService,
    private alert:AlertifyService,
    private router:Router

    ) {}

  // for regiset the user , we send the data to spring by using service (Register Service)
  userRegister() {
    console.log(this.registerData)
    this.registerService.userRegister(this.registerData).subscribe(
      (Response)=>{
        this.alert.success("Registered successfully")
        this.router.navigate(['login'])
      },
      (Error:HttpErrorResponse)=>{
        this.alert.error(Error.error.message)
      }
    )
  }
}
