import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/User/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private UrlLogin = "http://localhost:8080"

  constructor(public http:HttpClient) { }

 public loginValidation(user:User):Observable<any>{
    return this.http.post<any>(`${this.UrlLogin}/login/loginValidation`, user);

 }

}
