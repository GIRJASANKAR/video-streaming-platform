import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.profile().pipe(
      map((response: any) => {
        if (response.verified) {
          return true;
        } else {
          return false;
        }
      }),
      map((isVerified: boolean) => {
        if (!isVerified) {
          this.openSnackBar('Session Expires', 'please Login');
          return this.router.createUrlTree(['/login']);
        }
        return true;
      })
    );
  }
}
