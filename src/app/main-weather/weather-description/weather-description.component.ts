import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WeatherResult } from 'src/app/models/weather-result.model';

@Component({
  selector: 'app-weather-description',
  templateUrl: './weather-description.component.html',
  styleUrls: ['./weather-description.component.scss'],
})
export class WeatherDescriptionComponent implements OnInit, OnChanges {
  @Input()
  weatherResult!: WeatherResult;

  description: string = '';
  constructor() {}

  ngOnInit(): void {
    this.loadProperties();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadProperties();
  }

  private loadProperties(): void {
    const { description } = this.weatherResult.weather[0];
    this.description = this.capitalizeFirstLetter(description);
  }

  private capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
