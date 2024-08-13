import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responsable } from '../models/responsable.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Resonsables';

  constructor(private http : HttpClient) { }

  countResponsableActive(): Observable<number> {
    const url = `${this.apiURL}/countActiveResponsable`;
    return this.http.get<number>(url);

  }

  updateResponsable(emp: Responsable): Observable<Responsable> {
    return this.http.put<Responsable>(this.apiURL, emp, httpOptions);
  }



}
