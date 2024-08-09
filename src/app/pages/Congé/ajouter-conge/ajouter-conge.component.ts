import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { conge } from 'src/app/models/congé.model';
import { typeconge } from 'src/app/models/typeconge.model';
import { Utilisateurs } from 'src/app/models/utilisateurs.model';
import { AuthService } from 'src/app/services/auth.service';
import { CongeService } from 'src/app/services/conge.service';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-ajouter-conge',
  templateUrl: './ajouter-conge.component.html',
  styleUrls: ['./ajouter-conge.component.scss']
})
export class AjouterCongeComponent implements OnInit {
  NewConge = new conge();
  typedeConges: typeconge[];
  Newid: number;
  conges: conge[];
  public loggedid: number;
  utilisateur: Utilisateurs[];
  totalCongeEnAttente: number = 0;
  totalCongeAccepter: number = 0;
  totalCongeRefuser: number = 0;
  totalConges: number = 0;
  totalCongeEnAttenteUser: number = 0;
  totalCongeAccepterUser: number = 0;
  totalCongeRefuserUser: number = 0;
  totalCongeUser: number = 0;
  constructor(private router: Router, private congeService: CongeService, public authService: AuthService, private utilisateurservice: UtilisateursService) { }

  ngOnInit(): void {
    this.congeService.listetypeconge().subscribe(data => {
      this.typedeConges = data;
      console.log("tttttttttt");
      console.log(data);

    })
    this.utilisateurservice.listutilisitaeur().subscribe(data => {
      this.utilisateur = data;
    });

    this.RecupererID();
    this.counterAttente();
    this.counterAccepter();
    this.counterRefuser();
    this.counter();
    this.counterAttenteParUser();
    this.counterAccepterParUser();
    this.counterRefuserParUser();
    this.counterParUser();
  }
  /*addconge() {   
    this.congeService.ajouterconge(this.NewConge)
                      .subscribe(cns => {
                      console.log(cns);
                      this.router.navigate(['consultercongé']);
                      });
  }*/

  addconge() {

    this.NewConge.typedeConge = this.typedeConges.find(typ => typ.id == this.Newid)!;
    console.log(this.NewConge);
    console.log(this.loggedid);
    this.NewConge.utilisateur = this.utilisateur.find(type => type.id == this.loggedid)!;
    this.congeService.ajouterconge(this.NewConge).subscribe(cns => {
      console.log(this.Newid);
      console.log(cns);
      this.router.navigate(['consulterconge']);
    })



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
