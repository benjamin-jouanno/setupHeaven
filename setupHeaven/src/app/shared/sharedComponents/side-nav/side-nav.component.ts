import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { iUser } from '../../types/AuthenticateData.type';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent implements OnInit{
  _connectedUser: Observable<iUser> | undefined;
  currentRouteUrl: string | undefined;
  constructor(private activatedRoute: ActivatedRoute, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.currentRouteUrl = this.activatedRoute.pathFromRoot[1].snapshot.url[0].path;
    this._connectedUser = this.authenticationService.getMeUser()
  }

  home(): boolean {
    return this.currentRouteUrl === 'dashboard' ? true : false
  }

  category(): boolean {
    return this.currentRouteUrl === 'category' ? true : false 
  }

  popular(): boolean {
    return this.currentRouteUrl === 'popular' ? true : false
  }

  favourites(): boolean {
    return this.currentRouteUrl === 'favourites' ? true : false
  }

  logout(): void {
    this.authenticationService.disconnect();
    this.router.navigateByUrl('welcome');
  }
}
