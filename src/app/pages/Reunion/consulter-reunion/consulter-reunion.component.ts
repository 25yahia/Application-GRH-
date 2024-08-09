import { Component, OnInit } from '@angular/core';
import { Reunion } from 'src/app/models/reunion.model';
import { AuthService } from 'src/app/services/auth.service';

import { ReunionService } from 'src/app/services/reunion.service';

@Component({
  selector: 'app-consulter-reunion',
  templateUrl: './consulter-reunion.component.html',
  styleUrls: ['./consulter-reunion.component.scss']
})
export class ConsulterReunionComponent implements OnInit {
  reunions: Reunion[];
  reunions1: Reunion[];

  allreunions: Reunion[];
  totalreunions: number = 0;
  totalreunionsUser: number = 0;

  dateReunion: Date;
  p:number=1;
  public loggedid:number;

  constructor(private reunionService: ReunionService,public authService:AuthService) { }

  ngOnInit(): void {
    this.RecupererID()  ;
    this.chargerreunion();
    this.chargerreunionID()
    this.counter();

  }

  chargerreunion(){
    this.reunionService.listereunion().subscribe(rn => {
      console.log(rn);
      this. reunions = rn;
      this.allreunions = rn;

    });

  }
  chargerreunionID(){
    this.reunionService.getReunionsByUtilisateur(this.loggedid).subscribe(rn => { 
      console.log(rn);
      this.reunions1= rn;
    

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
  counter(){
    this.reunionService.countreunion().subscribe(
      count => {

        this.totalreunions = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des réunions: ', error);
      }
    );

  }

  supprimerreunion(id)
  {
    console.log(id);

  let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.reunionService. supprimerreunion(id).subscribe(() => {
          console.log("Réunion supprimée");
          this.chargerreunion();

  });

  }


  rechercherReunion() {
    this.reunionService.rechercherParDateReunion(this.dateReunion)
      .subscribe(rn => {
        this.reunions = [rn];
      });
  }

  onKeyUp(filterText: string) { 
    this.reunions = this.allreunions.filter(item => 
      item.dateReunion.toString().toLowerCase().includes(filterText.toLowerCase())
    ); 
  }

  counterParUser(){
    this.reunionService.countReunionsUser(this.loggedid).subscribe(
      count => {
       
        this.totalreunionsUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }












}