import { Component, OnInit } from '@angular/core';
import { typedemande } from 'src/app/models/typedemande.model';
import { TypedemandeService } from 'src/app/services/typedemande.service';

@Component({
  selector: 'app-consulter-typedemande',
  templateUrl: './consulter-typedemande.component.html',
  styleUrls: ['./consulter-typedemande.component.scss']
})
export class ConsulterTypedemandeComponent implements OnInit {
  typedemandes: typedemande[]
  nomtypedemande : string;
  alltypedemandes: typedemande[];
  filterText: string = '';
  totalTypedemande: number = 0;
  id: number;
  p:number=1;

  constructor(private typedemandeService : TypedemandeService) { }

  ngOnInit(): void {
    this.chargertypedemande();
    this.counter();
  }
  chargertypedemande(){
    this.typedemandeService.listetypedemande().subscribe(td => {
      console.log(td);
      this.typedemandes = td;
      this.alltypedemandes = td;

    });

  }


    supprimertypedemande(id)
    {
      console.log(id);   

    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.typedemandeService. supprimertypedemande(id).subscribe(() => {
            console.log("Type de Demande supprimé");
            this.chargertypedemande();

    });

    }

    rechercherContrat() {
      this.typedemandeService.rechercherParID(this.id).
        subscribe(td => {
         // console.log(rls)
          this.typedemandes = [td];});
      
    }

    onKeyUp(filterText: string) { 
      this.typedemandes = this.alltypedemandes.filter(item => 
          item.id.toString().toLowerCase().includes(filterText.toLowerCase())
      ); 
  }

  counter(){
    this.typedemandeService.counttypedemande().subscribe(
      count => {

        this.totalTypedemande = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des Types de Demandes : ', error);
      }
    );





  }

  }




