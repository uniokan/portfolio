import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss', './media.scss']
})
export class CommentsComponent {

  translate = inject(TranslationService);

  comment: number = 0;

  showNextComment(): void {
    this.comment == 1 ? this.comment = 0 : this.comment++;
  }

  showLastComment(): void {
    this.comment == 0 ? this.comment = 1 : this.comment--;
  }
}
