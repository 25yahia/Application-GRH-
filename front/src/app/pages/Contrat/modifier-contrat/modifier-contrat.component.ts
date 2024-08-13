import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employes } from 'src/app/models/Employes.model';
import { contrat } from 'src/app/models/contrat.model';
import { TypeContrat } from 'src/app/models/typecontrat.model';
import { ContratService } from 'src/app/services/contrat.service';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-modifier-contrat',
  templateUrl: './modifier-contrat.component.html',
  styleUrls: ['./modifier-contrat.component.scss']
})
export class ModifierContratComponent implements OnInit {
  currentContrat = new contrat();
  contrats: contrat[];
  typeContrats: TypeContrat[];
  Newid:number;
  NewidEmploye: number;
  employes:Employes[];
  totalcontrats: number = 0;


  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
       private contratService:ContratService,private employesService : EmployesService) { }

  ngOnInit(): void {
    this.contratService.listecontrat().subscribe(contrats => {
      this.contrats = contrats;
      console.log(contrats);
      this.contratService.listetypecontrat().subscribe(data => {
        this.typeContrats = data;
        this.employesService.listeEmployes().subscribe(data => {
          this.employes = data;
          console.log(data);
        });
      });     
    });

    this.contratService.consultercontrat(this.activatedRoute.snapshot.params['id']).subscribe(contrat => {
      this.currentContrat = contrat;
      this.Newid=this.currentContrat.typeContrat.id;
      this.NewidEmploye=this.currentContrat.employes.id;

      console.log(contrat);
    });

    this.counter();

  
  }
  updatecontrat() {
    const typeContrat = this.typeContrats.find(typ => typ.id == this.Newid);
    this.currentContrat.typeContrat = typeContrat;
    const employes1 = this.employes.find(typ => typ.id == this.NewidEmploye);
    this.currentContrat.employes = employes1;

    this.contratService.updatecontrat(this.currentContrat).subscribe(() => {
      this.router.navigate(['consultercontrat']);
    });


            
  }

  counter(){
    this.contratService.countcontrat().subscribe(
      count => {

        this.totalcontrats = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre de contrats : ', error);
      }
    );





  }



}

