import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employes } from '../models/Employes.model';
import { Observable } from 'rxjs';
import { departement } from '../models/departement.model';
import { role } from '../models/role.model';
import { TypeContrat } from '../models/typecontrat.model';
import { Image } from '../models/image.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'   
})
export class EmployesService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Employes';
  apiURLNom: string='http://localhost:8080/ApplicationSystemeRessourcesHumaines/rest2/search/getarchive';
  apiURL1: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/api';


  employes: Employes[];
  constructor(private http : HttpClient) { }

listeEmployes(): Observable<any[]> {
  const url = `${this.apiURL}/employeactif`;
  return this.http.get<any[]>(url);
}
getEmployeArchive(): Observable<any[]> {
 const url = `${this.apiURL}/employearchive`;
  return this.http.get<any[]>(url);
}

consulteremployes(id: number): Observable<Employes> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Employes>(url);
}

listeEmployesParDepartement(IDdepartementdeResponsable: number): Observable<Employes[]> {
  const url = `${this.apiURL}/departement/${IDdepartementdeResponsable}`;
  return this.http.get<Employes[]>(url);
}


ajouterEmploye(emp: Employes): Observable<Employes> {
  return this.http.post<Employes>(this.apiURL, emp, httpOptions);
}

rechercherParID(id: number): Observable<Employes> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Employes>(url);
}


/*supprimerEmploye(id: number) {
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
}*/
archiverEmploye(id: number) {
  const url = `${this.apiURL}/archiveemploye/${id}`;
  return this.http.get<Employes>(url);
}

activerEmploye(id: number) {
  const url =  `${this.apiURL}/activeemploye/${id}`;
  return this.http.get<Employes>(url);
}


consulterEmploye(id: number): Observable<Employes> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Employes>(url);
}

listecontrat(): Observable<any[]> {
  const ContratUrl = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Contrats';
  return this.http.get<any[]>(ContratUrl);
}
listedepartement(): Observable<departement[]> {
  const DepartUrl ='http://localhost:8080/ApplicationSystemeRessourcesHumaines/Departements';
  return this.http.get<departement[]>(DepartUrl);
}
listeRole(): Observable<role[]> {
  const RoleUrl='http://localhost:8080/ApplicationSystemeRessourcesHumaines/Roles';
  return this.http.get<role[]>(RoleUrl);
}
listetypecontrat(): Observable<TypeContrat[]> {
  const typeContratUrl = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/TypeContrats';
  return this.http.get<TypeContrat[]>(typeContratUrl);
}



/*trierEmploye() {
  this.employes = this.employes.sort((n1, n2) => {
    if (n1.id! > n2.id!) {
      return 1;
    }
    if (n1.id! < n2.id!) {
      return -1;
    }
    return 0;
  });
}*/

updateEmploye(emp: Employes): Observable<Employes> {
  return this.http.put<Employes>(this.apiURL, emp, httpOptions);
}




/*rechercherParNom(nom: string):Observable< role[]> {
  const url = `${this.apiURLNom}/findBynomroleContains/${nom}`;
  return this.http.get<role[]>(url);
  }*/


    countEmploye(): Observable<number> {
      const url = `${this.apiURL}/count`;
      return this.http.get<number>(url);
    }     
  

    countEmployeArchiver(): Observable<number> {
      const url = `${this.apiURL}/countArchiver`;
      return this.http.get<number>(url);
  
    }

    countHommeActiver(): Observable<number> {
      const url = `${this.apiURL}/countHomme`;
      return this.http.get<number>(url);
  
    }

    countFemmeActiver(): Observable<number> {
      const url = `${this.apiURL}/countFemme`;
      return this.http.get<number>(url);
  
    }


    countEmployeActiver(): Observable<number> {
      const url = `${this.apiURL}/countActive`;
      return this.http.get<number>(url);
  
    }


  





    countEmployejoinInJanuary(): Observable<number> {
      const url = `${this.apiURL}/joinInJanuary`;
      return this.http.get<number>(url);
    }
    countEmployejoinInFebruary(): Observable<number> {
      const url = `${this.apiURL}/joinInFebruary`;
      return this.http.get<number>(url);
    }
    countEmployejoinInMarch(): Observable<number> {
      const url = `${this.apiURL}/joinInMarch`;
      return this.http.get<number>(url);
    }
    countEmployejoinInApril(): Observable<number> {
      const url = `${this.apiURL}/joinInApril`;
      return this.http.get<number>(url);
    }
    countEmployejoinInMay(): Observable<number> {
      const url = `${this.apiURL}/joinInMay`;
      return this.http.get<number>(url);
    }
    countEmployejoinInSeptember(): Observable<number> {
      const url = `${this.apiURL}/joinInSeptember`;
      return this.http.get<number>(url);
    }
    countEmployejoinInOctober(): Observable<number> {
      const url = `${this.apiURL}/joinInOctober`;
      return this.http.get<number>(url);
    }
    countEmployejoinInNovember(): Observable<number> {
      const url = `${this.apiURL}/joinInNovember`;
      return this.http.get<number>(url);
    }

    uploadImage(file: File, filename: string): Observable<Image>{
      const imageFormData = new FormData();
      imageFormData.append('image', file, filename);
      const url = `${this.apiURL1 + '/image/upload'}`;
      return this.http.post<Image>(url, imageFormData);
      }
      loadImage(id: number): Observable<Image> {
      const url = `${this.apiURL1 + '/image/get/info'}/${id}`;
      return this.http.get<Image>(url);
      }
    
      uploadImageFS(file: File, filename: string, idProd : number): Observable<any>{
        const imageFormData = new FormData();
        imageFormData.append('image', file, filename);
        const url = `${this.apiURL1 + '/image/uploadFS'}/${idProd}`;
        return this.http.post(url, imageFormData);
        }








}

