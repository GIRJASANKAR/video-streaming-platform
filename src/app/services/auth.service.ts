import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private router: Router,private _snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }
  public expiry_time!:number;
  registerUser(email: string, password: string) {
    return this._http.post('https://node-app-bpug.onrender.com/register', {
      email,
      password,
    });
  }

  loginUser(email: string, password: string) {
    return this._http.post('https://node-app-bpug.onrender.com/login', {
      email,
      password,
    });
  }

  profileUser() {
    this.openSnackBar('Verifying User', 'Please wait...');
    let headers = new HttpHeaders().set(
      'Authorization',
      `bearer ${localStorage.getItem('token')}`
    );
    return this._http.post('https://node-app-bpug.onrender.com/profile', {}, { headers });
  }

  autoLogoutUser(expireTime: number) {
    setTimeout(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, expireTime);
  }


  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

export interface User {
  email: string;
  password: string;
}
