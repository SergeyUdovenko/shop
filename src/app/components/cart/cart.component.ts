import { Component, OnInit, OnDestroy, HostBinding, HostListener  } from '@angular/core';
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
  productListString: Array<Product>;
  cartProducts: Array<Product> = [];
  totalCount: number;
  totalPayment: number;

  private sub: Subscription;
  private prevValue: number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.sub = this.cartService.getProducts().subscribe(products => {
      this.cartProducts = products;
      this.totalCount = 0;
      this.totalPayment = 0;
      const result = this.cartProducts.map((item) => {
        this.totalCount = Number(this.totalCount) + item.count;
        return this.totalPayment = this.totalPayment + item.price * item.count;
      });
    });
  }

  setTotalValues () {
    this.totalPayment = Number(this.cartService.totalPayment);
    this.totalCount = Number(this.cartService.totalCount);
  }

  addNewValue(value) {
    this.cartService.onAddValue(value);
    this.setTotalValues ();
    console.log(this.totalCount);
  }

  onRemoveItem(item) {
    this.cartService.onRemoveProduct(item);
    this.setTotalValues ();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
