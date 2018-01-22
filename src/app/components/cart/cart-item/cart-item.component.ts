import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../products/product/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: Product;
  @Output() removeItem: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() changeCount: EventEmitter<number> = new EventEmitter<number>();
  showPrice: number;
  constructor() { }

   addNewValue(value) {
    if (value > 0) {
      this.item.count = value;
      this.showPrice = this.item.price * this.item.count;
    }
    this.changeCount.emit(value);
  }

  onRemoveItem(item) {
    this.removeItem.emit(item);
  }

  ngOnInit() {
    this.showPrice = this.item.price * this.item.count;
  }

}
