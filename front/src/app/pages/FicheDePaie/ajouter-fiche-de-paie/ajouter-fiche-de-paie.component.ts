import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FicheDePaie } from 'src/app/models/FicheDePaie.model';
import { FicheDePaieService } from 'src/app/services/fiche-de-paie.service';

@Component({
  selector: 'app-ajouter-fiche-de-paie',
  templateUrl: './ajouter-fiche-de-paie.component.html',
  styleUrls: ['./ajouter-fiche-de-paie.component.scss']
})
export class AjouterFicheDePaieComponent implements OnInit {
  NewFicheDePaie = new FicheDePaie();
  Newid : number;
  FicheDePaies: FicheDePaie[];
  totalFicheDePaies: number = 0;

  constructor(private router :Router, private ficheService:FicheDePaieService) { }

  ngOnInit(): void {
    this.counter();
  }


  addFicheDePaie() {


    this.ficheService.ajouterFicheDePaie(this.NewFicheDePaie).subscribe(fdp=>{
      console.log("aaaaaaaaaaaaa");
      console.log(this.Newid);
      console.log(fdp);
      this.router.navigate(['consulterfichesdepaie']);
    })
  }
  counter(){
    this.ficheService.countFicheDePaie().subscribe(
      count => {

        this.totalFicheDePaies = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des fiches de paie : ', error);
      }
    );





  }

}
