import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', 'media.scss']
})
export class HeaderComponent {

  
  isMenuBarVisible = false;

  toggleMenuBar() {
    this.isMenuBarVisible = !this.isMenuBarVisible;
  }
}

