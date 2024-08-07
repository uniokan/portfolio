import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss','./media.scss']
})
export class AboutmeComponent {

ngOnInit(){
  AOS.init()
}
}
