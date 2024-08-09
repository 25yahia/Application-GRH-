import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { demande } from '../models/demandeadmin.model';
import { Observable } from 'rxjs';
import { typedemande } from '../models/typedemande.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class DemandeAdminService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Demandes';
  apiURLNom: string='http://localhost:8080/ApplicationSystemeRessourcesHumaines/resteDemandeAdministrative/search';

  demandes: demande[];
  etatdeDemandeAdmin: String;


  constructor(private http : HttpClient) { }
 /*listeDemande(): Observable<demande[]> {
    return this.http.get<demande[]>(this.apiURL);
  } */
  listeDemande(): Observable<any[]> {         
    return this.http.get<any[]>(this.apiURL);
  }
  listetypedemande(): Observable<typedemande[]> {
    const typedemandeUrl = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/TypeDemandes';
    return this.http.get<typedemande[]>(typedemandeUrl);
  }
  consultertypedemande(id: number): Observable<demande> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<demande>(url);
  }


  ajouterDemande(dmd: demande): Observable<demande> {
    return this.http.post<demande>(this.apiURL, dmd, httpOptions);
  }



  supprimerDemande(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterDemande(id: number): Observable<demande> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<demande>(url);
  }
  

  trierDemande() {
    this.demandes = this.demandes.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }
 /*  trierDemande() {
    this.demandes = this.demandes.sort((n1, n2) => {
      const etatPriority = {
        'en attente': 1,
        'etudié': 2
      };
  
      const etat1 = etatPriority[n1.etatdeDemandeAdmin] || 3;
      const etat2 = etatPriority[n2.etatdeDemandeAdmin] || 3;
  
      return etat1 - etat2;
    });
  } */

  updateDemande(dmd: demande): Observable<demande> {
    const url = `${this.apiURL}/${dmd.id}`;
    return this.http.put<demande>(this.apiURL, dmd, httpOptions);
  }




  /*rechercherParNom(nom: string):Observable< role[]> {
    const url = `${this.apiURLNom}/findBynomroleContains/${nom}`;
    return this.http.get<role[]>(url);
    }*/


      countDemande(): Observable<number> {
        const url = `${this.apiURL}/count`;
        return this.http.get<number>(url);
      }

      rechercherParID(id: number): Observable<demande> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<demande>(url);
      }
         
    
      getDemandeEnAttente(): Observable<demande[]> {
        const url = `${this.apiURL}/DemandeEnAttente`;
        return this.http.get<demande[]>(url);
      }

      getDemandeUtilisateur(id: number): Observable<demande[]> {
        const url = `${this.apiURL}/DemandeUtilisateur/${id}`;
        return this.http.get<demande[]>(url);
      }

      countCongeEnAttente(): Observable<number> {
        const url = `${this.apiURL}/countEnAttente`;
        return this.http.get<number>(url);
    
      }

      countDemandeEnAttenteUser(id: number): Observable<number> {
        const url = `${this.apiURL}/countEnAttenteDemandeUtilisateur/${id}`;
        return this.http.get<number>(url);
    
      }
      countDemandeUser(id: number): Observable<number> {
        const url = `${this.apiURL}/countDemandeUtilisateur/${id}`;
        return this.http.get<number>(url);
    
      }
    
}
