import { Component } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { FormControl, Validators } from '@angular/forms';
import { IAuthenticateData } from '../../shared/types/AuthenticateData.type';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  identifier = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required])

  constructor( private authenticationService: AuthenticationService) {}

  authenticate() {
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
            token: res.data.jwt
          }
        )
      }, err => {
        console.error(err);
      });
    }
  }
}
