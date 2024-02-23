import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-theme-tag',
  templateUrl: './theme-tag.component.html',
  styleUrl: './theme-tag.component.css'
})
export class ThemeTagComponent {
  @Input() tagName:string = ''
}
