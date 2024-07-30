import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";

// interface User {
//   name: string;
//   age: number;
//   imageUrl: string;
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
// export class AppComponent {
//   user: User = {
//     name: "mohamed",
//     age: 22,
//     imageUrl: '../assets/images/fa1c67ac7737466676db34794dcead3c.jpg'
//   };

//   changeName() {
//     this.user.name = "ahmed";
//   }

//   changeNumber() {
//     this.user.age = Math.floor(Math.random() * 100);
//   }
// }
