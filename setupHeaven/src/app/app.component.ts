import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageModule } from './pages/page.module';
import { CookieService } from 'ngx-cookie-service';
import { SideNavComponent } from './shared/sharedComponents/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule,
    RouterOutlet,
    NgbModule,
    PageModule,
    RouterModule,
  ],
  providers:[CookieService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'setupHeaven';
}
