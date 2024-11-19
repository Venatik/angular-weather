import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherData } from "../types/weather.interface";
import { environment } from "../../environment";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${environment.weatherApiUrl}/weather?q=${city}&appid=${environment.weatherApiKey}&units=metric`
    );
  }

  searchCities(query: string): Observable<any> {
    return this.http.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${environment.weatherApiKey}`
    );
  }
}
