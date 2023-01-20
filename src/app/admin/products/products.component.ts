import { ConfirmationPopupComponent } from './../../reusable/confirmation-popup/confirmation-popup.component';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(
    private dialog: MatDialog,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  addEditPopup(product?: Product, index?: number) {
    const dialogRef = this.dialog.open(AddEditProductComponent, {
      width: '50%',
      autoFocus: false,
      disableClose: true,
      data: product,
    });
    dialogRef.afterClosed().subscribe((myProduct) => {
      if (myProduct) {
        if (product) {
          this.products[index] = myProduct;
        } else {
          if (this.products) {
            this.products.push(myProduct);
          } else {
            this.products = [myProduct];
          }
        }
      }
    });
  }

  getProduct() {
    this.products = this.productsService.getProducts();
    console.log(this.products);
  }

  deleteProduct(id: number, index: number) {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '25%',
      autoFocus: false,
      data: 'Are you sure you want to delete the product? ',
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.productsService.deleteProduct(id);
        this.products.splice(index, 1);
      }
    });
  }
}
