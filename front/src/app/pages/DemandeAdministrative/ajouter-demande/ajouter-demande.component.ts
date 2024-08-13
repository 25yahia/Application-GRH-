
import { typedemande } from 'src/app/models/typedemande.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { demande } from 'src/app/models/demandeadmin.model';
import { DemandeAdminService } from 'src/app/services/demande-admin.service';
import { AuthService } from 'src/app/services/auth.service';

import { UtilisateursService } from 'src/app/services/utilisateurs.service';
import { Utilisateurs } from 'src/app/models/utilisateurs.model';

@Component({
  selector: 'app-ajouter-demande',
  templateUrl: './ajouter-demande.component.html',
  styleUrls: ['./ajouter-demande.component.scss']
})
export class AjouterDemandeComponent implements OnInit {
  NewDemande = new demande();
  public loggedid: number;
  typesdemandeadministrative: typedemande[];
  utilisateur: Utilisateurs[];
  Newid: number;
  totalDemandes: number = 0;
  totalDemandesEnAttente: number = 0;
  totalDemandesUser: number = 0;
  totalDemandesEnAttenteUser: number = 0;
  constructor(private router: Router, private demandeAdminService: DemandeAdminService, public authService: AuthService, private utilisateurservice: UtilisateursService) { }

  ngOnInit(): void {
    this.demandeAdminService.listetypedemande().subscribe(data => {
      this.typesdemandeadministrative = data;
    });

    this.utilisateurservice.listutilisitaeur().subscribe(data => {
      this.utilisateur = data;
    });

    this.RecupererID();
    this.counter();
    this.counterAttente();
    this.counterAttenteParUser();
    this.counterParUser();
  }



  adddemande() {
    this.NewDemande.typedemandeadministrative = this.typesdemandeadministrative.find(type => type.id == this.Newid)!;

    console.log(this.NewDemande);

    console.log(this.loggedid);
    this.NewDemande.utilisateur = this.utilisateur.find(type => type.id == this.loggedid)!;

    this.demandeAdminService.ajouterDemande(this.NewDemande).subscribe(dmd => {
      console.log(this.Newid);

      console.log(dmd);
      this.router.navigate(['consulterdemande']);
    });
  }

  RecupererID() {
    // Récupérer l'ID de l'utilisateur connecté depuis le localStorage
    const loggedidString = localStorage.getItem('loggedid');

    if (loggedidString) {
      // Convertir la valeur en nombre
      this.loggedid = parseInt(loggedidString, 10);

      // Afficher l'ID de l'utilisateur dans la console
      console.log('ID de l\'utilisateur connecté :', this.loggedid);
    } else {
      console.error('ID de l\'utilisateur non trouvé dans le localStorage');
    }
  }
  counter() {
    this.demandeAdminService.countDemande().subscribe(
      count => {

        this.totalDemandes = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des demandes administratives : ', error);
      }
    );

  }
  counterAttente() {
    this.demandeAdminService.countCongeEnAttente().subscribe(
      count => {

        this.totalDemandesEnAttente = count;

      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }
  counterAttenteParUser(){
    this.demandeAdminService.countDemandeEnAttenteUser(this.loggedid).subscribe(
      count => {
       
        this.totalDemandesEnAttenteUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );   


  }

  counterParUser(){
    this.demandeAdminService.countDemandeUser(this.loggedid).subscribe(
      count => {
       
        this.totalDemandesUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }
}
