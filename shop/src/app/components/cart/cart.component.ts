import { Component, OnInit } from '@angular/core';

import { CartItem, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Array<CartItem>;

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

}
