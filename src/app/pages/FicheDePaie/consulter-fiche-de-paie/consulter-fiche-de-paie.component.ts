import { Component, OnInit } from '@angular/core';
import { FicheDePaie } from 'src/app/models/FicheDePaie.model';
import { FicheDePaieService } from 'src/app/services/fiche-de-paie.service';

@Component({
  selector: 'app-consulter-fiche-de-paie',
  templateUrl: './consulter-fiche-de-paie.component.html',
  styleUrls: ['./consulter-fiche-de-paie.component.scss']
})
export class ConsulterFicheDePaieComponent implements OnInit {
  FicheDePaies: FicheDePaie[];
  allFicheDePaies: FicheDePaie[];
  filterText: string = '';
  totalFicheDePaies: number = 0;
  id: number;
  p:number=1;

  constructor(private ficheService: FicheDePaieService) { }

  ngOnInit(): void {
    this.chargerFicheDePaie();
    this.counter();
  }

  chargerFicheDePaie(){
    this.ficheService.listeFicheDePaie().subscribe(fdp => {
      console.log(fdp);
      this.FicheDePaies = fdp;
      this.allFicheDePaies = fdp;

    });

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



  rechercherContrat() {
    this.ficheService.rechercherParID(this.id).
      subscribe(fdp => {
       // console.log(rls)
        this.FicheDePaies = [fdp];});
    
  }

  onKeyUp(filterText: string) { 
    this.FicheDePaies = this.allFicheDePaies.filter(item => 
        item.id.toString().toLowerCase().includes(filterText.toLowerCase())
    ); 
}









}
