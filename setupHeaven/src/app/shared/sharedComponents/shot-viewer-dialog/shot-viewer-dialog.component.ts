import { Component, Inject, OnInit } from '@angular/core';
import { IShot, StrapiResponse } from '../../types/shot.type';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { StrapiLocalEnv } from '../../envs/strapi.env';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'app-shot-viewer-dialog',
  templateUrl: './shot-viewer-dialog.component.html',
  styleUrl: './shot-viewer-dialog.component.css'
})
export class ShotViewerDialogComponent implements OnInit{
  strapiEnv = StrapiLocalEnv;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {attributes: IShot}, public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openImage(url : string): void {
    const dialogRef = this.dialog.open(ImageViewerComponent, {
      data: this.strapiEnv.baseUrl + url
    });
  }
 
}
