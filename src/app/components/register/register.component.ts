import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMAIL_REGEX } from 'src/app/shared/constant/login-constant';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}


  registerForm = this.fb.group({
    name: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    register_email: [
      '',
      [Validators.required, Validators.pattern(EMAIL_REGEX)],
    ],
    password: ['', [Validators.required]],
  });

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }

  register() {
    const val = this.registerForm.value;
    if (val.register_email && val.password) {
      this.authService.registerUser(val.register_email, val.password).subscribe({
        next: (result: any) => {
          this.openSnackBar('Registered', result.message);
          if (val.register_email != null && val.password != null) {
            this.authService.loginUser(val.register_email, val.password).subscribe({
              next: (result: any) => {
                this.authService.expiry_time = result.expiresIn;
                localStorage.setItem('token', result.token);
                this.router.navigate(['/']);
                this.openSnackBar(
                  'login successful',
                  'Enjoy'
                );
               this.authService.autoLogoutUser(this.authService.expiry_time);
              },
              error: (err) => {
                this.openSnackBar(err.error.error, 'something went wrong');
              },
            });
          }
        },
        error: (err) => {
          this.openSnackBar(err.error.error, 'Enter new Email Id');
        },
      });
    }
  }
}
