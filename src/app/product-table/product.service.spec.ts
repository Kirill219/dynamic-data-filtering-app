import {ComponentFixture, TestBed} from '@angular/core/testing';
import { ProductService } from './product.service';
import {ProductTableComponent} from "./product-table.component";

describe('ProductTableComponent', () => {
  let component: ProductTableComponent;
  let fixture: ComponentFixture<ProductTableComponent>;
  let productService: jasmine.SpyObj<ProductService>;

  beforeEach(async () => {
    productService = jasmine.createSpyObj('ProductService', ['getProducts']);
    await TestBed.configureTestingModule({
      declarations: [ProductTableComponent],
      providers: [{ provide: ProductService, useValue: productService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTableComponent);
    component = fixture.componentInstance;
    productService.getProducts.and.returnValue([{ name: 'Product 1', category: 'Category 1', price: 100 }]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on initialization', () => {
    expect(component.products.length).toBeGreaterThan(0);
  });

  it('should apply filters correctly', () => {
    component.products = [{ name: 'Product 1', category: 'Category 1', price: 100 }, { name: 'Product 2', category: 'Category 2', price: 200 }];
    component.applyFilters({ name: 'Product', category: 'Category', minPrice: 0, maxPrice: 150 });
    expect(component.filteredData.data.length).toBe(1);
  });
});
