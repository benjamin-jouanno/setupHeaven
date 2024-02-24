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
import { ShotCreatorComponent } from './shot-creator/shot-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [MenuBarComponent, LiteShotComponent, ThemeTagComponent, ShotViewerDialogComponent, ImageViewerComponent, ShotCreatorComponent, SideNavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MenuBarComponent, LiteShotComponent, ThemeTagComponent, ShotViewerDialogComponent, ImageViewerComponent, ShotCreatorComponent, SideNavComponent]
})
export class SharedComponentsModule { }
