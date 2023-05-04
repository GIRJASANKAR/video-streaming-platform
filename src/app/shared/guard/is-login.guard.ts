import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let token =localStorage.getItem("token");
      if(token){
        return this.router.createUrlTree(['/']);
      }
      return true;
  }

}
