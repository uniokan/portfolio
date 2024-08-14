import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abovethefold',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './abovethefold.component.html',
  styleUrls: ['./abovethefold.component.scss', './media.scss']
})
export class AbovethefoldComponent {
  translate = inject(TranslationService);




}
