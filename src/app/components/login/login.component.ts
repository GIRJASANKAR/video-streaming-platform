import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMAIL_REGEX } from 'src/app/shared/constant/login-constant';


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

  open_snack_bar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }

  login() {
    const val = this.login_form.value;
    if (val.login && val.password) {
      this.authService.loginUser(val.login, val.password).subscribe({
        next: (result: any) => {
          this.authService.expiry_time = result.expiresIn;
          localStorage.setItem('token', result.token);
          this.router.navigate(['/']);
          this.open_snack_bar('login successful', 'Enjoy');
          this.authService.autoLogoutUser(this.authService.expiry_time);
        },
        error: (err) => {
          this.open_snack_bar(err.error.error, 'First Register');
        },
      });
    }
  }
}
