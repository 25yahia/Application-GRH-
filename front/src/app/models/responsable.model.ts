import { departement } from "./departement.model";
import { role } from "./role.model";
import { TypeContrat } from "./typecontrat.model";

export class Responsable {

    id: number;
    nom : String;
    prenom: String;
    adresse:  String;
    motdepasse:  String;
    email:  String;
    image: String;
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
  
  
    departement:departement;
    typeContrat: TypeContrat;
}