import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { departement } from '../models/departement.model';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Departements';
  apiURLNom: string='http://localhost:8080/ApplicationSystemeRessourcesHumaines/rest/search';
departements : departement [];
  constructor(private http : HttpClient) { }
  listedepartement(): Observable<departement[]> {
    return this.http.get<departement[]>(this.apiURL);
  }

  ajouterdepartement(dps: departement): Observable<departement> {
    return this.http.post<departement>(this.apiURL, dps, httpOptions);
  }



  supprimerdepartement(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterdepartement(id: number): Observable<departement> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<departement>(url);
  }


  trierdepartement() {
    this.departements  = this.departements .sort((n1, n2) => {
      if (n1.idDepartement! > n2.idDepartement!) {
        return 1;
      }
      if (n1.idDepartement! < n2.idDepartement!) {
        return -1;
      }
      return 0;
    });
  }

  updatedepartement(dps: departement): Observable<departement> {
    return this.http.put<departement>(this.apiURL, dps, httpOptions);
  }




  rechercherParNom(nom: string):Observable< departement[]> {
    const url = `${this.apiURLNom}/findBynomdepartementContains/${nom}`;
    return this.http.get<departement[]>(url);
    }


      countdepartement(): Observable<number> {
        const url = `${this.apiURL}/count`;
        return this.http.get<number>(url);
      }




}


