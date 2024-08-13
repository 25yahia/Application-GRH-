import { Component, OnInit } from '@angular/core';
import { typeReunion } from 'src/app/models/typeReunion.model';
import { TypeReunionService } from 'src/app/services/type-reunion.service';

@Component({
  selector: 'app-consulter-typereunion',
  templateUrl: './consulter-typereunion.component.html',
  styleUrls: ['./consulter-typereunion.component.scss']
})
export class ConsulterTypereunionComponent implements OnInit {
  typeReunions: typeReunion[]
  nomtypedemande : string;
  alltypeReunions: typeReunion[];
  filterText: string = '';
  totalTypeReunions: number = 0;
  id: number;
  p:number=1;

  constructor(private typeReunionService : TypeReunionService) { }

  ngOnInit(): void {
    this.chargertypeReunion();
    this.counter();
  }

  chargertypeReunion(){
    this.typeReunionService.listetypereunion().subscribe(tr => {
      console.log(tr);
      this.typeReunions = tr;
      this.alltypeReunions = tr;

    });

  }


    supprimertypeReunion(id)
    {
      console.log(id);   

    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.typeReunionService. supprimertypereunion(id).subscribe(() => {
            console.log("Type de Demande supprimé");
            this.chargertypeReunion();

    });

    }

    rechercherReunion() {
      this.typeReunionService.rechercherParID(this.id).
        subscribe(tr => {
         // console.log(rls)
          this.typeReunions = [tr];});
      
    }

    onKeyUp(filterText: string) { 
      this.typeReunions = this.alltypeReunions.filter(item => 
          item.id.toString().toLowerCase().includes(filterText.toLowerCase())
      ); 
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
