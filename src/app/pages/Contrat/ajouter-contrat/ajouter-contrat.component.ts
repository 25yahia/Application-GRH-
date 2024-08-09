import { Utilisateurs } from './../../../models/utilisateurs.model';
import { UtilisateursService } from './../../../services/utilisateurs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employes } from 'src/app/models/Employes.model';
import { contrat } from 'src/app/models/contrat.model';
import { TypeContrat } from 'src/app/models/typecontrat.model';
import { ContratService } from 'src/app/services/contrat.service';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-ajouter-contrat',
  templateUrl: './ajouter-contrat.component.html',
  styleUrls: ['./ajouter-contrat.component.scss']
})
export class AjouterContratComponent implements OnInit {
 NewContrat = new contrat();
 NewTypecontrat!: TypeContrat;
 Newid : number;
 NewidEmploye: number;    
 typecontrats: TypeContrat[];

  employez:Employes[];

 utilisateurs : Utilisateurs[];
 totalcontrats: number = 0;

  constructor(private router :Router,  private contratService:ContratService , private employesService : EmployesService ,private utilisateursService: UtilisateursService) { }




  ngOnInit(): void {
   /* this.typecontrats = this.contratService.listetypecontrat();*/
   this.contratService.listetypecontrat().subscribe(data => {
    this.typecontrats = data;
    console.log(data);
  });


  this.utilisateursService.listutilisitaeur().subscribe(data => {
    this.utilisateurs = data;
    console.log(data);
  });



  this.counter();









  }


 /* addcontrat() {

    this.contratService.ajoutercontrat(this.NewContrat)
                      .subscribe(crs => {
                      console.log(crs);
                      this.router.navigate(['consultercontrat']);
                      });
    this.NewTypecontrat =
    this.contratService.consultertypecontrat(this.Newid);
    this.NewContrat.typecontrat=this.NewTypecontrat;
    this.contratService.ajoutercontrat(this.NewContrat);
    this.router.navigate(['consultercontrat']);
  }*/
  addcontrat() {
    this.NewContrat.utilisateur=this.utilisateurs.find(typ=>typ.id ==this.NewidEmploye)!;
    this.NewContrat.typeContrat=this.typecontrats.find(typ=>typ.id ==this.Newid)!;
  
    console.log(this.NewContrat);
    this.contratService.ajoutercontrat(this.NewContrat).subscribe(con=>{
   
      console.log(this.Newid);
      console.log(con);
      this.router.navigate(['consultercontrat']);
    })
  }
/*
    this.contratService.consultertypecontrat(this.Newid).subscribe(typecontrat => {
      this.NewTypecontrat = typecontrat;
      this.NewContrat.typecontrat = this.NewTypecontrat;
      this.contratService.ajoutercontrat(this.NewContrat).subscribe(crs => {
      console.log(crs);
      this.router.navigate(['consultercontrat']);
      });
    });*/




    counter(){
      this.contratService.countcontrat().subscribe(
        count => {
  
          this.totalcontrats = count;
        },
        error => {
          console.error('Une erreur s\'est produite lors de la récupération du nombre de contrats : ', error);
        }
      );
  
  
  
  
  
    }
  













}

