import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { conge } from 'src/app/models/congé.model';
import { typeconge } from 'src/app/models/typeconge.model';
import { AuthService } from 'src/app/services/auth.service';
import { CongeService } from 'src/app/services/conge.service';

@Component({
  selector: 'app-details-conge',
  templateUrl: './details-conge.component.html',
  styleUrls: ['./details-conge.component.scss']
})
export class DetailsCongeComponent implements OnInit {
  currentConge = new conge();
  conges: conge[];
  typedeConges: typeconge[];
  Newid:number;
  totalConges: number = 0;
  totalCongeEnAttente: number = 0;
  totalCongeAccepter: number = 0;
  totalCongeRefuser: number = 0;
  totalCongeEnAttenteUser: number = 0;
  totalCongeAccepterUser: number = 0;
  totalCongeRefuserUser: number = 0;
  totalCongeUser: number = 0;
  public loggedid!:number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
       private congeService:CongeService, public authService:AuthService) { }

  ngOnInit(): void {
    this.congeService.listeconge().subscribe(conges => {
      this.conges = conges;
      console.log(conges);


      this.congeService.listetypeconge().subscribe(data =>{
        this.typedeConges = data ;
        console.log("tttttttttt");
        console.log(data);

    })
    });

    this.congeService.consulterconge(this.activatedRoute.snapshot.params['id']).subscribe(conge => {
      this.currentConge = conge;
      console.log(conge);
      });
      this.counter();
      this.counterAttente();
    this.counterAccepter();
    this.counterRefuser();
    this.counterAttenteParUser();
    this.counterAccepterParUser();
    this.counterRefuserParUser();
    this.counterParUser();
  }


  updateconge() {
    const typeconge = this.typedeConges.find(typ => typ.id == this.Newid);
    this.currentConge.typedeConge = typeconge;
    this.congeService.updateconge(this.currentConge).subscribe(() => {
      this.router.navigate(['consultercongé']);
    });
  }

  accepterConge(id: number): void {
    console.log(id);
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.congeService.accepterdemande(id).subscribe(() => {
        console.log("Demande  acceptée");
        this.router.navigate(['consultercongé']);


      });
    }
  }
  refuserConge(id: number): void{
    console.log(id);
    let conf = confirm("Etes-vous sûr?");
    if (conf) {
      this.congeService.refuserdemande(id).subscribe(() =>  {
        console.log("Demande refusée ");
        this.router.navigate(['consultercongé']);

      });
    }
  }

  counter(){
    this.congeService.countconge().subscribe(
      count => {

        this.totalConges = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des congés : ', error);
      }
    );





  }

  counterAttente(){
    this.congeService.countCongeEnAttente().subscribe(
      count => {
       
        this.totalCongeEnAttente = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }



  counterAccepter(){
    this.congeService.countCongeAccepte().subscribe(
      count => {
       
        this.totalCongeAccepter = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des Conges : ', error);
      }
    );


  }


  counterRefuser(){
    this.congeService.countCongeRefuse().subscribe(
      count => {
       
        this.totalCongeRefuser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }

  counterAttenteParUser(){
    this.congeService.countCongeEnAttenteUser(this.loggedid).subscribe(
      count => {
       
        this.totalCongeEnAttenteUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );   


  }



  counterAccepterParUser(){
    this.congeService.countCongeAccepteUser(this.loggedid).subscribe(
      count => {
       
        this.totalCongeAccepterUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des Conges : ', error);
      }
    );


  }


  counterRefuserParUser(){
    this.congeService.countCongeRefuseUser(this.loggedid).subscribe(
      count => {
       
        this.totalCongeRefuserUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }

  counterParUser(){
    this.congeService.countCongeUser(this.loggedid).subscribe(
      count => {
       
        this.totalCongeUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }




}
        