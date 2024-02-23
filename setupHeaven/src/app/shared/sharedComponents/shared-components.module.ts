import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialComponentsModule } from '../modules/material-components/material-components.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LiteShotComponent } from './lite-shot/lite-shot.component';
import { ThemeTagComponent } from './theme-tag/theme-tag.component';



@NgModule({
  declarations: [MenuBarComponent, LiteShotComponent, ThemeTagComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports:[MenuBarComponent, LiteShotComponent, ThemeTagComponent]
})
export class SharedComponentsModule { }
