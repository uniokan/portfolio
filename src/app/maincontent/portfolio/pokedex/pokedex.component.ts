import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss','/src/app/shared/component/portfolio-projects-right.scss', '/src/app/maincontent/portfolio/media.scss']
})
export class PokedexComponent {
  ngOnInit(){
    AOS.init()
  }
}
