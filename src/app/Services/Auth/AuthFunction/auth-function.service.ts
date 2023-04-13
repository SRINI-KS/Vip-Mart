import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { User } from 'src/app/Models/User/user';

@Injectable({
  providedIn: 'root'
})
export class AuthFunctionService {

  constructor(private router: Router) {}

  setToken(token: User): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  isAdmin(){
    let data: any;
      let role:string;
      data = this.getToken();
      role=JSON.parse(data).role;
      if(role=='admin'){
        return true
      }
      else{
        return false
      }
  }
  isUser(){
    let data: any;
      let role:string;
      data = this.getToken();
      role=JSON.parse(data).role;
      if(role=='user'){
        return true
      }
      else{
        return false
      }
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      // this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
