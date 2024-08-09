import { Component, OnInit } from '@angular/core';
import { TypeContrat } from 'src/app/models/typecontrat.model';
import { TypeContratService } from 'src/app/services/type-contrat.service';

@Component({
  selector: 'app-consulter-typecontrat',
  templateUrl: './consulter-typecontrat.component.html',
  styleUrls: ['./consulter-typecontrat.component.scss']
})
export class ConsulterTypecontratComponent implements OnInit {
  typecontrats: TypeContrat[]
  nomContrat : string;
  alltypecontrats: TypeContrat[];
  filterText: string = '';
  totalTypecontrats: number = 0;
  p:number=1;

  constructor(private typeContratService : TypeContratService) { }

  ngOnInit(): void {
    this.chargertypecontrat();
   this.counter();
  }
  chargertypecontrat(){
    this.typeContratService.listetypecontrat().subscribe(tpc => {
      console.log(tpc);
      this.typecontrats = tpc;
      this.alltypecontrats = tpc;

    });

  }


    supprimertypecontrat(id)
    {
      console.log(id);

    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.typeContratService. supprimertypecontrat(id).subscribe(() => {
            console.log("Type de Contrat supprimé");
            this.chargertypecontrat();

    });

    }

    recherchertypecontrats() {
      this.typeContratService.rechercherParNom(this.nomContrat).
        subscribe(tpc => {
         // console.log(rls)
          this.typecontrats = tpc;});


    }


    onKeyUp(filterText : string){
      this.typecontrats = this.alltypecontrats.filter(item =>
      item.nomContrat.toLowerCase().includes(filterText));
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


