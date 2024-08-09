import { Component, OnInit } from '@angular/core';
import { typeconge } from 'src/app/models/typeconge.model';
import { TypecongeService } from 'src/app/services/typeconge.service';

@Component({
  selector: 'app-consulter-typeconge',
  templateUrl: './consulter-typeconge.component.html',
  styleUrls: ['./consulter-typeconge.component.scss']
})
export class ConsulterTypecongeComponent implements OnInit {
  typeconges: typeconge[]
  nomConge : string;
  allconges: typeconge[];
  filterText: string = '';
  totaltypeConges: number = 0;
  p:number=1;
  constructor(private typeCongeService : TypecongeService) { }

  ngOnInit(): void {
    this.chargertypeconge();
   this.counter();
  }
  chargertypeconge(){
    this.typeCongeService.listetypeconge().subscribe(tc => {
      console.log(tc);
      this.typeconges = tc;
      this.allconges = tc;

    });

  }


    supprimertypeconge(id)
    {
      console.log(id);

    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.typeCongeService. supprimertypeconge(id).subscribe(() => {
            console.log("Type supprimé");
            this.chargertypeconge();

    });

    }

   recherchertypeconge() {
      this.typeCongeService.rechercherParNom(this.nomConge).
        subscribe(tc => {
         // console.log(rls)
          this.typeconges = tc;});


    }


    onKeyUp(filterText: string) { 
      this.typeconges = this.allconges.filter(item => 
          item.id.toString().toLowerCase().includes(filterText.toLowerCase())
      ); 
  }

  counter(){
    this.typeCongeService.counttypeconge().subscribe(
      count => {

        this.totaltypeConges = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre de congés : ', error);
      }
    );





  }









  
  }


