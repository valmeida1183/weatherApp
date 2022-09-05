import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IconMapperService {
  iconMap = new Map<string, string>();
  constructor() {
    this.loadMap();
  }

  private loadMap(): void {
    // Day mappings
    this.iconMap.set('01d', 'wi-day-sunny');
    this.iconMap.set('02d', 'wi-day-cloudy');
    this.iconMap.set('03d', 'wi-cloud');
    this.iconMap.set('04d', 'wi-cloudy');
    this.iconMap.set('09d', 'wi-rain');
    this.iconMap.set('10d', 'wi-day-rain');
    this.iconMap.set('11d', 'wi-day-thunderstorm');
    this.iconMap.set('13d', 'wi-day-snow');
    this.iconMap.set('50d', 'wi-day-fog');

    // Night mappings
    this.iconMap.set('01n', 'wi-night-clear');
    this.iconMap.set('02n', 'wi-night-alt-cloudy');
    this.iconMap.set('03n', 'wi-cloud');
    this.iconMap.set('04n', 'wi-cloudy');
    this.iconMap.set('09n', 'wi-rain');
    this.iconMap.set('10n', 'wi-night-alt-rain');
    this.iconMap.set('11n', 'wi-night-thunderstorm');
    this.iconMap.set('13n', 'wi-night-snow');
    this.iconMap.set('50n', 'wi-night-fog');
  }
}
