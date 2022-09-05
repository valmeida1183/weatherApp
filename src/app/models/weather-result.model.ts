export interface WeatherResult {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: MainInfo;
  visibility: number;
  wind: WindInfo;
  clouds: CloudInfo;
  dt: number;
  sys: SystemInfo;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WindInfo {
  speed: number;
  deg: number;
}

export interface CloudInfo {
  all: number;
}

export interface SystemInfo {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
