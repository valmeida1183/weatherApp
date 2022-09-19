import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResult } from '../models/weather-result.model';
import { WeatherDataService } from '../services/weather-data.service';

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.scss'],
})
export class MainWeatherComponent implements OnInit {
  @Input()
  weatherResult: WeatherResult | null | undefined;

  constructor(public weatherDataService: WeatherDataService) {}

  ngOnInit(): void {
    //this.weatherDataService.findCurrentLocation();
  }
}
