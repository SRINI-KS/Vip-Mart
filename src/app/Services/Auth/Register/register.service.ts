import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/User/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 

  private UrlRegisteration = "http://localhost:8080/registration"

  constructor(public httpClient:HttpClient) { }

  userRegister(userRegisterData:User ):Observable<object>
  {
    return this.httpClient.post((this.UrlRegisteration),userRegisterData);
  }
}
