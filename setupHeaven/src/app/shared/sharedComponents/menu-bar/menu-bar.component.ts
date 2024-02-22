import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { iUser } from '../../types/AuthenticateData.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent implements OnInit{
  _connectedUser: Observable<iUser> | undefined;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this._connectedUser = this.authenticationService.getMeUser()
  }
}
