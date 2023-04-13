import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFunctionService } from 'src/app/Services/Auth/AuthFunction/auth-function.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardsGuard implements CanActivate {
  constructor(
    private authFunction: AuthFunctionService,
    private route: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authFunction.isLoggedIn()) {
        this.route.navigate(['login']);
        return false;
      }
      return this.authFunction.isUser();
      
  }
  
}
