import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url:string="http://localhost:8080/"

  constructor(private http:HttpClient) { }

  bookTrade(obj:any){
    return (this.http.post(`${this.url}FX/bookTrade`,obj,{responseType:'text'}));
  }

  getTrades(){
    return (this.http.get(`${this.url}FX/trades`))
  }
}
