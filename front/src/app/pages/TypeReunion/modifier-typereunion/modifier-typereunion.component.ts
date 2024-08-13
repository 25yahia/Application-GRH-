import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { typeReunion } from 'src/app/models/typeReunion.model';
import { TypeReunionService } from 'src/app/services/type-reunion.service';

@Component({
  selector: 'app-modifier-typereunion',
  templateUrl: './modifier-typereunion.component.html',
  styleUrls: ['./modifier-typereunion.component.scss']
})
export class ModifierTypereunionComponent implements OnInit {
  currentTypeReunion = new typeReunion();
  typeReunions: typeReunion[];
  totalTypeReunions: number = 0;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private typeReunionService : TypeReunionService) { }

  ngOnInit(): void {
    this.typeReunionService.listetypereunion().subscribe(typeReunions => {
      this.typeReunions = typeReunions;
      console.log(typeReunions);
    });

    this.typeReunionService.consultertypereunion(this.activatedRoute.snapshot.params['id']).subscribe(typeReunion => {
      this.currentTypeReunion = typeReunion;
      console.log(typeReunion);
      });
      this.counter();
  }

  updatetypeReunion() {
    this.typeReunionService.updatetypereunino(this.currentTypeReunion).subscribe(() => {
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
