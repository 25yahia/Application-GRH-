import { typeReunion } from './../models/typeReunion.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class TypeReunionService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/TypeReunion';
  typeReunions:typeReunion[];

  constructor(private http : HttpClient) { }


  listetypereunion(): Observable<typeReunion[]> {
    return this.http.get<typeReunion[]>(this.apiURL);
  }

  ajoutertypereunion(tr: typeReunion): Observable<typeReunion> {
    return this.http.post<typeReunion>(this.apiURL, tr, httpOptions);
  }



  supprimertypereunion(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consultertypereunion(id: number): Observable<typeReunion> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<typeReunion>(url);
  }


  triertypereunion() {
    this.typeReunions = this.typeReunions.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }

  updatetypereunino(tpc: typeReunion): Observable<typeReunion> {
    return this.http.put<typeReunion>(this.apiURL, tpc, httpOptions);
  }




  rechercherParID(id: number): Observable<typeReunion> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<typeReunion>(url);
  }


      counttypereunion(): Observable<number> {
        const url = `${this.apiURL}/count`;
        return this.http.get<number>(url);
      }
























}
