import { Component } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
import { WeatherData } from "../../types/weather.interface";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-weather",
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: "./weather.component.html",
  styleUrl: "./weather.component.scss",
})
export class WeatherComponent {
  weatherData: WeatherData | undefined;

  constructor(private weatherService: WeatherService) {}

  searchCity(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: data => (this.weatherData = data),
      error: err => console.error("Error fetching weather:", err),
    });
  }
}
