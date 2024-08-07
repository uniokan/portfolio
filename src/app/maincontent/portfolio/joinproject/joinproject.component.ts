import { Component } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-joinproject',
  standalone: true,
  imports: [],
  templateUrl: './joinproject.component.html',
  styleUrls: ['./joinproject.component.scss', '/src/app/shared/component/portfolio-projects-right.scss', '/src/app/maincontent/portfolio/media.scss']
})
export class JoinprojectComponent {
  ngOnInit(){
    AOS.init()
  }
}
