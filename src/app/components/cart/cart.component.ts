import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CartItemComponent } from './cart-item/cart-item.component';
import { CartService, LocalStorageService } from '../../services';
import { Product } from '../products/product/product.model';

@Component({
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
    private cartService: CartService,
    private localStor: LocalStorageService
  ) { }

  ngOnInit() {
    this.sub = this.cartService.getProducts().subscribe(products => {
      this.cartProducts = products;
      this.totalCount = 0;
      this.totalPayment = 0;
      const result = this.cartProducts.map((item) => {
        this.totalCount = Number(this.totalCount) + item.count;
        this.localStor.setItem(this.totalCount, 'TotalCount');
        return this.totalPayment = this.totalPayment + item.price * item.count;
      });
    });
  }

  setTotalValues () {
    this.totalPayment = Number(this.cartService.totalPayment);
    this.totalCount = Number(this.cartService.totalCount);
    this.localStor.setItem(this.totalCount, 'TotalCount');
  }

  addNewValue(value) {
    this.cartService.onAddValue(value);
    this.setTotalValues ();
  }

  onRemoveItem(item) {
    this.cartService.onRemoveProduct(item);
    this.setTotalValues ();
  }
  onClearCart() {
    this.cartService.clearCart();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
