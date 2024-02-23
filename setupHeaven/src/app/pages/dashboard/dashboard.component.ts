import { Component, OnInit } from '@angular/core';
import { ShotService } from '../../shared/services/shot.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  _shotList: Observable<any> | undefined;
  constructor(private shotService: ShotService) {}

  ngOnInit(): void {
    this._shotList = this.shotService.getAllShots()
  }
}
