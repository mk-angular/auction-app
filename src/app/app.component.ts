import { Component } from '@angular/core';
import { Product, ProductService } from './service/product.service';

@Component({
  selector: 'auction-application',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {
  products: Array<Product> = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
