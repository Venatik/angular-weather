import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { WeatherComponent } from "./components/weather/weather.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, WeatherComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "angular-weather";
}
