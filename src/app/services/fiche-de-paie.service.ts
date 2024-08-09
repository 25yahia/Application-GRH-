import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FicheDePaie } from '../models/FicheDePaie.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class FicheDePaieService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/FicheDePaie';
  FicheDePaies : FicheDePaie [];
  constructor(private http : HttpClient) { }

  listeFicheDePaie(): Observable<FicheDePaie[]> {
    return this.http.get<FicheDePaie[]>(this.apiURL);
  }
  ajouterFicheDePaie(fdp: FicheDePaie): Observable<FicheDePaie> {
    return this.http.post<FicheDePaie>(this.apiURL, fdp, httpOptions);
  }

  updateFicheDePaie(fdp: FicheDePaie): Observable<FicheDePaie> {
    return this.http.put<FicheDePaie>(this.apiURL, fdp, httpOptions);
  }
  countFicheDePaie(): Observable<number> {
    const url = `${this.apiURL}/count`;
    return this.http.get<number>(url);
  }
  consulterFicheDePaie(id: number): Observable<FicheDePaie> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<FicheDePaie>(url);
  }
  rechercherParID(id: number): Observable<FicheDePaie> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<FicheDePaie>(url);
  }





}
