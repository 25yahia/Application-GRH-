import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RH } from '../models/rh.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class RHService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/RHs';
  constructor(private http : HttpClient) { }


  countRhActive(): Observable<number> {
    const url = `${this.apiURL}/countActiveRH`;
    return this.http.get<number>(url);

  }


  updateRH(emp: RH): Observable<RH> {
    return this.http.put<RH>(this.apiURL, emp, httpOptions);
  }








}
