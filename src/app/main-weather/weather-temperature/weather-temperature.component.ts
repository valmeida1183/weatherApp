import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { WeatherResult } from 'src/app/models/weather-result.model';

@Component({
  selector: 'app-weather-temperature',
  templateUrl: './weather-temperature.component.html',
  styleUrls: ['./weather-temperature.component.scss'],
})
export class WeatherTemperatureComponent implements OnInit, OnChanges {
  @Input()
  weatherResult!: WeatherResult;

  temperature: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.loadProperties();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadProperties();
  }

  private loadProperties(): void {
    const value = this.weatherResult.main.temp;
    this.temperature = Math.round(value);
  }
}
