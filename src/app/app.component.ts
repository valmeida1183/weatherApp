import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather, WeatherResult } from './models/weather-result.model';
import { BackgroundMapperService } from './services/background-mapper.service';
import { WeatherDataService } from './services/weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Weather App';
  currentYear = new Date().getFullYear();
  weatherResult: WeatherResult | undefined;
  backgroundClass = 'shiny';

  constructor(
    private weatherDataService: WeatherDataService,
    private backgroundMappserService: BackgroundMapperService
  ) {}

  ngOnInit(): void {
    this.weatherDataService.findCurrentLocation().subscribe((weatherResult) => {
      const { icon: iconKey } = weatherResult.weather[0];
      this.weatherResult = weatherResult;
      // this.backgroundClass =
      //   this.backgroundMappserService.backgroundMap.get(iconKey) ?? 'shiny';
      this.backgroundClass = 'shiny';
    });
  }
}
