import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStrapiEnv, StrapiLocalEnv } from '../envs/strapi.env';
import { IAuthenticateData, JWTData } from '../types/AuthenticateData.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  strapiEnv: IStrapiEnv;
  jwt!: JWTData;
  constructor(private httpClient: HttpClient) {
    this.strapiEnv = StrapiLocalEnv;
  }

  authenticate(authenticationData: IAuthenticateData): Observable<any> {
    return this.httpClient.post(this.strapiEnv.baseUrl + this.strapiEnv.authentication, authenticationData)
  }

  setJwtToken(jwt: JWTData): void {
    this.jwt = jwt;
  }

  getJwtToken(): JWTData {
    return this.jwt;
  }
}
