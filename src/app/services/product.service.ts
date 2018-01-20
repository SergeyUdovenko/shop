import { Injectable } from '@angular/core';

import {Product} from '../components/products/product/product.model';

const ProductList: Array<Product> = [
  new Product(1, 'Demo Product', 'this is demo product', 25, 1),
  new Product(2, 'Demo Product1', 'this is demo product1', 35,  1),
  new Product(3, 'Demo Product2', 'this is demo product2', 45,  1),
  new Product(4, 'Demo Product3', 'this is demo product3', 25,  1),
  new Product(5, 'Demo Product4', 'this is demo product4', 75, 1)
];

@Injectable()

export class ProductService {

  constructor() { }

  getProduct(): Array<Product> {
    return ProductList;
  }

}
