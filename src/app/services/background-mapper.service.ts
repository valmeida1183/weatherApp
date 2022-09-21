import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackgroundMapperService {
  backgroundMap = new Map<string, string>();
  constructor() {
    this.loadMap();
  }

  private loadMap(): void {
    // Day mappings
    this.backgroundMap.set('01d', 'shiny');
    this.backgroundMap.set('02d', 'shiny');
    this.backgroundMap.set('03d', 'day-cloudy');
    this.backgroundMap.set('04d', 'day-cloudy');
    this.backgroundMap.set('09d', 'day-rainy');
    this.backgroundMap.set('10d', 'day-rainy');
    this.backgroundMap.set('11d', 'day-rainy');
    this.backgroundMap.set('13d', 'snow');
    this.backgroundMap.set('50d', 'snow');

    // Night mappings
    this.backgroundMap.set('01n', 'night');
    this.backgroundMap.set('02n', 'night');
    this.backgroundMap.set('03n', 'night-cloudy');
    this.backgroundMap.set('04n', 'night-cloudy');
    this.backgroundMap.set('09n', 'night-rainy');
    this.backgroundMap.set('10n', 'night-rainy');
    this.backgroundMap.set('11n', 'night-rainy');
    this.backgroundMap.set('13n', 'snow');
    this.backgroundMap.set('50n', 'snow');
  }
}
