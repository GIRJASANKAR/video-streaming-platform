import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_REGEX } from 'src/app/constant/login-constant';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  login_form = this.fb.group({
    login: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
    password: ['', [Validators.required]],
  });

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }

  login() {
    const val = this.login_form.value;
    if (val.login && val.password) {
      this.authService.login(val.login, val.password).subscribe({
        next: (result: any) => {
          console.log(result);
          this.authService.expirytime = result.expiresIn;
          console.log(this.authService.expirytime)
          localStorage.setItem('token', result.token);
          this.router.navigate(['/']);
          this.openSnackBar('login successful', 'Session expire in 30 sec');
          this.authService.autoLogout(this.authService.expirytime);
        },
        error: (err) => {
          this.openSnackBar(err.error.error, 'First Register');
        },
      });
    }
  }
}
