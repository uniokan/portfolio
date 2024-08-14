import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss', './media.scss']
})
export class MyskillsComponent {

translate = inject(TranslationService);

images:string []=[
  '/assets/img/my_skills/html.png',
  '/assets/img/my_skills/css.png',
  '/assets/img/my_skills/js.png',
  '/assets/img/my_skills/ts.png',
  '/assets/img/my_skills/angular.png',
  '/assets/img/my_skills/firebase.png',
  '/assets/img/my_skills/git.png',
  '/assets/img/my_skills/rest-api.png',
  '/assets/img/my_skills/scrum.png',
  '/assets/img/my_skills/material-design.png',
  '/assets/img/my_skills/continually-learning.png'
]

ngOnInit(){
  AOS.init()
}
}
