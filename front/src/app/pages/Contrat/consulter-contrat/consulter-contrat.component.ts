import { Component, OnInit } from '@angular/core';
import { contrat } from 'src/app/models/contrat.model';
import { ContratService } from 'src/app/services/contrat.service';

@Component({
  selector: 'app-consulter-contrat',
  templateUrl: './consulter-contrat.component.html',
  styleUrls: ['./consulter-contrat.component.scss']
})
export class ConsulterContratComponent implements OnInit {
  contrats: contrat[];
  datesignature : Date;
  allcontrats: contrat[];
  filterText: string = '';
  totalcontrats: number = 0;
  id: number;
  p:number=1;


  constructor(private contratService : ContratService) { }

  ngOnInit(): void {
    this.chargercontrat();
   this.counter();
   
  }
  chargercontrat(){
    this.contratService.listecontrat().subscribe(crs => {
      console.log(crs);
      this.contrats = crs;
      this.allcontrats = crs;

    });

  }


    supprimercontrat(id)
    {
      console.log(id);

    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.contratService. supprimercontrat(id).subscribe(() => {
            console.log("Contrat supprimé");
            this.chargercontrat();

    });

    }

    rechercherContrat() {
      this.contratService.rechercherParID(this.id).
        subscribe(cont => {
         // console.log(rls)
          this.contrats = [cont];});
      
    }

    onKeyUp(filterText: string) { 
      this.contrats = this.allcontrats.filter(item => 
          item.id.toString().toLowerCase().includes(filterText.toLowerCase())
      ); 
  }

      




   /* onKeyUp(typeContratId: number) {
      if (!typeContratId) {
        this.contrats = this.allcontrats; // Si typeContratId est vide, affichez tous les contrats
        return;
      }
    }
    /*onKeyUp(filterText : string){
      this.contrats = this.allcontrats.filter(item =>
   item.typeContrat.toLowerCase().includes(filterText));
     }*/
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



