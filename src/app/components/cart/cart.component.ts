import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CartItemComponent } from './cart-item/cart-item.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../products/product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy  {
  private sub: Subscription;
  private prevValue: number;
  productListString: Array<Product>;
  totalCount: number;
  totalPayment: number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.sub = this.cartService.channel$.subscribe(
      data => {
        this.totalCount = 0;
        this.totalPayment = 0;
        this.productListString = JSON.parse(data);
        const result = this.productListString.map((item) => {
          this.totalCount = this.totalCount + item.count;
          return this.totalPayment = this.totalPayment + item.price * item.count;
        });
      }
    );
  }

  addNewValue(value) {
    this.totalCount = this.productListString.reduce((sum, cur) => {
      return sum += Number(cur.count);
    }, 0);
    this.totalPayment = this.productListString.reduce((sum, cur) => {
      cur.totalPrice = cur.price * cur.count;
      return sum += Number(cur.totalPrice);
    }, 0);
  }

  onRemoveItem(item) {
    this.totalCount = this.totalCount - 1;
    const pos = this.productListString.indexOf(item);
    this.productListString.splice(pos, 1);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
