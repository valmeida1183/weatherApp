import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainWeatherComponent } from './main-weather/main-weather.component';
import { WeatherTitleComponent } from './main-weather/weather-title/weather-title.component';
import { WeatherImageComponent } from './main-weather/weather-image/weather-image.component';
import { WeatherTemperatureComponent } from './main-weather/weather-temperature/weather-temperature.component';

@NgModule({
  declarations: [AppComponent, MainWeatherComponent, WeatherTitleComponent, WeatherImageComponent, WeatherTemperatureComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
