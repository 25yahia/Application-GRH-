import { departement } from 'src/app/models/departement.model';
import { DepartementService } from './../../../services/departement.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-consulter-departement',
  templateUrl: './consulter-departement.component.html',
  styleUrls: ['./consulter-departement.component.scss']
})
export class ConsulterDepartementComponent implements OnInit {
  departements: departement[]
  nomDepartement : string;
  alldepartements: departement[];
  filterText: string = '';
  totaldepartements: number = 0;
  p:number=1;

  constructor(private departementService :DepartementService,public authService:AuthService) { }

  ngOnInit(): void {
    this.chargerdepartement();
    this.counter();
  }
  

  chargerdepartement(){
    this.departementService.listedepartement().subscribe(dps => {
      console.log(dps);
      this. departements = dps;
      this.alldepartements = dps;

    });

  }


    supprimerdepartement(id)
    {
      console.log(id);

    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.departementService. supprimerdepartement(id).subscribe(() => {
            console.log("Département supprimé");
            this.chargerdepartement();

    });

    }

    rechercherdepartements() {
      this.departementService.rechercherParNom(this.nomDepartement).
        subscribe(dps => {
         // console.log(rls)
          this. departements = dps;});


    }


    onKeyUp(filterText : string){
      this. departements = this.alldepartements.filter(item =>
   item.nomDepartement.toLowerCase().includes(filterText));
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


