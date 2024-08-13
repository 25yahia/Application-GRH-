
import { typedemande } from "./typedemande.model";
import { Utilisateurs } from "./utilisateurs.model";

export class demande {


  id: number ;
  descriptionDemande: String ;
  titreDemande: String ;
  etatdeDemandeAdmin: String ="en attente";
  typedemandeadministrative: typedemande;
  reponse:String;
  utilisateur:Utilisateurs ;
  }
   