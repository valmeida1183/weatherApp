import { Component, Input, OnInit } from '@angular/core';
import { WeatherResult } from 'src/app/models/weather-result.model';
import { IconMapperService } from 'src/app/services/icon-mapper.service';

@Component({
  selector: 'app-weather-image',
  templateUrl: './weather-image.component.html',
  styleUrls: ['./weather-image.component.scss'],
})
export class WeatherImageComponent implements OnInit {
  @Input()
  weatherResult!: WeatherResult;

  iconClass: string = '';

  constructor(private iconMapperService: IconMapperService) {}

  ngOnInit(): void {
    const { icon: iconKey, description } = this.weatherResult.weather[0];
    this.iconClass = this.iconMapperService.iconMap.get(iconKey) ?? '';
  }
}
