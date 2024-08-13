import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { typedemande } from 'src/app/models/typedemande.model';
import { TypedemandeService } from 'src/app/services/typedemande.service';

@Component({
  selector: 'app-modifier-typedemande',
  templateUrl: './modifier-typedemande.component.html',
  styleUrls: ['./modifier-typedemande.component.scss']
})
export class ModifierTypedemandeComponent implements OnInit {
  currentTypedemande = new typedemande();
  typedemandes: typedemande[];
  totalTypedemande: number = 0; 

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private typedemandeService : TypedemandeService) { }

  ngOnInit(): void {
    this.typedemandeService.listetypedemande().subscribe(typedemandes => {
      this.typedemandes = typedemandes;
      console.log(typedemandes);
    });

    this.typedemandeService.consultertypedemande(this.activatedRoute.snapshot.params['id']).subscribe(typedemande => {
      this.currentTypedemande = typedemande;
      console.log(typedemande);
      });
      this.counter();

  }
  updatetypedemande() {
    this.typedemandeService.updatetypedemande(this.currentTypedemande).subscribe(() => {
      this.router.navigate(['consultertypereunion']);
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
