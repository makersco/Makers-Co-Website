import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  features = [
    {
      icon: 'fa-rocket',
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising quality'
    },
    {
      icon: 'fa-headset',
      title: '24/7 Support',
      description: 'Always here when you need us'
    },
    {
      icon: 'fa-shield-halved',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security standards'
    }
  ];
}
