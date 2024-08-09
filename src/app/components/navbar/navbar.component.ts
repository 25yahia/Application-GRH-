import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { Utilisateurs } from 'src/app/models/utilisateurs.model';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;

  utilisateur1: Utilisateurs;
  public loggedid:number;
  apiURL1: string ='http://localhost:8080/ApplicationSystemeRessourcesHumaines/api';

  constructor(location: Location,  private element: ElementRef, private router: Router,public authService: AuthService,private utilisateursService : UtilisateursService) {
    this.location = location;
  }


    


  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.RecupererID();
    this.chargerUser();
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';

  

  }

  
  onLogout(){
    this.authService.logout();
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
