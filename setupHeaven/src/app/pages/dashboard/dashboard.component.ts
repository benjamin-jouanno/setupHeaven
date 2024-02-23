import { Component, OnInit } from '@angular/core';
import { ShotService } from '../../shared/services/shot.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ShotViewerDialogComponent } from '../../shared/sharedComponents/shot-viewer-dialog/shot-viewer-dialog.component';
import { IShot } from '../../shared/types/shot.type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  _shotList: Observable<any> | undefined;
  constructor(private shotService: ShotService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this._shotList = this.shotService.getAllShots()
  }

  openShot(shot: IShot): void {
    const dialogRef = this.dialog.open(ShotViewerDialogComponent, {
      data: shot
    });
  }
}
