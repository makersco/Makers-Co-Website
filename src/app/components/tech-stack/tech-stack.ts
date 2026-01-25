import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  imports: [CommonModule],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss'
})
export class TechStackComponent {
  technologies = [
    { icon: 'fab fa-flutter', name: 'Flutter', color: '#02569B' },
    { icon: 'fab fa-dart', name: 'Dart', color: '#0175C2' },
    { icon: 'fas fa-fire', name: 'Firebase', color: '#FFCA28' },
    { icon: 'fas fa-database', name: 'PostgreSQL', color: '#336791' },
    { icon: 'fab fa-node-js', name: 'Node.js', color: '#339933' },
    { icon: 'fab fa-python', name: 'Python', color: '#3776AB' },
    { icon: 'fas fa-brain', name: 'TensorFlow', color: '#FF6F00' },
    { icon: 'fab fa-aws', name: 'AWS', color: '#FF9900' }
  ];
}
