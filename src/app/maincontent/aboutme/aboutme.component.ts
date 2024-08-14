import { Component, inject } from '@angular/core';
import AOS from 'aos';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss','./media.scss']
})
export class AboutmeComponent {

  translate = inject(TranslationService);


ngOnInit(){
  AOS.init()
}
}
