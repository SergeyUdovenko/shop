import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';

import { ProductService } from '../../services/product.service';
import { ConstantsService } from '../../services/constants.service';
import { ConfigOptionsService } from '../../services/config-options.service';

import {OrderByPipe} from '../../pipes/order-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductFormComponent,
    ProductComponent,
    OrderByPipe
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
