import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeContrat } from 'src/app/models/typecontrat.model';
import { TypeContratService } from 'src/app/services/type-contrat.service';

@Component({
  selector: 'app-ajouter-typecontrat',
  templateUrl: './ajouter-typecontrat.component.html',
  styleUrls: ['./ajouter-typecontrat.component.scss']
})
export class AjouterTypecontratComponent implements OnInit {
  NewTypeContrat = new TypeContrat();
  totalTypecontrats: number = 0;

  constructor(private router :Router,  private typeContratService:TypeContratService){ }


  ngOnInit(): void {
    this.counter();

  }
  addtypecontrat() {
    this.typeContratService.ajoutertypecontrat(this.NewTypeContrat)
                      .subscribe(tpc => {
                      console.log(tpc);
                      this.router.navigate(['consultertypecontrat']);
                      });
  }
  counter(){
    this.typeContratService.counttypecontrat().subscribe(
      count => {

        this.totalTypecontrats = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des Types de Contrat : ', error);
      }
    );





  }
}
