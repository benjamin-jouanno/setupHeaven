import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'welcome', component: LandingPageComponent
    },
    {
        path: 'login', component: LoginPageComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: '**', component: LandingPageComponent
    }
];
