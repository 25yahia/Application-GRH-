import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { role } from '../models/role.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class RoleService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Roles';
  apiURLNom: string='http://localhost:8080/ApplicationSystemeRessourcesHumaines/reste/search';
  roles: role[];
  constructor(private http : HttpClient) { }



  listeRole(): Observable<role[]> {
    return this.http.get<role[]>(this.apiURL);
  }

  ajouterRole(rls: role): Observable<role> {
    return this.http.post<role>(this.apiURL, rls, httpOptions);
  }


  
  supprimerRole(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterRole(id: number): Observable<role> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<role>(url);
  }


  trierRole() {
    this.roles = this.roles.sort((n1, n2) => {
      if (n1.idRole! > n2.idRole!) {
        return 1;
      }
      if (n1.idRole! < n2.idRole!) {
        return -1;
      }
      return 0;
    });
  }

  updateRole(rls: role): Observable<role> {
    return this.http.put<role>(this.apiURL, rls, httpOptions);
  }




  rechercherParNom(nom: string):Observable< role[]> {
    const url = `${this.apiURLNom}/findBynomroleContains/${nom}`;
    return this.http.get<role[]>(url);
    }


      countRole(): Observable<number> {
        const url = `${this.apiURL}/count`;
        return this.http.get<number>(url);
      }




}
