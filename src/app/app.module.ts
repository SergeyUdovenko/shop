import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {ProductsModule} from './components/products/products.module';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';

import { CartService } from './services/cart.service';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { ClickDecoratorDirective } from './directives/click-decorator.directive';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent,
    LoginformComponent,
    ClickDecoratorDirective
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    FormsModule
  ],
  providers: [
    CartService,
    LocalStorageService,
    ConfigOptionsService
   ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
