import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AppRoutingModule, appRouterComponents } from './app-routing.module';
import { ProductsModule } from './components/products/products.module';

import { AppComponent } from './app.component';
import { CartComponent,  CartItemComponent } from './components/';

import { ClickDecoratorDirective } from './directives/click-decorator.directive';
import { CartService, LocalStorageService, ConfigOptionsService } from './services/';
import { LoginformComponent } from './components/loginform/loginform.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent,
    ClickDecoratorDirective,
    appRouterComponents,
    LoginformComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CartService,
    LocalStorageService,
    ConfigOptionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
