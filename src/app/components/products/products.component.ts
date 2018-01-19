import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from './product/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product;
  products: Array<Product>;
  cartProducts: Array<Product> = [];
  filteredProducts: Array<Product> = [];

  constructor(
    public productService: ProductService,
    private cartService: CartService
  ) { }

  addToCart(product) {
    this.product = product;
    const self = this;

    function check() {
      if (self.cartProducts) {
        return self.cartProducts.some((el) => {
          return el === self.product;
        });
      } else {
        return true;
      }
    }

    if (check()) {
      this.product.count++;
    } else {
      this.cartProducts.push(this.product);
    }

    this.cartService.publishData(JSON.stringify(this.cartProducts));
  }

  ngOnInit() {
    this.products = this.productService.getProduct();
  }

}
