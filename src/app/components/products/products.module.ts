import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from '../../services/product.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
