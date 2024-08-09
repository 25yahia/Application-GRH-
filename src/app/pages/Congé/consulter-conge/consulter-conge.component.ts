import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { conge } from 'src/app/models/congé.model';
import { AuthService } from 'src/app/services/auth.service';
import { CongeService } from 'src/app/services/conge.service';

@Component({
  selector: 'app-consulter-conge',
  templateUrl: './consulter-conge.component.html',
  styleUrls: ['./consulter-conge.component.scss']
})
export class ConsulterCongeComponent implements OnInit {
  conges: conge[];
  conges1: conge[];
  etatdedemande : string;
  allconges: conge[];    
  filterText: string = '';
  totalConges: number = 0;
  id: number;
  p:number=1;   
  public loggedid!:number;
  totalCongeEnAttente: number = 0;
  totalCongeAccepter: number = 0;
  totalCongeRefuser: number = 0;
  totalCongeEnAttenteUser: number = 0;
  totalCongeAccepterUser: number = 0;
  totalCongeRefuserUser: number = 0;
  totalCongeUser: number = 0;

  constructor(private congeService : CongeService, public authService:AuthService, private activatedRoute: ActivatedRoute,private router :Router) { }

  ngOnInit(): void {
    this.RecupererID();
    this.chargerconge();
    this.counter();
    this.chargercongeID();
    this.counterAttente();
    this.counterAccepter();
    this.counterRefuser();
    this.counterAttenteParUser();
    this.counterAccepterParUser();
    this.counterRefuserParUser();
    this.counterParUser();
  }
  chargerconge(){
    this.congeService.getCongeEnAttente().subscribe(cns => {
      console.log(cns);
      this.conges = cns;
      this.allconges = cns;

    });

  }

  chargercongeID(){
    this.congeService.getCongeUtilisateur(this.loggedid).subscribe(cns => {
      
      this.conges1= cns;
    

    });

  }


    supprimerconge(id)
    {
      console.log(id);

    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.congeService. supprimerconge(id).subscribe(() => {
            console.log("Congé supprimé");
            this.chargerconge();

    });

    }

    rechercheretatdedemandeaccepté() {
      this.congeService.rechercheretatdedemandeaccepté(this.etatdedemande).
        subscribe(cns => {
         // console.log(rls)
          this.conges = cns;});


    }
    rechercheretatdedemandeenattente() {
      this.congeService.rechercheretatdedemandeenattente(this.etatdedemande).
        subscribe(cns => {
         // console.log(rls)
          this.conges = cns;});


    }
    rechercherConge() {
      this.congeService.rechercherParID(this.id).
        subscribe(cont => {
         // console.log(rls)
          this.conges = [cont];});
      
    }

    onKeyUp(filterText: string) { 
      this.conges = this.allconges.filter(item => 
          item.id.toString().toLowerCase().includes(filterText.toLowerCase())
      ); 
  }


    /*onKeyUp(filterText : string){
      this.conges = this.allconges.filter(item =>
   item.nomRole.toLowerCase().includes(filterText));
     }*/

  counter(){
    this.congeService.countconge().subscribe(
      count => {

        this.totalConges = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des congés : ', error);
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
  

  accepterConge(id: number): void {
    console.log(id);
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.congeService.accepterdemande(id).subscribe(() => {
        console.log("Demande  acceptée");
        this.router.navigate(['consultercongé']);


      });
    }
  }
  refuserConge(id: number): void{
    console.log(id);
    let conf = confirm("Etes-vous sûr?");
    if (conf) {
      this.congeService.refuserdemande(id).subscribe(() =>  {
        console.log("Demande refusée ");
        this.router.navigate(['consultercongé']);

      });
    }
  }



  counterAttente(){
    this.congeService.countCongeEnAttente().subscribe(
      count => {
       
        this.totalCongeEnAttente = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );   


  }



  counterAccepter(){
    this.congeService.countCongeAccepte().subscribe(
      count => {
       
        this.totalCongeAccepter = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des Conges : ', error);
      }
    );


  }


  counterRefuser(){
    this.congeService.countCongeRefuse().subscribe(
      count => {
       
        this.totalCongeRefuser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }

  counterAttenteParUser(){
    this.congeService.countCongeEnAttenteUser(this.loggedid).subscribe(
      count => {
       
        this.totalCongeEnAttenteUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );   


  }



  counterAccepterParUser(){
    this.congeService.countCongeAccepteUser(this.loggedid).subscribe(
      count => {
       
        this.totalCongeAccepterUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des Conges : ', error);
      }
    );


  }


  counterRefuserParUser(){
    this.congeService.countCongeRefuseUser(this.loggedid).subscribe(
      count => {
       
        this.totalCongeRefuserUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }

  counterParUser(){
    this.congeService.countCongeUser(this.loggedid).subscribe(
      count => {
       
        this.totalCongeUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }






  }


