import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss','./media.scss']
})
export class FooterComponent {
  translate = inject(TranslationService);
}
