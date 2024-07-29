import { Component } from '@angular/core';

interface Image {
  imageURL: string
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  image: Image = {
    imageURL: 'assets/images/angular_wordmark_gradient.png'
  }
}
