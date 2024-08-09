import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { demande } from 'src/app/models/demandeadmin.model';
import { typedemande } from 'src/app/models/typedemande.model';
import { AuthService } from 'src/app/services/auth.service';
import { DemandeAdminService } from 'src/app/services/demande-admin.service';

@Component({
  selector: 'app-reponse-demande',
  templateUrl: './reponse-demande.component.html',
  styleUrls: ['./reponse-demande.component.scss']
})
export class ReponseDemandeComponent implements OnInit {
  currentDemande = new demande();
  demandes: demande[];
  typesdemandeadministrative: typedemande[];
  Newid: number;
  totalDemandes: number = 0;
  totalDemandesEnAttente: number = 0;
  totalDemandesUser: number = 0;
  totalDemandesEnAttenteUser: number = 0;
  public loggedid:number;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private demandeAdminService: DemandeAdminService, public authService: AuthService) { }

  ngOnInit(): void {
    this.demandeAdminService.listeDemande().subscribe(demandes => {
      this.demandes = demandes;
      console.log(demandes);
    });
    this.demandeAdminService.consulterDemande(this.activatedRoute.snapshot.params['id']).subscribe(demande => {
      this.currentDemande = demande;
      this.Newid = this.currentDemande.typedemandeadministrative.id;

      console.log(demande);
    });

    this.demandeAdminService.listetypedemande().subscribe(data => {
      this.typesdemandeadministrative = data;
    });
    this.RecupererID()  ;
    this.counter();
    this.counterAttente();
    this.counterAttenteParUser();
    this.counterParUser();
  }

  updateDemande() {
    const typedemande = this.typesdemandeadministrative.find(typ => typ.id == this.Newid);
    this.currentDemande.typedemandeadministrative = typedemande;
    this.demandeAdminService.updateDemande(this.currentDemande).subscribe(() => {
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

  counterAttente(){
    this.demandeAdminService.countCongeEnAttente().subscribe(
      count => {
       
        this.totalDemandesEnAttente = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }

  counter(){
    this.demandeAdminService.countDemande().subscribe(
      count => {

        this.totalDemandes = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des demandes administratives : ', error);
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


