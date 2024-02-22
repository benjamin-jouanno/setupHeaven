import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStrapiEnv, StrapiLocalEnv } from '../envs/strapi.env';
import { IAuthenticateData, JWTData, iUser } from '../types/AuthenticateData.type';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  strapiEnv: IStrapiEnv;
  jwt!: JWTData;
  connectedUser!: iUser;
  private cookie_jwtToken = '';
  private all_cookies: any = '';

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    this.strapiEnv = StrapiLocalEnv;
    this.cookie_jwtToken = this.cookieService.get('jwtToken');
    this.all_cookies = this.cookieService.getAll();
    this.jwt = { token: this.cookie_jwtToken };
  }

  authenticate(authenticationData: IAuthenticateData): Observable<any> {
    return this.httpClient.post(this.strapiEnv.baseUrl + this.strapiEnv.authentication, authenticationData)
  }

  registerAccount(user: iUser): Observable<any> {
    return this.httpClient.post(this.strapiEnv.baseUrl + this.strapiEnv.register, user);
  }

  setJwtToken(jwt: JWTData): void {
    this.jwt = jwt;
    this.cookieService.set('jwtToken', this.jwt.token);
  }

  getJwtToken(): JWTData {
    return this.jwt;
  }

  setConnectedUser(user: iUser): void {
    this.connectedUser = user;
  }

  getConnecterUser(): iUser {
    return this.connectedUser;
  }

  public getMeUser(): Observable<iUser> {
    return this.httpClient.get<iUser>(this.strapiEnv.baseUrl + this.strapiEnv.me, { headers: { Authorization: 'Bearer ' + this.jwt.token } });
  }
}
