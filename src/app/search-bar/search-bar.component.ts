import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
      switchMap((value) => this.weatherDataService.searchLocations(value)),
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

  onOptionSelected(selectedOption: MatAutocompleteSelectedEvent): void {
    console.log(selectedOption);
    const searchResult: SearchResult = selectedOption.option.value;

    if (searchResult) {
      const { lat: latitude, lon: longitude } = searchResult;

      this.weatherDataService.findLocationWeather(latitude, longitude);
    }
  }
}
