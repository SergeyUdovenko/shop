import { Component, OnInit, HostBinding, HostListener, Inject } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ConstantsService } from '../../services/constants.service';
import { ConfigOptionsService } from '../../services/config-options.service';

import { countOf, GeneratorService  } from '../../services/generator.service';

import { ProductComponent } from './product/product.component';
import { CartComponent } from '../cart/cart.component';

import { Product } from './product/product.model';

@Component({
  selector: 'app-products',
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

  constructor(
    public productService: ProductService,
    private cartService: CartService,
    private constantsService: ConfigOptionsService,
    @Inject(countOf) private CountOf: string,
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
    this.additionalContent = this.CountOf;
    console.log(this.constantsService.Constants);
  }

}
