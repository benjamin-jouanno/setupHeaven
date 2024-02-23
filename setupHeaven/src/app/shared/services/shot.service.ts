import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { IStrapiEnv, StrapiLocalEnv } from '../envs/strapi.env';
import { Observable } from 'rxjs';
import { IShot } from '../types/shot.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShotService {
  strapiEnv: IStrapiEnv;

  constructor(private authenticationService: AuthenticationService, private httpClient: HttpClient) {
    this.strapiEnv = StrapiLocalEnv;
  }

  getAllShots(): Observable<IShot[]> {
    return this.httpClient.get<IShot[]>(this.strapiEnv.baseUrl + '/api/shots?populate=*', { headers: { Authorization: 'Bearer ' + this.authenticationService.getJwtToken().token } })
  }

  createShot(shot: IShot): Observable<IShot> {
    return this.httpClient.post<IShot>(this.strapiEnv.baseUrl + '/api/shots', {data:{...shot}}, { headers: { Authorization: 'Bearer ' + this.authenticationService.getJwtToken().token } })
  }
}
