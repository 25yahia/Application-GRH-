import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { typeReunion } from 'src/app/models/typeReunion.model';
import { TypeReunionService } from 'src/app/services/type-reunion.service';

@Component({
  selector: 'app-ajouter-typereunion',
  templateUrl: './ajouter-typereunion.component.html',
  styleUrls: ['./ajouter-typereunion.component.scss']
})
export class AjouterTypereunionComponent implements OnInit {
  NewTypeReunion = new typeReunion();
  totalTypeReunions: number = 0;
  constructor(private router :Router,  private typeReunionService : TypeReunionService) { }

  ngOnInit(): void {
    this.counter();
  }

  addtypeReunion() {
    this.typeReunionService.ajoutertypereunion(this.NewTypeReunion)
                      .subscribe(tr => {
                      console.log(tr);
                      this.router.navigate(['consultertypereunion']);
                      });
  }
  counter(){
    this.typeReunionService.counttypereunion().subscribe(
      count => {

        this.totalTypeReunions = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des Types de Demandes : ', error);
      }
    );





  }


}
  