import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {ProductsModule} from './components/products/products.module';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';

import { CartService } from './services/cart.service';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    FormsModule
  ],
  providers: [
    CartService
   ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
