import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  imports: [CommonModule, ProductDetailsRoutingModule],
  declarations: [ProductDetailsComponent],
})
export class ProductDetailsModule {}
