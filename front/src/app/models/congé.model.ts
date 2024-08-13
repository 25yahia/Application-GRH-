import { typeconge } from "./typeconge.model";
import { Utilisateurs } from "./utilisateurs.model";

export class conge {


  id: number ;
  duree: Float32Array;
  etatdedemande: String ;
  debutconge: Date;
  finConge: Date;
  descriptionconge: string;
  typedeConge:typeconge;
  utilisateur:Utilisateurs ;
  }
