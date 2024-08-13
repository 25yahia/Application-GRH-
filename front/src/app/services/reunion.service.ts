import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { departement } from '../models/departement.model';
import { Reunion } from '../models/reunion.model';
import { Observable } from 'rxjs';
import { Employes } from '../models/Employes.model';
import { typeReunion } from '../models/typeReunion.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Réunions';
  reunions: Reunion[];
  departements: departement[];
  constructor(private http : HttpClient) { }


  listereunion(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
  listedepartement(): Observable<departement[]> {
    const departementUrl = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Departements'
    return this.http.get<departement[]>(departementUrl);
  }
  listetypereunion(): Observable<typeReunion[]> {
    const typeReunionUrl = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/TypeReunion'
    return this.http.get<typeReunion[]>(typeReunionUrl);
  }

  countreunion(): Observable<number> {
    const url = `${this.apiURL}/count`;
    return this.http.get<number>(url);
  }
  supprimerreunion(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterreunion(id: number): Observable<Reunion> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Reunion>(url);
  }
  updatereunion(rn: Reunion): Observable<Reunion> {
    return this.http.put<Reunion>(this.apiURL, rn, httpOptions);
  }
  ajouterReunion(rn: Reunion): Observable<Reunion> {
    return this.http.post<Reunion>(this.apiURL, rn, httpOptions);
  }
  listeEmployes(): Observable<Employes[]> {
    const EmployeUrl = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Employes';
    return this.http.get<Employes[]>(EmployeUrl);
  }
  addUsertoReuinin(id_meet: number, id_user: number): Observable<Reunion> {
    return this.http.put<Reunion>(`${this.apiURL}/${id_meet}/utilisateurs/${id_user}`, {});
  }



  rechercherParDateReunion(dateReunion: Date): Observable<Reunion> {
    const url = `${this.apiURL}/${dateReunion}`;
    return this.http.get<Reunion>(url);
  }


  getReunionsByUtilisateur(id: number): Observable<Reunion[]> {
    return this.http.get<Reunion[]>(`${this.apiURL}/ReunionbyUtilisateur/${id}`);
  }

  countReunionsUser(id: number): Observable<number> {
    const url = `${this.apiURL}/countConge/${id}`;
    return this.http.get<number>(url);

  }



}
