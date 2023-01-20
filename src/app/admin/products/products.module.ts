import { ConfirmationPopupModule } from './../../reusable/confirmation-popup/confirmation-popup.module';
import { ProductsRoutingModule } from './products-routing.module';
import { AddEditProductModule } from './add-edit-product/add-edit-product.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AddEditProductModule,
    ConfirmationPopupModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
