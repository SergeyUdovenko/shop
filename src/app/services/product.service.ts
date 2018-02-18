import { Injectable } from '@angular/core';

import {Product} from '../components/products/product/product.model';

const ProductList: Array<Product> = [
  new Product(1, 'Demo Product', 'this is demo product', 25, 1, true),
  new Product(2, 'Demo Product1', 'this is demo product1', 35,  1, true),
  new Product(3, 'Demo Product2', 'this is demo product2', 45,  1, true),
  new Product(4, 'Demo Product3', 'this is demo product3', 25,  1, true),
  new Product(5, 'Demo Product4', 'this is demo product4', 75, 1)
];

const ProductListPromise = Promise.resolve(ProductList);

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Promise<Product[]> {
    return ProductListPromise;
  }

  getProduct(id: number | string): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getTask method'));
  }
  addProduct(product: Product): void {
    ProductList.push(product);
  }
  updateProduct(product: Product): void {
    const i = ProductList.findIndex(t => t.id === product.id);

    if (i > -1) {
      ProductList.splice(i, 1, product);
    }
  }

}
