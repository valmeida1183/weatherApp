import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WeatherResult } from 'src/app/models/weather-result.model';

@Component({
  selector: 'app-weather-title',
  templateUrl: './weather-title.component.html',
  styleUrls: ['./weather-title.component.scss'],
})
export class WeatherTitleComponent implements OnInit, OnChanges {
  @Input()
  weatherResult!: WeatherResult;

  cityName: string;
  countryCode: string;

  constructor() {
    this.cityName = '';
    this.countryCode = '';
  }

  ngOnInit(): void {
    this.loadProperties();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadProperties();
  }

  private loadProperties(): void {
    this.cityName = this.weatherResult.name;
    this.countryCode = this.weatherResult.sys.country;
  }
}
