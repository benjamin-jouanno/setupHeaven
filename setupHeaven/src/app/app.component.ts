import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageModule } from './pages/page.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule,
    RouterOutlet,
    NgbModule,
    PageModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'setupHeaven';
}
