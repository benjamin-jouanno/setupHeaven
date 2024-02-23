import { Component, Input } from '@angular/core';
import { IShot } from '../../types/shot.type';
import { IStrapiEnv, StrapiLocalEnv } from '../../envs/strapi.env';

@Component({
  selector: 'app-lite-shot',
  templateUrl: './lite-shot.component.html',
  styleUrl: './lite-shot.component.css'
})
export class LiteShotComponent {
  strapiEnv = StrapiLocalEnv;

  @Input() id: string | undefined;
  @Input() shot: IShot | undefined;
}
