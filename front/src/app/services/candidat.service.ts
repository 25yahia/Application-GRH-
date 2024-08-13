import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { candidat } from '../models/candidat.model';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Candidat';
  apiURLNom: string='http://localhost:8080/ApplicationSystemeRessourcesHumaines/restecandidat/search';

  candidats: candidat[];

  constructor(private http : HttpClient) { }

  listecandidat(): Observable<candidat[]> {
    return this.http.get<candidat[]>(this.apiURL);
}

getCandidatsEnAttente(): Observable<candidat[]> {
  const url = `${this.apiURL}/CandidatenAttente`;
  return this.http.get<candidat[]>(url);
}




countCandidat(): Observable<number> {
  const url = `${this.apiURL}/count`;
  return this.http.get<number>(url);
}
consultercandidat(id: number): Observable<candidat> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<candidat>(url);
}

ajouterdemande(cdd: candidat): Observable<candidat> {
  return this.http.post<candidat>(this.apiURL, cdd, httpOptions);
}

accepterdemande(id: number) {
  const url = `${this.apiURL}/Accepter/${id}`;
  return this.http.get<candidat>(url);
}
refuserdemande(id:number){
  const url = `${this.apiURL}/Refuser/${id}`;
  return this.http.get<candidat>(url);
}

    
rechercherParNom(nom: string):Observable< candidat[]> {
  const url = `${this.apiURLNom}/findByNomCandidat/${nom}`;
  return this.http.get<candidat[]>(url);
  }

  countCandidatEnAttente(): Observable<number> {
    const url = `${this.apiURL}/countEnAttente`;
    return this.http.get<number>(url);

  }

  countCandidatAccepter(): Observable<number> {
    const url = `${this.apiURL}/countAccepter`;
    return this.http.get<number>(url);

  }


  countCandidatRefuser(): Observable<number> {
    const url = `${this.apiURL}/countRefuser`;
    return this.http.get<number>(url);

  }



}
  