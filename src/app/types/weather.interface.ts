export interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
  };
  name: string;
}
