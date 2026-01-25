import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  newsletterEmail = '';

  subscribeNewsletter() {
    if (!this.newsletterEmail) {
      alert('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.newsletterEmail)) {
      alert('Please enter a valid email address');
      return;
    }

    alert('Thank you for subscribing to our newsletter!');
    this.newsletterEmail = '';
  }
}
