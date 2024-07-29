import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Product {
  productName: string,
  productPrice: number,
  productCategory: string,
  productImages: string
}
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  product: Product[] = [
    {
      productName: 'Apex Legends',
      productPrice: 200,
      productCategory: 'Action',
      productImages: 'assets/images/top-game-03.jpg'
    },
    {
      productName: 'SIMS 4',
      productPrice: 60,
      productCategory: 'Life',
      productImages: 'assets/images/top-game-04.jpg'
    },
    {
      productName: 'BloodBorne',
      productPrice: 500,
      productCategory: 'Souls',
      productImages: 'assets/images/bloodborne.jpg'
    },
    {
      productName: 'assassins creed 3',
      productPrice: 299,
      productCategory: 'UNITY',
      productImages: 'assets/images/banner-image.jpg'
    },
  ]
}
