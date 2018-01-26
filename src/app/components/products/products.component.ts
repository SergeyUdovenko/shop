import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ConstantsService } from '../../services/constants.service';
import { ConfigOptionsService } from '../../services/config-options.service';

import { ProductComponent } from './product/product.component';
import { CartComponent } from '../cart/cart.component';

import { Product } from './product/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [{
    provide: ConfigOptionsService, useClass: ConstantsService
  }]

})
export class ProductsComponent implements OnInit {

  product: Product;
  products: Array<Product>;
  cartProducts: Array<Product> = [];
  filteredProducts: Array<Product> = [];

  constructor(
    public productService: ProductService,
    private cartService: CartService,
    private constantsService: ConfigOptionsService
  ) { }

  addToCart(product) {
    this.product = product;
    this.cartService.onAddProduct(product);
  }

  onRemoveItem(item) {
    const pos = this.cartProducts.indexOf(item);
    this.cartProducts.splice(pos, 1);
  }

  ngOnInit() {
    this.products = this.productService.getProduct();
    console.log(this.constantsService.Constants);
  }

}
