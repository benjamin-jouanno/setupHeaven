import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShotService } from '../../shared/services/shot.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ShotViewerDialogComponent } from '../../shared/sharedComponents/shot-viewer-dialog/shot-viewer-dialog.component';
import { IShot } from '../../shared/types/shot.type';
import { ShotCreatorComponent } from '../../shared/sharedComponents/shot-creator/shot-creator.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy{
  destroy$: Subject<boolean> = new Subject<boolean>();
  _shotList: Observable<any> | undefined;
  constructor(private shotService: ShotService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this._shotList = this.shotService.getAllShots()
  }

  openShot(shot: IShot): void {
    const dialogRef = this.dialog.open(ShotViewerDialogComponent, {
      data: shot,
      panelClass:'d2x-dialog-panel',
    });
  }

  createShot(): boolean {
    const dialogRef = this.dialog.open(ShotCreatorComponent, {
      panelClass:'d2x-dialog-panel',
    });
    dialogRef.afterClosed().pipe(takeUntil(this.destroy$)).subscribe((res: true) => {
      return res
    });
    return false
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }
}
