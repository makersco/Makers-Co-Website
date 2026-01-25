import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    service: '',
    message: ''
  };

  isSubmitting = false;

  notification = {
    show: false,
    type: 'success',
    message: ''
  };

  onSubmit() {
    // Validate form
    if (!this.formData.name || !this.formData.email || !this.formData.service || !this.formData.message) {
      this.showNotification('Please fill in all fields', 'error');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.showNotification('Please enter a valid email address', 'error');
      return;
    }

    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      this.showNotification('Thank you! Your message has been sent successfully.', 'success');
      this.resetForm();
      this.isSubmitting = false;
    }, 1500);
  }

  showNotification(message: string, type: 'success' | 'error') {
    this.notification = {
      show: true,
      type,
      message
    };

    // Auto hide after 5 seconds
    setTimeout(() => {
      this.closeNotification();
    }, 5000);
  }

  closeNotification() {
    this.notification.show = false;
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      service: '',
      message: ''
    };
  }
}
