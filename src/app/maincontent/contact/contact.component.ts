import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss','./media.scss']
})
export class ContactComponent {

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  onSubmit(ngForm: NgForm) {

    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }
}
