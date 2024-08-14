import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule,RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', './media.scss']
})
export class ContactComponent {

  translate = inject(TranslationService);

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: ""
  }

  success = false;

  mailTest = false;

  post = {
    endPoint: 'https://info.okan-oezel.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  submitted: boolean = false;

  showMessage() {
    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 3000)
  }

  onSubmit(ngForm: NgForm) {

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
      this.showMessage();
      this.submitted = false;
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
      this.submitted = false;
    }

    else {
      this.submitted = true;
    }

  }
}