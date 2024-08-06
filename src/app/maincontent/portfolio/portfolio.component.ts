import { Component } from '@angular/core';
import { JoinprojectComponent } from './joinproject/joinproject.component';
import { ElpollolocoComponent } from './elpolloloco/elpolloloco.component';
import { PokedexComponent } from './pokedex/pokedex.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [JoinprojectComponent, ElpollolocoComponent, PokedexComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss','./media.scss']}
)
export class PortfolioComponent {

}
