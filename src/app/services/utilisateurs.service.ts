import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateurs } from '../models/utilisateurs.model';
import { RH } from '../models/rh.model';
import { Responsable } from '../models/responsable.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Utilisateurs';
  apiRH: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/RHs';
  apiResponsable: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Resonsables';

  constructor(private http : HttpClient) { }

  countUtilisateurs(): Observable<number> {
    const url = `${this.apiURL}/count`;
    return this.http.get<number>(url);

  }

  consulterUtilisateurs(id: number): Observable<Utilisateurs> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Utilisateurs>(url);
  }
  
  updateutilisateur(uti: Utilisateurs): Observable<Utilisateurs> {
    return this.http.put<Utilisateurs>(this.apiURL, uti, httpOptions);
  }
  listutilisitaeur(): Observable<Utilisateurs[]> {
    return this.http.get<Utilisateurs[]>(this.apiURL);
  }


  AuthentifierUtilisateur(username: String,password:String): Observable<Utilisateurs> {
    const url = `${this.apiURL}/AuthentifierUtilisateur/${username}/${password}`;
    return this.http.get<Utilisateurs>(url);
  }








}
