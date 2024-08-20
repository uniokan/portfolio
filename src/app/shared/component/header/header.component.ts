import { CommonModule } from '@angular/common';
import { Component, HostListener, inject  } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', 'media.scss']
})
export class HeaderComponent {

  translate = inject(TranslationService);

  activeSection : string = '';

  ngOnInit() : void {
    this.setActiveSection();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.setActiveSection();
  }

  setActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      if (sectionTop <= viewportHeight / 2 && sectionBottom >= viewportHeight / 2) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    this.activeSection = currentSectionId;
  }

 

  isMenuBarVisible = false;

  toggleMenuBar() {
    this.isMenuBarVisible = !this.isMenuBarVisible;
  }
}

