export class FicheDePaie{
    id: number;
  
      // Informations sur l'entreprise
       nomEntreprise = "MWS Engineering"
       adresseEntreprise= "Ariana";
       telephoneEntreprise = "92603723";
       siretEntreprise = "85296";
  
      // Informations sur l'employé
       nomEmploye: String;
       adresseEmploye: String;
       numeroSecuriteSocialeEmploye: String;
      idEmploye: String;
     posteEmploye: String;
       dateEmbauche : Date;
      typeContrat: String;
  
      // Période de paie
       debutPeriodePaie: Date;
       finPeriodePaie: Date;
       datePaiement: Date;
  
      // Informations sur le salaire
       salaireDeBase: DoubleRange;
    heuresSupplementaires: DoubleRange;
       payeHeuresSupplementaires: DoubleRange;
      primes: DoubleRange;
       indemnites: DoubleRange;
  
      // Retenues
      cotisationsSecuriteSociale: DoubleRange;
       cotisationsAssuranceSante: DoubleRange;
       cotisationsRetraite: DoubleRange;
       impotsRevenus: DoubleRange;
       autresRetenues: DoubleRange;
  
      // Contributions de l'employeur
       contributionsSecuriteSocialeEmployeur: DoubleRange;
       contributionsAssuranceSanteEmployeur: DoubleRange;
       contributionsRetraiteEmployeur: DoubleRange;
  
      // Salaire net
       salaireNet: DoubleRange;
  
      // Informations supplémentaires
       joursCongesRestants:BigInteger;
       heuresTravaillees: BigInteger;
  
      // Commentaires
       commentaires: String;
  }