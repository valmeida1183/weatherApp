import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { iif, Observable, of } from 'rxjs';
import {
  debounceTime,
  defaultIfEmpty,
  distinctUntilChanged,
  filter,
  switchMap,
  tap,
} from 'rxjs/operators';
import { SearchResult } from '../models/search-result.model';
import { WeatherDataService } from '../services/weather-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl('');
  filteredOptions!: Observable<SearchResult[]>;

  constructor(private weatherDataService: WeatherDataService) {}

  ngOnInit(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      filter((value) => {
        return value !== null && value.length >= 1;
      }),
      distinctUntilChanged(),
      debounceTime(2000),
      switchMap((value) => this.weatherDataService.searchLocation(value)),
      tap((response) => {
        console.log(response);
      })
    );
  }

  displayFn(searchResult: SearchResult): string {
    return searchResult && searchResult.name ? searchResult.name : '';
  }

  onLeaveInput(): void {
    this.filteredOptions = of();
  }
}
