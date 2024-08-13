import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { departement } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-ajouter-departement',
  templateUrl: './ajouter-departement.component.html',
  styleUrls: ['./ajouter-departement.component.scss']
})
export class AjouterDepartementComponent implements OnInit {
  Newdepartement = new departement();
  totaldepartements: number = 0;

  constructor( private router : Router, private departementService : DepartementService) { }

  ngOnInit(): void {
    this.counter();
  }
  adddepartement() {
    this.departementService.ajouterdepartement(this.Newdepartement)
                      .subscribe(dps => {
                      console.log(dps);
                      this.router.navigate(['consulterDepartement']);
                      });
  }


  counter(){
    this.departementService.countdepartement().subscribe(
      count => {

        this.totaldepartements = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre de départements : ', error);
      }
    );





  }







}
