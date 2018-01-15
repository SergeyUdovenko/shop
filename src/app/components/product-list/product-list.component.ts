import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor(
    public productService: ProductService
  ) {  }

  ngOnInit() {
    this.products = this.productService.getProduct();
  }

}
