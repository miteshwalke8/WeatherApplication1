import { Component, OnInit, ɵConsole } from '@angular/core';
import { WeatherService } from '../weather.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import * as XLSX from 'xlsx';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  CityWeatherData: any;
  WeatherData: any;
  title: 'exportexcel';
  fileName = 'WeatherDetails.xlsx';
  faCoffee = faCoffee;

  constructor(public weatherService: WeatherService) { }


  ngOnInit() {
  }

  getCity(city) {
    this.weatherService.getWeather(city).subscribe(data => {
      this.WeatherData = data;
      console.log(this.WeatherData);
    })
  }



  exportexcel(): void {

    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);


    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);

  }

}
