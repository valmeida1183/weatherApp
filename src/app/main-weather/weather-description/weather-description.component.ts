import { Component, Input, OnInit } from '@angular/core';
import { WeatherResult } from 'src/app/models/weather-result.model';

@Component({
  selector: 'app-weather-description',
  templateUrl: './weather-description.component.html',
  styleUrls: ['./weather-description.component.scss'],
})
export class WeatherDescriptionComponent implements OnInit {
  @Input()
  weatherResult!: WeatherResult;

  description: string = '';
  constructor() {}

  ngOnInit(): void {
    const { description } = this.weatherResult.weather[0];
    this.description = this.capitalizeFirstLetter(description);
  }

  private capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
