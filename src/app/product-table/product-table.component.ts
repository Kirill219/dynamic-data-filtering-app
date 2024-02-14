import {Component, ViewChild} from '@angular/core';
import {Product} from "./product.model";
import {ProductService} from "./product.service";
import {MatTableDataSource} from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  filteredData = new MatTableDataSource<Product>([]);
  products: Product[] = [];
  displayedColumns: string[] = ['name', 'category', 'price'];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.filteredData.data = this.products;
  }

  ngAfterViewInit() {
    this.filteredData.paginator = this.paginator;
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
  }

  applyFilters(filterCriteria: any) {
    this.filteredData.data = this.products.filter(product => {
      const namePass = filterCriteria.name ? product.name.toLowerCase().includes(filterCriteria.name.toLowerCase()) : true;
      const categoryPass = filterCriteria.category ? product.category.toLowerCase().includes(filterCriteria.category.toLowerCase()) : true;
      const minPricePass = filterCriteria.minPrice ? product.price >= filterCriteria.minPrice : true;
      const maxPricePass = filterCriteria.maxPrice ? product.price <= filterCriteria.maxPrice : true;
      return namePass && categoryPass && minPricePass && maxPricePass;
    });
  }
}
