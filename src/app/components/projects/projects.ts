import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects = [
    {
      icon: 'fa-store',
      category: 'POS System',
      title: 'Retail Chain POS',
      description: 'Complete POS solution for a retail chain with 15+ outlets'
    },
    {
      icon: 'fa-warehouse',
      category: 'Inventory System',
      title: 'Smart Warehouse',
      description: 'AI-powered inventory management with object detection'
    },
    {
      icon: 'fa-burger',
      category: 'F&B App',
      title: 'Restaurant Ordering App',
      description: 'Mobile ordering app for a popular restaurant chain'
    },
    {
      icon: 'fa-coffee',
      category: 'F&B App',
      title: 'Cafe Loyalty System',
      description: 'Customer loyalty and rewards app for cafe franchise'
    }
  ];
}
