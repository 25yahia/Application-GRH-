import { TypeContrat } from 'src/app/models/typecontrat.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employes } from 'src/app/models/Employes.model';
import { contrat } from 'src/app/models/contrat.model';
import { departement } from 'src/app/models/departement.model';
import { role } from 'src/app/models/role.model';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-details-employe',
  templateUrl: './details-employe.component.html',
  styleUrls: ['./details-employe.component.scss']
})
export class DetailsEmployeComponent implements OnInit {
  employes: Employes[];
  allemployes: Employes[];
  totalEmployes: number = 0;
  currentemploye = new Employes ();
  roles:role[];
  departements: departement[];
  typescontrats: TypeContrat[];
  apiURL1: string ='http://localhost:8080/ApplicationSystemeRessourcesHumaines/api';
 /*  employe: Employes = {} as Employes; */

  constructor(private employesService : EmployesService,
               private activatedRoute: ActivatedRoute,
                       private router :Router
  ) { }

  ngOnInit(): void {
    this.chargerEmployes();
    this.counter();
  }
  chargerEmployes(){
    this.employesService.consulteremployes(this.activatedRoute.snapshot.params['id']).subscribe(employe => {
      this.currentemploye = employe;
      console.log(employe);
      });

   

  }
  counter(){
    this.employesService.countEmploye().subscribe(
      count => {

        this.totalEmployes = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des employés : ', error);
      }
    );

   



  }
}
  