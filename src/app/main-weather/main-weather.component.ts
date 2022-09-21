import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResult } from '../models/weather-result.model';

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.scss'],
})
export class MainWeatherComponent implements OnInit {
  @Input()
  weatherResult: WeatherResult | null | undefined;

  constructor() {}

  ngOnInit(): void {}
}
