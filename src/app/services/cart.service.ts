import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Product } from '../components/products/product/product.model';

@Injectable()
export class CartService {
  totalCount: number;
  totalPayment: number;
  private product: Product;
  private products: Array<Product> = [];
  private incomingProducts: Array<Product> = JSON.parse(localStorage.getItem('cart')) || [];
  private cartProducts: BehaviorSubject<Array<Product>> = new BehaviorSubject(this.products);

  constructor(
  ) {}

  onAddProduct(product) {
    const self = this;
    this.product = product;
    function check() {
      if (self.incomingProducts) {
        return self.incomingProducts.some((el) => {
          return el === self.product;
        });
      } else {
        return true;
      }
    }
    if (check()) {
      this.product.count++;
    } else {
      this.incomingProducts.push(this.product);
    }
    this.cartProducts.next(this.incomingProducts);
  }

  totalCountsCheck() {
    this.totalCount = this.incomingProducts.reduce((sum, cur) => {
      return sum += Number(cur.count);
    }, 0);
    this.totalPayment = this.incomingProducts.reduce((sum, cur) => {
      cur.totalPrice = cur.price * cur.count;
      return sum = Number(sum) + Number(cur.totalPrice);
    }, 0);
  }

  onAddValue(value) {
    this.totalCountsCheck();
  }

  onRemoveProduct(item) {
    item.count = 1;
    const pos = this.incomingProducts.indexOf(item);
    this.incomingProducts.splice(pos, 1);
    const text = JSON.stringify( this.incomingProducts );
    localStorage.setItem('cart', text);
    this.totalCountsCheck();
    this.cartProducts.next(this.incomingProducts);
  }

  clearCart() {
    this.incomingProducts.forEach((val) => {
      return val.count = 1;
    });
    this.incomingProducts = [];
    this.totalCountsCheck();
    this.cartProducts.next(this.incomingProducts);
  }

  getProducts () {
    return this.cartProducts.asObservable();
  }

}
