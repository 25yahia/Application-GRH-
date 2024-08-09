import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { typeconge } from '../models/typeconge.model';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class TypecongeService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/TypeConges';
  apiURLNom: string='http://localhost:8080/ApplicationSystemeRessourcesHumaines/restes/search';

  typeconges: typeconge[];
  constructor(private http : HttpClient) { }
  listetypeconge(): Observable<typeconge[]> {
    return this.http.get<typeconge[]>(this.apiURL);
  }

  ajoutertypeconge(tc: typeconge): Observable<typeconge> {
    return this.http.post<typeconge>(this.apiURL, tc, httpOptions);
  }



  supprimertypeconge(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consultertypeconge(id: number): Observable<typeconge> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<typeconge>(url);
  }


  triertypeconge() {
    this.typeconges = this.typeconges.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }

  updatetypeconge(tc: typeconge): Observable<typeconge> {
    return this.http.put<typeconge>(this.apiURL, tc, httpOptions);
  }




  rechercherParNom(nom: string):Observable< typeconge[]> {
    const url = `${this.apiURLNom}/findByNomConge/${nom}`;
    return this.http.get<typeconge[]>(url);
    }


      counttypeconge(): Observable<number> {
        const url = `${this.apiURL}/count`;
        return this.http.get<number>(url);
      }




}




