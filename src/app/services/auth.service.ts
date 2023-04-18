import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  public expirytime!:number;
  register(email: string, password: string) {
    return this.http.post('http://localhost:5000/register', {
      email,
      password,
    });
  }

  login(email: string, password: string) {
    return this.http.post('http://localhost:5000/login', {
      email,
      password,
    });
  }

  profile() {
    console.log('profile working');
    let headers = new HttpHeaders().set(
      'Authorization',
      `bearer ${localStorage.getItem('token')}`
    );
    return this.http.post('http://localhost:5000/profile', {}, { headers });
  }

  autoLogout(expireTime: number) {
    setTimeout(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      console.log('its gets logout');
    }, expireTime);
  }
}

export interface User {
  email: string;
  password: string;
}
