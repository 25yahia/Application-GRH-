import { departement } from 'src/app/models/departement.model';
import { contrat } from "./contrat.model";
import { role } from "./role.model";
import { TypeContrat } from "./typecontrat.model";
import { Image } from './image.model';


export class Employes {

  id: number;
  nom : String;
  prenom: String;
  adresse:  String;
  motdepasse:  String;
  email:  String;
  
  salaire: DoubleRange;
  solde: DoubleRange;
  ville:  String;
  joursConge: DoubleRange;
  statut: boolean;
  d: Date;
  repassword:  String;
  genre:  String;
  role: role;
  archive: number;
  maladie: Float32Array;
  dateEntree: Date;
  cin : String;
  etat : String ;
  userNName:String;

  departement:departement;
  typeContrat: TypeContrat;
 images:Image;
 imageStr!:string;

  }
