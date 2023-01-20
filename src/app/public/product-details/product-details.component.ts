import { Product } from './../../admin/products/product.model';
import { ProductsService } from './../../admin/products/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.getProducts(param['id']);
    });
  }

  getProducts(id: number) {
    this.product = this.productsService.getProduct(id);
  }
}
