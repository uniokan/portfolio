import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  deActive=false;
  enActive=true;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
  }

  enClicked() {
    this.deActive = false;
    this.enActive = true;
  }

  deClicked() {
    this.deActive = true;
    this.enActive=false;
  }
}
