import { Component, OnInit, HostBinding, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService, CartService, ConstantsService, GeneratorService, ConfigOptionsService, countOf  } from '../../services';

import { ProductComponent } from './product/product.component';
import { CartComponent } from '../cart/cart.component';

import { Product } from './product/product.model';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [{
    provide: ConfigOptionsService, useClass: ConstantsService
  },
  {
    provide: countOf, useFactory: GeneratorService(8)
  }
]

})
export class ProductsComponent implements OnInit {

  product: Product;
  products: Array<Product>;
  cartProducts: Array<Product> = [];
  filteredProducts: Array<Product> = [];
  additionalContent: string;
  totalCount: number;

  constructor(
    public productService: ProductService,
    private cartService: CartService,
    private constantsService: ConfigOptionsService,
    @Inject(countOf) private CountOf: string,
    private router: Router
  ) { }

  addToCart(product) {
    this.product = product;
    this.cartService.onAddProduct(product);
    this.cartService.totalCountsCheck();
    this.totalCount = this.cartService.totalCount;
  }

  onRemoveItem(item) {
    const pos = this.cartProducts.indexOf(item);
    this.cartProducts.splice(pos, 1);
  }

  editProduct(product: Product): void {
    const link = ['/edit', product.id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.getProducts().catch(err => console.log(err));
    this.additionalContent = this.CountOf;
    this.cartService.totalCountsCheck();
    this.totalCount = this.cartService.totalCount;
  }

  private async getProducts() {
    this.products = await this.productService.getProducts();
  }

}
