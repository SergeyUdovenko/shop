import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from '../../services/product.service';
import { ConstantsService } from '../../services/constants.service';
import { ConfigOptionsService } from '../../services/config-options.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  providers: [
    ProductService,
    ConstantsService,
    ConfigOptionsService,
    {
      provide: ConfigOptionsService, useValue: ConstantsService
    }
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
