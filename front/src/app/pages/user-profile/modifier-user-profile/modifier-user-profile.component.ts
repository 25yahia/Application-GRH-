import { AuthService } from './../../../services/auth.service';
import { RHService } from 'src/app/services/rh.service';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';
import { Employes } from 'src/app/models/Employes.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployesService } from 'src/app/services/employes.service';
import { Component, OnInit } from '@angular/core';
import { Utilisateurs } from 'src/app/models/utilisateurs.model';
import { ResponsableService } from 'src/app/services/responsable.service';

@Component({
  selector: 'app-modifier-user-profile',
  templateUrl: './modifier-user-profile.component.html',
  styleUrls: ['./modifier-user-profile.component.scss']
})
export class ModifierUserProfileComponent implements OnInit {

  public loggedid:number;
  currentEmploye= new  Utilisateurs();
  utilisateur1: Utilisateurs;
  
  apiURL1: string ='http://localhost:8080/ApplicationSystemeRessourcesHumaines/api';


  constructor(
    private activatedRoute: ActivatedRoute, private employesService :EmployesService,private utilisateursService :UtilisateursService,private rhservice :RHService,
            private router :Router, public authService:AuthService, private responsableService :ResponsableService) { }

  ngOnInit(): void {
    this.RecupererID(); 
    this.loadEmploye();
    this.chargerUser();

  
  }


  loadEmploye() {
    this.utilisateursService.consulterUtilisateurs(this.loggedid).subscribe(employe => {
      this.currentEmploye = employe; 
    });
  }
/* 
   updateProfile() {
    this.employesService.updateEmploye(this.currentEmploye).subscribe(() => {
      this.router.navigate(['user-profile']);
    });
  }  */
  updaterh() {
    this.rhservice.updateRH(this.currentEmploye).subscribe(() => {
      this.router.navigate(['user-profile']);
    });
  }
  updateResponsable() {
    this.responsableService.updateResponsable(this.currentEmploye).subscribe(() => {
      this.router.navigate(['user-profile']);
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


  chargerUser(){
    this.utilisateursService.consulterUtilisateurs(this.loggedid).subscribe(utilisateur => {
      this.utilisateur1 = utilisateur;
      console.log(utilisateur);
      });

   

  }


}





    