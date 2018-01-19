import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ProductsModule} from './components/products/products.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';

import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductService,
    CartService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
