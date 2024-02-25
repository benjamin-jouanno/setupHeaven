import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/Authenticated.guard';
import { CategoryComponent } from './pages/category/category.component';
import { FavouritesComponent } from './pages/favourites/favourites.component';
import { PopularComponent } from './pages/popular/popular.component';

export const routes: Routes = [
    {
        path: 'welcome', component: LandingPageComponent
    },
    {
        path: 'login', component: LoginPageComponent
    },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
    },
    {
        path: 'category', component: CategoryComponent, canActivate: [AuthGuard]
    },
    {
        path: 'popular', component: PopularComponent, canActivate: [AuthGuard]
    },
    {
        path: 'favourites', component: FavouritesComponent, canActivate: [AuthGuard]
    },
    {
        path: '**', component: LandingPageComponent
    }
];
