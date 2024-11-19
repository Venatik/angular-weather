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
}
