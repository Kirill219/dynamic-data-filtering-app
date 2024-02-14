import { Injectable } from '@angular/core';
import {Product} from "./product.model";

const categories = ['Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Sports', 'Toys'];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  getProducts(): Product[] {
    const mockData: Product[] = [];
    for (let i = 1; i <= 1000; i++) {
      const product: Product = {
        name: `Product ${i}`,
        category: categories[Math.floor(Math.random() * categories.length)],
        price: Math.floor(Math.random() * 1000) + 1,
      };
      mockData.push(product);
    }
    return mockData;
  }
}
