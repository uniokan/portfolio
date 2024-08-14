import { Component, inject } from '@angular/core';
import AOS from 'aos';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-elpolloloco',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './elpolloloco.component.html',
  styleUrls: ['./elpolloloco.component.scss','/src/app/shared/component/portfolio-projects-left.scss', '/src/app/maincontent/portfolio/media.scss']
})
export class ElpollolocoComponent {

  translatee = inject(TranslationService);

  ngOnInit(){
    AOS.init()
  }
}
