import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { typedemande } from 'src/app/models/typedemande.model';
import { TypedemandeService } from 'src/app/services/typedemande.service';

@Component({
  selector: 'app-ajouter-typedemande',
  templateUrl: './ajouter-typedemande.component.html',
  styleUrls: ['./ajouter-typedemande.component.scss']
})
export class AjouterTypedemandeComponent implements OnInit {
  NewTypedemande = new typedemande();
  totalTypedemande: number = 0;

  constructor(private router :Router,  private typedemandeService : TypedemandeService) { }

  ngOnInit(): void {
    this.counter();

  }
  addtypedemande() {
    this.typedemandeService.ajoutertypedemande(this.NewTypedemande)
                      .subscribe(td => {
                      console.log(td);
                      this.router.navigate(['consultertypedemande']);
                      });
  }
  counter(){
    this.typedemandeService.counttypedemande().subscribe(
      count => {

        this.totalTypedemande = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des Types de Demandes : ', error);
      }
    );





  }
}
