import { Component, inject } from '@angular/core';
import AOS from 'aos';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss','/src/app/shared/component/portfolio-projects-right.scss', '/src/app/maincontent/portfolio/media.scss']
})
export class PokedexComponent {

translate = inject(TranslationService);

  ngOnInit(){
    AOS.init()
  }
}
