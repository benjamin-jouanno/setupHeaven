import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialComponentsModule } from '../modules/material-components/material-components.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LiteShotComponent } from './lite-shot/lite-shot.component';
import { ThemeTagComponent } from './theme-tag/theme-tag.component';
import { ShotViewerDialogComponent } from './shot-viewer-dialog/shot-viewer-dialog.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [MenuBarComponent, LiteShotComponent, ThemeTagComponent, ShotViewerDialogComponent, ImageViewerComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [MenuBarComponent, LiteShotComponent, ThemeTagComponent, ShotViewerDialogComponent, ImageViewerComponent]
})
export class SharedComponentsModule { }
