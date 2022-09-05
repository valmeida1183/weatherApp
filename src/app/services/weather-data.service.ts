import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IpInfo } from '../models/ip-info.model';
import { WeatherResult } from '../models/weather-result.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  private readonly ipInfoToken = '0498ff714cbfc8';
  private readonly ipInfoUrl = 'https://ipinfo.io';
  private readonly openWeatherUrl = 'https://api.openweathermap.org/data/2.5';
  private readonly openWeatherApiKey = 'fdec262a4a83aa0937c2c9ca1d1103a9';

  constructor(private http: HttpClient) {}

  findCurrentLocation(): Observable<WeatherResult> {
    return this.http
      .get<IpInfo>(this.ipInfoUrl, {
        params: new HttpParams().set('token', this.ipInfoToken),
      })
      .pipe(
        switchMap((ipInfo: IpInfo, index: number) => {
          const location = ipInfo.loc.split(',');
          const latitude = location[0];
          const longitude = location[1];

          return this.http.get<WeatherResult>(
            `${this.openWeatherUrl}/weather`,
            {
              params: new HttpParams()
                .set('lat', latitude)
                .set('lon', longitude)
                .set('units', 'metric')
                .set('lang', 'pt_br')
                .set('appid', this.openWeatherApiKey),
            }
          );
        })
      );
  }
}
