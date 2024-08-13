import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { conge } from '../models/congé.model';
import { Observable } from 'rxjs';
import { typeconge } from '../models/typeconge.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class CongeService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Conge';
  apiURLNom: string='http://localhost:8080/ApplicationSystemeRessourcesHumaines/rest6/search';


  conges: conge[];
  typeconges:typeconge[];

  constructor(private http : HttpClient) { }


 /* listeconge(): Observable<conge[]> {
    return this.http.get<conge[]>(this.apiURL);
  }*/
  listeconge(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL)}



    listetypeconge(): Observable<typeconge[]> {
      const typeCongeURL=  'http://localhost:8080/ApplicationSystemeRessourcesHumaines/TypeConges';
      return this.http.get<typeconge[]>(typeCongeURL);
    }

  ajouterconge(cns: conge): Observable<conge> {
    return this.http.post<conge>(this.apiURL, cns, httpOptions);
  }

 


  supprimerconge(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterconge(id: number): Observable<conge> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<conge>(url);
  }
  consultertypeconge(id: number): Observable<typeconge> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<typeconge>(url);
  }


  trierconge() {
    this.conges = this.conges.sort((n1, n2) => {
      if (n1.id! > n2.id!) {
        return 1;
      }
      if (n1.id! < n2.id!) {
        return -1;
      }
      return 0;
    });
  }

  updateconge(cns: conge): Observable<conge> {
    const url = `${this.apiURL}/${cns.id}`;
    return this.http.put<conge>(this.apiURL, cns, httpOptions);
  }




  rechercheretatdedemandeaccepté(etatdedemande: string):Observable< conge[]> {
    const url = `${this.apiURLNom}/findByétatdedemandeaccepter/${etatdedemande}`;
    return this.http.get<conge[]>(url);
    }
    rechercheretatdedemandeenattente(etatdedemande: string):Observable< conge[]> {
      const url = `${this.apiURLNom}/findByétatdedemandeenattente/${etatdedemande}`;
      return this.http.get<conge[]>(url);
      }


      countconge(): Observable<number> {
        const url = `${this.apiURL}/count`;
        return this.http.get<number>(url);
      }

      rechercherParID(id: number): Observable<conge> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<conge>(url);
      }

      getCongeEnAttente(): Observable<conge[]> {
        const url = `${this.apiURL}/CongeEnAttente`;
        return this.http.get<conge[]>(url);
      }

      getCongeUtilisateur(id: number): Observable<conge[]> {
        const url = `${this.apiURL}/CongeUtilisateur/${id}`;
        return this.http.get<conge[]>(url);
      }

      accepterdemande(id: number) {
        const url = `${this.apiURL}/Accepter/${id}`;
        return this.http.get<conge>(url);
      }
      refuserdemande(id:number){
        const url = `${this.apiURL}/Refuser/${id}`;
        return this.http.get<conge>(url);
      }





      countCongeEnAttente(): Observable<number> {
        const url = `${this.apiURL}/countEnAttente`;
        return this.http.get<number>(url);
    
      }
    
      countCongeAccepte(): Observable<number> {
        const url = `${this.apiURL}/countAccepter`;
        return this.http.get<number>(url);
    
      }
    
    
      countCongeRefuse(): Observable<number> {
        const url = `${this.apiURL}/countRefuser`;
        return this.http.get<number>(url);
    
      }

      countCongeEnAttenteUser(id: number): Observable<number> {
        const url = `${this.apiURL}/countEnAttenteConge/${id}`;
        return this.http.get<number>(url);
    
      }
    
      countCongeAccepteUser(id: number): Observable<number> {
        const url = `${this.apiURL}/countAccepterConge/${id}`;
        return this.http.get<number>(url);
    
      }
    
    
      countCongeRefuseUser(id: number): Observable<number> {
        const url = `${this.apiURL}/countRefuserConge/${id}`;
        return this.http.get<number>(url);
    
      }



      countCongeUser(id: number): Observable<number> {
        const url = `${this.apiURL}/countConge/${id}`;
        return this.http.get<number>(url);
    
      }


}
