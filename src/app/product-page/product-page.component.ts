import { Component, Input } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import Product from '../products/products'

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  product: Product[] = [
    {
      productName: 'Apex Legends',
      productPrice: 200,
      productCategory: 'Action',
      productImages: 'assets/images/top-game-03.jpg',
      onSale: true
    },
    {
      productName: 'SIMS 4',
      productPrice: 60,
      productCategory: 'Life',
      productImages: 'assets/images/top-game-04.jpg',
      onSale: true
    },
    {
      productName: 'BloodBorne',
      productPrice: 500,
      productCategory: 'Souls',
      productImages: 'assets/images/bloodborne.jpg',
      onSale: false
    },
    {
      productName: 'assassins creed 3',
      productPrice: 299,
      productCategory: 'UNITY',
      productImages: 'assets/images/banner-image.jpg',
      onSale: false
    },
    {
      productName: 'Super people',
      productPrice: 192,
      productCategory: 'Shooter',
      productImages: 'assets/images/categories-04.jpg',
      onSale: true
    },
    {
      productName: 'Destiny 2',
      productPrice: 545,
      productCategory: 'Open World',
      productImages: 'assets/images/top-game-06.jpg',
      onSale: true
    },
    {
      productName: 'Lost Arc',
      productPrice: 299,
      productCategory: 'UNITY',
      productImages: 'assets/images/top-game-05.jpg',
      onSale: false
    },
    {
      productName: 'Tower Fantasy',
      productPrice: 121,
      productCategory: 'Adventure',
      productImages: 'assets/images/categories-03.jpg',
      onSale: false
    },
    {
      productName: 'PUBG',
      productPrice: 299,
      productCategory: 'UNITY',
      productImages: 'assets/images/top-game-02.jpg',
      onSale: false
    },
    {
      productName: 'War Frame',
      productPrice: 299,
      productCategory: 'UNITY',
      productImages: 'assets/images/categories-05.jpg',
      onSale: false
    },
  ]

}
