import { Injectable } from '@angular/core';

import { Product } from '../product.model';

@Injectable()
export class ProductService {

  constructor() { }
  getProduct(): Product {
    return new Product(1, 'Demo Product', 'this is demo product');
  }
}
