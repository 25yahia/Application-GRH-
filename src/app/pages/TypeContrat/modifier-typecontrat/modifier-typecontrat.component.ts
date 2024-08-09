import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeContrat } from 'src/app/models/typecontrat.model';
import { TypeContratService } from 'src/app/services/type-contrat.service';

@Component({
  selector: 'app-modifier-typecontrat',
  templateUrl: './modifier-typecontrat.component.html',
  styleUrls: ['./modifier-typecontrat.component.scss']
})
export class ModifierTypecontratComponent implements OnInit {
  currentTypecontrat = new TypeContrat();
  typecontrats: TypeContrat[];
  totalTypecontrats: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
       private typeContratService:TypeContratService) { }

  ngOnInit(): void {
    this.typeContratService.listetypecontrat().subscribe(typecontrats => {
      this.typecontrats = typecontrats;
      console.log(typecontrats);
    });

    this.typeContratService.consultertypecontrat(this.activatedRoute.snapshot.params['id']).subscribe(TypeContrat => {
      this.currentTypecontrat = TypeContrat;
      console.log(TypeContrat);
      });
      this.counter();

  }
  updatetypecontrat() {
    this.typeContratService.updatetypecontrat(this.currentTypecontrat).subscribe(() => {
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
