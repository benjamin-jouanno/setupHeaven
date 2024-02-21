import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedComponentsModule } from '../shared/sharedComponents/shared-components.module';
import { MaterialComponentsModule } from '../shared/modules/material-components/material-components.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatIconModule
  ],
  exports:[LandingPageComponent]
})
export class PageModule { }
