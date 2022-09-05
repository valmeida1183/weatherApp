import { Component, Input, OnInit } from '@angular/core';
import { WeatherResult } from 'src/app/models/weather-result.model';

@Component({
  selector: 'app-weather-temperature',
  templateUrl: './weather-temperature.component.html',
  styleUrls: ['./weather-temperature.component.scss'],
})
export class WeatherTemperatureComponent implements OnInit {
  @Input()
  weatherResult!: WeatherResult;

  temperature: number = 0;
  constructor() {}

  ngOnInit(): void {
    const value = this.weatherResult.main.temp;
    this.temperature = Math.round(value);
  }
}
