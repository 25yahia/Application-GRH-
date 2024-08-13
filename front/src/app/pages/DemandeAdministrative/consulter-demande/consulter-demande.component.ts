import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { demande } from 'src/app/models/demandeadmin.model';
import { AuthService } from 'src/app/services/auth.service';
import { DemandeAdminService } from 'src/app/services/demande-admin.service';

@Component({
  selector: 'app-consulter-demande',
  templateUrl: './consulter-demande.component.html',
  styleUrls: ['./consulter-demande.component.scss']
})
export class ConsulterDemandeComponent implements OnInit {
  demandes: demande[];
  demandes1: demande[];
  alldemandes: demande[];
  filterText: string = '';
  totalDemandes: number = 0;
  totalDemandesEnAttente: number = 0;
  totalDemandesUser: number = 0;
  totalDemandesEnAttenteUser: number = 0;
  id: number;
  p:number=1;
  public loggedid:number;
  constructor(private demandeAdminService : DemandeAdminService,public authService:AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.RecupererID()  ;
    this.chargerdemande();
    this.counter();
    this.counterAttente();
    this.counterAttenteParUser();
    this.counterParUser();
    this.chargerDemandeID();      
  
  
  }
  chargerdemande(){
    this.demandeAdminService.getDemandeEnAttente().subscribe(dmd => {
      console.log(dmd);
      this.demandes = dmd;
      this.alldemandes = dmd;

    });

  }

  chargerDemandeID(){
    this.demandeAdminService.getDemandeUtilisateur(this.loggedid).subscribe(dmd => { 
      console.log(dmd);
      this.demandes1= dmd;
    

    });

  }


  rechercherDemande() {
    this.demandeAdminService.rechercherParID(this.id).
      subscribe(cont => {
       // console.log(rls)
        this.demandes = [cont];});
    
  }

  onKeyUp(filterText: string) { 
    this.demandes = this.alldemandes.filter(item => 
        item.id.toString().toLowerCase().includes(filterText.toLowerCase())
    ); 
}

    supprimerdemande(id)
    {
      console.log(id);

    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.demandeAdminService. supprimerDemande(id).subscribe(() => {
            console.log("Demande Administrative supprimée");
            this.chargerdemande();

    });

    }

   /* rechercherRoles() {
      this.demandeAdminService.rechercherParNom(this.nomrole).
        subscribe(rls => {
         // console.log(rls)
          this.roles = rls;});


    }


    onKeyUp(filterText : string){
      this.roles = this.allroles.filter(item =>
   item.nomRole.toLowerCase().includes(filterText));
     }*/

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



