import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {
  constructor(private _http: HttpClient) { }
  newsApiUrl = "http://newsapi.org/v2/top-headlines?country=tr&apiKey=6ce5576af37a4d3a8108882911613ed7"; // Manşet apisi
  techApiUrl = "http://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=6ce5576af37a4d3a8108882911613ed7";// Teknoloji apisi
  businessApiUrl = "http://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=6ce5576af37a4d3a8108882911613ed7"; // Ekonomi apisi
  entertainmentApiUrl = "http://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=6ce5576af37a4d3a8108882911613ed7";// Magazin apisi
  healthApiUrl = "http://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=6ce5576af37a4d3a8108882911613ed7";//Sağlık apisi
  sportsApiUrl = "http://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=6ce5576af37a4d3a8108882911613ed7";//Spor apisi
 
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl); //Manşetlerin getlenmesi
  }
  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl); // Teknoloji haberlerinin getlenmesi
  }

  businessNews(): Observable<any> {
    return this._http.get(this.businessApiUrl); // Ekonomi haberlerinin getlenmesi
  }
  entertainmentNews(): Observable<any> {
    return this._http.get(this.entertainmentApiUrl); // Eğlence haberlerinin getlenmesi
  }

  healthNews(): Observable<any> {
    return this._http.get(this.healthApiUrl); // Sağlık haberlerinin getlenmesi
  }
  sportsNews(): Observable<any> {
    return this._http.get(this.sportsApiUrl); // Spor haberlerinin getlenmesi
  }

}
