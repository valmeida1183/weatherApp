import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { MainWeatherComponent } from './main-weather/main-weather.component';
import { WeatherTitleComponent } from './main-weather/weather-title/weather-title.component';
import { WeatherImageComponent } from './main-weather/weather-image/weather-image.component';
import { WeatherTemperatureComponent } from './main-weather/weather-temperature/weather-temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWeatherComponent,
    WeatherTitleComponent,
    WeatherImageComponent,
    WeatherTemperatureComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
