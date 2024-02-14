import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() filterCriteriaChange = new EventEmitter<any>();

  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      name: '',
      category: '',
      minPrice: null,
      maxPrice: null
    });
  }

  applyFilter() {
    const filterCriteria = this.filterForm.value;
    this.filterCriteriaChange.emit(filterCriteria);
  }

  resetFilters() {
    this.filterForm.reset();
    this.applyFilter();
  }
}
