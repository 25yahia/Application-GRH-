import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TypeContrat } from '../models/typecontrat.model';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class TypeContratService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/TypeContrats';
  apiURLNom: string='http://localhost:8080/ApplicationSystemeRessourcesHumaines/resteTypeContrat/search';
  typecontrats: TypeContrat[];


  constructor(private http : HttpClient) { }
  listetypecontrat(): Observable<TypeContrat[]> {
    return this.http.get<TypeContrat[]>(this.apiURL);
  }

  ajoutertypecontrat(tpc: TypeContrat): Observable<TypeContrat> {
    return this.http.post<TypeContrat>(this.apiURL, tpc, httpOptions);
  }



  supprimertypecontrat(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consultertypecontrat(id: number): Observable<TypeContrat> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<TypeContrat>(url);
  }


  triertypecontrat() {
    this.typecontrats = this.typecontrats.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }

  updatetypecontrat(tpc: TypeContrat): Observable<TypeContrat> {
    return this.http.put<TypeContrat>(this.apiURL, tpc, httpOptions);
  }




  rechercherParNom(nom: string):Observable< TypeContrat[]> {
    const url = `${this.apiURLNom}/findBynomroleContains/${nom}`;
    return this.http.get<TypeContrat[]>(url);
    }


      counttypecontrat(): Observable<number> {
        const url = `${this.apiURL}/count`;
        return this.http.get<number>(url);
      }




}


