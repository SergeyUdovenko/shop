import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()  product: Product;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() edit = new EventEmitter<Product>();

  @HostBinding('style.transform') boxShadow = 'scale(1,1)';
  @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
    this.boxShadow = 'scale(1.05,1.05)';
  }
  @HostListener('mouseleave', ['$event']) onMouseLeave(event) {
    this.boxShadow = 'scale(1,1)';
  }

  constructor() { }

  ngOnInit() {
  }
  addToCart() {
    const product = this.product;
    this.addProduct.emit(product);
  }
  editProduct() {
    this.edit.emit(this.product);
  }


}
