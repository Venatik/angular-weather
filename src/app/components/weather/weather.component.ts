import { Component } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
import { WeatherData } from "../../types/weather.interface";
import { DecimalPipe } from "@angular/common";
import { debounceTime, distinctUntilChanged, Subject } from "rxjs";

@Component({
  selector: "app-weather",
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: "./weather.component.html",
  styleUrl: "./weather.component.scss",
})
export class WeatherComponent {
  weatherData: WeatherData | undefined;
  suggestions: any[] = [];
  searchSubject = new Subject<string>();

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(query => {
        if (query.length > 2) {
          this.weatherService.searchCities(query).subscribe({
            next: cities => (this.suggestions = cities),
            error: err => console.error("Error fetching cities:", err),
          });
        } else {
          this.suggestions = [];
        }
      });
  }

  searchCity(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: data => (this.weatherData = data),
      error: err => console.error("Error fetching weather:", err),
    });
  }

  onInput(event: any) {
    this.searchSubject.next(event.target.value);
  }

  selectCity(city: any) {
    this.searchCity(`${city.name}, ${city.country}`);
    this.suggestions = [];
  }
}
