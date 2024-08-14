import { Component } from '@angular/core';
import { AbovethefoldComponent } from './abovethefold/abovethefold.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { concat } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CommentsComponent } from './comments/comments.component';


@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [AbovethefoldComponent, MyskillsComponent, AboutmeComponent, 
    ContactComponent, PortfolioComponent, CommentsComponent, ContactComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {


}
