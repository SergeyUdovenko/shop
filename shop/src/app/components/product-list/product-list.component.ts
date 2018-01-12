import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: Product;

  constructor(
    public productService: ProductService
  ) {  }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
