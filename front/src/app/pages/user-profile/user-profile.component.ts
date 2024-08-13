import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employes } from 'src/app/models/Employes.model';
import { Utilisateurs } from 'src/app/models/utilisateurs.model';
import { EmployesService } from 'src/app/services/employes.service';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  utilisateur1: Utilisateurs;
  public loggedid:number;
  apiURL1: string ='http://localhost:8080/ApplicationSystemeRessourcesHumaines/api';


  constructor(private utilisateursService : UtilisateursService,
) { }

  ngOnInit() {
    this.RecupererID();
    this.chargerUser();
    
    
  }

  chargerUser(){
    this.utilisateursService.consulterUtilisateurs(this.loggedid).subscribe(utilisateur => {
      this.utilisateur1 = utilisateur;
      console.log(utilisateur);
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
  

}
