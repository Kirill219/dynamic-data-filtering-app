import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterComponent } from './filter.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filter criteria on applyFilter', () => {
    spyOn(component.filterCriteriaChange, 'emit');
    component.applyFilter();
    expect(component.filterCriteriaChange.emit).toHaveBeenCalled();
  });

  it('should reset filters on resetFilters', () => {
    component.filterForm.setValue({ name: 'Test', category: 'Test', minPrice: 0, maxPrice: 100 });
    component.resetFilters();
    expect(component.filterForm.value).toEqual({ name: '', category: '', minPrice: null, maxPrice: null });
  });
});
