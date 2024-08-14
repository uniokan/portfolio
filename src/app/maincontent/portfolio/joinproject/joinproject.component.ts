import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import { TranslationService } from '../../../translation.service';
@Component({
  selector: 'app-joinproject',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './joinproject.component.html',
  styleUrls: ['./joinproject.component.scss', '/src/app/shared/component/portfolio-projects-right.scss', '/src/app/maincontent/portfolio/media.scss']
})
export class JoinprojectComponent {

  translatee = inject(TranslationService);

  ngOnInit(){
    AOS.init()
  }
}
