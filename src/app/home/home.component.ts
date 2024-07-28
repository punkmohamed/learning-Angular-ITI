import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { ProductsComponent } from "../products/products.component";
import { LogosComponent } from "../logos/logos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, ProductsComponent, LogosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
