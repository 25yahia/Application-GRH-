import { Employes } from "./Employes.model";
import { departement } from "./departement.model";
import { typeReunion } from "./typeReunion.model"; 
export class Reunion {
  id: number;
  titreReunion: String;
  typeReunion: typeReunion;
  dateReunion: Date;
  heureReunion: String;
  participants: Employes;
  departement: departement;
  externe: any[];
}