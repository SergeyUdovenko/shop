import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';

import { Product } from './../product/product.model';

import { ProductService } from '../../../services';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: Params) => this.productService.getProduct(+params.get('id'))))
      .subscribe(
        product => this.product = {...product},
        err => console.log(err)
      );
  }

  saveProduct() {
    const product = { ...this.product };

    if (product.id) {
      this.productService.updateProduct(product);
    } else {
      this.productService.addProduct(product);
    }
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
