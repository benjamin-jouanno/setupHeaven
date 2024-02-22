import { Component } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { FormControl, Validators } from '@angular/forms';
import { IAuthenticateData, iUser } from '../../shared/types/AuthenticateData.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  username = new FormControl('', [Validators.required]);
  identifier = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);

  isRegister = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  authenticate(): void {
    if (this.identifier.valid && this.password.valid) {
      const identifier = this.identifier.getRawValue();
      const password = this.password.getRawValue()
      const userDataSet: IAuthenticateData = {
        identifier: identifier ? identifier : '',
        password: password ? password : ''
      }
      this.authenticationService.authenticate(userDataSet).subscribe(res => {
        this.authenticationService.setJwtToken(
          {
            token: res.jwt
          }
        );
        this.authenticationService.setConnectedUser(res.user);
        this.router.navigateByUrl('dashboard');
      }, err => {
        console.error(err);
      });
    }
  }

  createAccount(): void {
    if (this.identifier.valid && this.password.valid && this.confirmPassword.valid && this.username.valid) {
      const identifier = this.identifier.getRawValue();
      const password = this.password.getRawValue();
      const confirmPassword = this.confirmPassword.getRawValue();
      const username = this.username.getRawValue();
      if (password === confirmPassword) {
        const user: iUser = {
          email: identifier ? identifier : '',
          password: password ? password : '',
          username: username ? username : ''
        }
        this.authenticationService.registerAccount(user).subscribe(res => {
          this.authenticationService.setJwtToken({
            token: res.jwt
          })
          this.authenticationService.setConnectedUser(res.user);
          this.router.navigateByUrl('dashboard');
        }, err => {
          console.error(err);
        })
      }
    }
  }

  switchStatus(): void {
    this.isRegister = !this.isRegister;
  }
}
