import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import Product from './products'
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  @Input() product!: Product;


}
