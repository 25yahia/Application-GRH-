import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { typeconge } from 'src/app/models/typeconge.model';
import { TypecongeService } from 'src/app/services/typeconge.service';

@Component({
  selector: 'app-ajouter-typeconge',
  templateUrl: './ajouter-typeconge.component.html',
  styleUrls: ['./ajouter-typeconge.component.scss']
})
export class AjouterTypecongeComponent implements OnInit {
  NewTypeconge = new typeconge();
  totaltypeConges: number = 0;

  constructor(private router :Router,  private typeCongeService : TypecongeService) { }

  ngOnInit(): void {
    this.counter();
  }
  addtypeconge() {
    this.typeCongeService.ajoutertypeconge(this.NewTypeconge)
                      .subscribe(tc => {
                      console.log(tc);
                      this.router.navigate(['consultertypeconge']);
                      });
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
         