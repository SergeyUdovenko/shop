import { Injectable } from '@angular/core';

import { Product } from '../components/product-list/product.model';

@Injectable()
export class ProductService {
  constructor() { }
  getProduct(): Array<Product> {
    return [
      new Product(1, 'Demo Product', 'this is demo product'),
      new Product(2, 'Demo Product1', 'this is demo product1'),
      new Product(2, 'Demo Product2', 'this is demo product2'),
      new Product(2, 'Demo Product3', 'this is demo product3'),
      new Product(2, 'Demo Product4', 'this is demo product4')
    ];
  }
}
