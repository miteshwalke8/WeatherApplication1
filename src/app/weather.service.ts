import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  url = "http://api.openweathermap.org/data/2.5/weather";
  apiKey = "fdd02b9835b7b1f21a7e8bcbb5464662";
  constructor( private http: HttpClient) { }

  public getWeather(city): Observable<any> {
   let params = new HttpParams()
   .set('q', city)
   .set('units','imperial')
   .set('appid', this.apiKey)
   return this.http.get(this.url, { params});

  }
 
  

}

