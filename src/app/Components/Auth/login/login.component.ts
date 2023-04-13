import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/Models/User/user';
import { AuthFunctionService } from 'src/app/Services/Auth/AuthFunction/auth-function.service';
import { LoginService } from 'src/app/Services/Auth/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  faLock = faLock;

  loginData: User = new User();

  constructor(
    private loginService: LoginService,
    private authFunction: AuthFunctionService,
    private route: Router
  ) {}

  ngOnInit(): void {
    if (this.authFunction.isLoggedIn() && this.authFunction.isAdmin()) {
      this.route.navigate(['admin']);
    } else if (this.authFunction.isLoggedIn() && this.authFunction.isUser()) {
      this.route.navigate(['user']);
    }
  }

  // for login validation
  login() {
    // console.log(this.loginData);
    this.loginService.loginValidation(this.loginData).subscribe(
      (response: User) => {
        console.log('response data' + response.userName);
        this.authFunction.setToken(response);

        this.routeFunction();
      },
      (Error: HttpErrorResponse) => {
        console.log(Error.error.message);
      }
    );
  }

  // this function can route based on their role
  routeFunction() {
    if (this.authFunction.isAdmin()) {
      this.route.navigate(['admin']);
    } else if (this.authFunction.isAdmin()) {
      this.route.navigate(['user']);
    }
  }
}
