import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()  product: Product;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }
  addToCart() {
    const product = this.product;
    this.addProduct.emit(product);
  }


}
