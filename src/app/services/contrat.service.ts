import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contrat } from '../models/contrat.model';
import { Observable } from 'rxjs';
import { TypeContrat } from '../models/typecontrat.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class ContratService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Contrats';
  apiURLNom: string='http://localhost:8080/ApplicationSystemeRessourcesHumaines/rest5/search';
  contrats :contrat[];
  typecontrats:TypeContrat[];


  constructor(private http : HttpClient) { }

  listecontrat(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
  listetypecontrat(): Observable<TypeContrat[]> {
    const typeContratUrl = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/TypeContrats';
    return this.http.get<TypeContrat[]>(typeContratUrl);
  }

consultertypecontrat(id: number): Observable<TypeContrat> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<TypeContrat>(url);
}


 ajoutercontrat(crs: contrat): Observable<any[]> {
    return this.http.post<any[]>(this.apiURL, crs, httpOptions);
  }



  findByTypeContratId(typeContratId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/findByTypeContratId/${typeContratId}`);
  }


  rechercherParID(id: number): Observable<contrat> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<contrat>(url);
  }







  supprimercontrat(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consultercontrat(id: number): Observable<contrat> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<contrat>(url);
  }


  triercontrat() {
    this.contrats = this.contrats.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }

  updatecontrat(crs: contrat): Observable<contrat> {
    const url = `${this.apiURL}/${crs.id}`;
    return this.http.put<contrat>(this.apiURL, crs, httpOptions);
  }




  rechercherParDateSignature(datesignature: Date):Observable< contrat[]> {
    const url = `${this.apiURLNom}/findByOrderBydatesignatureContratAsc/${Date}`;
    return this.http.get<contrat[]>(url);
    }


      countcontrat(): Observable<number> {
        const url = `${this.apiURL}/count`;
        return this.http.get<number>(url);
      }




}



