import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { departement } from 'src/app/models/departement.model';
import { Reunion } from 'src/app/models/reunion.model';
import { typeReunion } from 'src/app/models/typeReunion.model';
import { ReunionService } from 'src/app/services/reunion.service';

@Component({
  selector: 'app-modifier-reunion',
  templateUrl: './modifier-reunion.component.html',
  styleUrls: ['./modifier-reunion.component.scss']
})
export class ModifierReunionComponent implements OnInit {
  currentReunion = new Reunion();
  reunions: Reunion[];
  totalreunions: number = 0;   
  typeReunions: typeReunion[];
  Newid:number;
  Newid1: number;
  departements: departement[];

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
       private reunionService:ReunionService) { }

  ngOnInit(): void {
    this.reunionService.listereunion().subscribe(reunions => {
      this.reunions = reunions;
      console.log(reunions);
    });
    this.reunionService.listedepartement().subscribe(data => {
      this.departements = data;
    });
    this.reunionService.consulterreunion(this.activatedRoute.snapshot.params['id']).subscribe(reunion => {
      this.currentReunion= reunion;
      this.Newid=this.currentReunion.typeReunion.id;
      this.Newid1=this.currentReunion.departement.idDepartement;

      console.log(reunion);
      });
      this.reunionService.listetypereunion().subscribe(data => {
        this.typeReunions =data;
      });
      this.counter();
  }
  updateReunion() {

    const typeReunion = this.typeReunions.find(typ => typ.id == this.Newid);
    this.currentReunion.typeReunion = typeReunion;
    const departement = this.departements.find(dep => dep.idDepartement == this.Newid1);
    this.currentReunion.departement = departement;
    this.reunionService.updatereunion(this.currentReunion).subscribe(() => {
      this.router.navigate(['consulterreunion']);
    });
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

}