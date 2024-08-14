import { Component, inject } from '@angular/core';
import { JoinprojectComponent } from './joinproject/joinproject.component';
import { ElpollolocoComponent } from './elpolloloco/elpolloloco.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import AOS from 'aos';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinprojectComponent, ElpollolocoComponent, PokedexComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss','./media.scss']}
)
export class PortfolioComponent {

  translate = inject(TranslationService);

  ngOnInit(){
    AOS.init()
  }
}
