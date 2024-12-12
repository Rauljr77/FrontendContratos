import { Injectable, signal } from '@angular/core';
import { IWeatherForecast } from '../interface/demo';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  private readonly apiUrl: string = "https://localhost:44387/WeatherForecast";
  data = signal<IWeatherForecast[]>([]);
  error = signal<string | null>(null);

  async getWeatherForecast() {
    try {
      const response = await fetch(this.apiUrl, { 
        method  : 'GET',
        headers : {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        } 
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      console.log("Data service", data);
      this.data.set(data);
    } catch (error: any) {
      console.error('There was a problem with the fetch operation:', error);
      this.error.set(error.message);
    }
  }
}
