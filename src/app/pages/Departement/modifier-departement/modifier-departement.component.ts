
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { departement } from 'src/app/models/departement.model';
import { DepartementService } from 'src/app/services/departement.service';

@Component({
  selector: 'app-modifier-departement',
  templateUrl: './modifier-departement.component.html',
  styleUrls: ['./modifier-departement.component.scss']
})
export class ModifierDepartementComponent implements OnInit {
  currentdepartement = new departement();
  departements: departement[];
  totaldepartements: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private departementService: DepartementService) { }

  ngOnInit(): void {
    this.departementService.listedepartement().subscribe(departements => {
      this.departements = departements;
      console.log(departements);
    });

    this.departementService.consulterdepartement(this.activatedRoute.snapshot.params['id']).subscribe(departement => {
      this.currentdepartement = departement;
      console.log(departement);
    });
    this.counter();
  }

  updatedepartement() {
    this.departementService.updatedepartement(this.currentdepartement).subscribe(() => {
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









