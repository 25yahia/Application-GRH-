import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { typedemande } from '../models/typedemande.model';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class TypedemandeService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/TypeDemandes';

  typedemandes: typedemande[];


  constructor(private http : HttpClient) { }
  listetypedemande(): Observable<typedemande[]> {
    return this.http.get<typedemande[]>(this.apiURL);
  }

  ajoutertypedemande(td: typedemande): Observable<typedemande> {
    return this.http.post<typedemande>(this.apiURL, td, httpOptions);
  }



  supprimertypedemande(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consultertypedemande(id: number): Observable<typedemande> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<typedemande>(url);
  }


  triertypedemande() {
    this.typedemandes = this.typedemandes.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }

  updatetypedemande(td: typedemande): Observable<typedemande> {
    return this.http.put<typedemande>(this.apiURL, td, httpOptions);
  }




  rechercherParID(id: number): Observable<typedemande> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<typedemande>(url);
  }

      counttypedemande(): Observable<number> {
        const url = `${this.apiURL}/count`;
        return this.http.get<number>(url);
      }




}




