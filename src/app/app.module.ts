import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutingModule, appRouterComponents } from './app-routing.module';
import { ProductsModule } from './components/products/products.module';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';

import { CartService } from './services/cart.service';
import { LocalStorageService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { LoginModule } from './components/loginform/login.module';
import { ClickDecoratorDirective } from './directives/click-decorator.directive';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent,
    ClickDecoratorDirective,
    appRouterComponents
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    FormsModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [
    CartService,
    LocalStorageService,
    ConfigOptionsService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
