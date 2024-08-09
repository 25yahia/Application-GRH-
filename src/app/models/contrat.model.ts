import { Utilisateurs } from './utilisateurs.model';
import { Employes } from "./Employes.model";
import { TypeContrat } from "./typecontrat.model";


export class contrat {


  id: number ;
  datesignature: Date ;
  typeContrat: TypeContrat;
  employes:Employes;
  utilisateur:Utilisateurs ;
  
  }
