import { Product } from './../product.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css'],
})
export class AddEditProductComponent implements OnInit {
  addEditForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private product: Product,
    private dialogRef: MatDialogRef<AddEditProductComponent>,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.setForm();
  }

  onSubmit() {
    let product: Product;
    if (this.product) {
      product = this.productService.editProduct({
        ...this.addEditForm.value,
        id: this.product.id,
      });
    } else {
      product = this.productService.addProduct(this.addEditForm.value);
    }
    this.dialogRef.close(product);
  }

  setForm() {
    this.addEditForm = this.formBuilder.group({
      name: [this.product?.name, Validators.required],
      imageUrl: [this.product?.imageUrl, Validators.required],
      price: [this.product?.price, Validators.required],
      brandName: [this.product?.brandName, Validators.required],
      description: [this.product?.description],
    });
  }
}
