import { environment } from './../../../environments/environment';
import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  addProduct(product: Product) {
    const jsonProducts = localStorage.getItem(environment.productTable);
    if (jsonProducts) {
      const products: Product[] = JSON.parse(jsonProducts);
      product.id = products.length + 1;
      products.push(product);
      localStorage.setItem(environment.productTable, JSON.stringify(products));
    } else {
      product.id = 1;
      localStorage.setItem(environment.productTable, JSON.stringify([product]));
    }
    return product;
  }

  editProduct(product: Product) {
    const jsonProducts = localStorage.getItem(environment.productTable);
    if (jsonProducts) {
      const products: Product[] = JSON.parse(jsonProducts);
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == product.id) {
          products[i] = product;
        }
      }
      localStorage.setItem(environment.productTable, JSON.stringify(products));
    }
    return product;
  }

  deleteProduct(id: number) {
    const jsonProducts = localStorage.getItem(environment.productTable);
    if (jsonProducts) {
      const products: Product[] = JSON.parse(jsonProducts);
      let index: number;
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
          index = i;
        }
      }
      products.splice(index, 1);
      localStorage.setItem(environment.productTable, JSON.stringify(products));
    }
  }

  getProducts() {
    const jsonProducts = localStorage.getItem(environment.productTable);
    if (jsonProducts) {
      const products: Product[] = JSON.parse(jsonProducts);
      return products;
    }
    return null;
  }

  getProduct(id: number) {
    const jsonProducts = localStorage.getItem(environment.productTable);
    if (jsonProducts) {
      const products: Product[] = JSON.parse(jsonProducts);
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
          return products[i];
        }
      }
    }
    return null;
  }
}
