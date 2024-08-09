import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { candidat } from 'src/app/models/candidat.model';
import { CandidatService } from 'src/app/services/candidat.service';

@Component({
  selector: 'app-consulter-candidat',
  templateUrl: './consulter-candidat.component.html',
  styleUrls: ['./consulter-candidat.component.scss']
})
export class ConsulterCandidatComponent implements OnInit {
  candidats: candidat[]

  allcandidats: candidat[];
  filterText: string = '';
  nomCandidat: string;
  totalCandidats: number = 0;
  totalCandidatsEnAttente: number = 0;
  totalCandidatsAccepter: number = 0;
  totalCandidatsRefuser: number = 0;
  p:number=1;
  constructor(private candidatService: CandidatService
  ) { }


  ngOnInit(): void {
    this.chargercandidat();
    this.counter();
    this.counterAttente();
    this.counterAccepter();
    this.counterRefuser();
  }
  chargercandidat() {
    this.candidatService.getCandidatsEnAttente().subscribe(cdd => {
      console.log(cdd);
      this.candidats = cdd;
      this.allcandidats = cdd;
    });
  }
  counter(){
    this.candidatService.countCandidat().subscribe(
      count => {

        this.totalCandidats = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  }
   
  rechercherCondidats() {
    this.candidatService.rechercherParNom(this.nomCandidat).
      subscribe(cdd => {
       // console.log(rls)
        this.candidats = cdd;});


  }



  onKeyUp(filterText : string){
    this.candidats = this.allcandidats.filter(item =>
 item.nomCandidat.toLowerCase().includes(filterText));
   }

   counterAttente(){
    this.candidatService.countCandidatEnAttente().subscribe(
      count => {
       
        this.totalCandidatsEnAttente = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  }



  counterAccepter(){
    this.candidatService.countCandidatAccepter().subscribe(
      count => {
       
        this.totalCandidatsAccepter = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  }


  counterRefuser(){
    this.candidatService.countCandidatRefuser().subscribe(
      count => {
       
        this.totalCandidatsRefuser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  }









}
