import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Logos {
  imageUrl: string
}
@Component({
  selector: 'app-logos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logos.component.html',
  styleUrl: './logos.component.css'
})
export class LogosComponent {
  logo: Logos[] = [
    {
      imageUrl: 'assets/images/angular_wordmark_gradient.png'
    },
    {
      imageUrl: 'assets/images/Bootstrap_logo.svg.png'
    },
    {
      imageUrl: 'assets/images/Typescript_logo_2020.svg.png'
    },
    {
      imageUrl: 'assets/images/Top-Uses-Of-HTML.jpg'
    },
  ]
}
