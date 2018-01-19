import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CartService } from '../../services/cart.service';
import { Product } from '../products/product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  productListString: Array<Product>;
  totalCount: number;
  totalPayment: number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.sub = this.cartService.channel$.subscribe(
      data => {
        const self = this;
        this.totalCount = 0;
        this.totalPayment = 0;
        this.productListString = JSON.parse(data);
        let result = this.productListString.map((item) => {
          this.totalCount = this.totalCount + item.count;
          return this.totalPayment = this.totalPayment + item.price * item.count;
        });
        console.log(result);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
