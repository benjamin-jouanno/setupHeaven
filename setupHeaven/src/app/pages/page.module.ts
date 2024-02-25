import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedComponentsModule } from '../shared/sharedComponents/shared-components.module';
import { MatIconModule } from '@angular/material/icon';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CategoryComponent } from './category/category.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { PopularComponent } from './popular/popular.component';



@NgModule({
  declarations: [LandingPageComponent, LoginPageComponent, DashboardComponent, CategoryComponent, FavouritesComponent, PopularComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [LandingPageComponent, LoginPageComponent, DashboardComponent, CategoryComponent, FavouritesComponent, PopularComponent]
})
export class PageModule { }
