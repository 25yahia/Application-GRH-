import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { typeconge } from 'src/app/models/typeconge.model';
import { TypecongeService } from 'src/app/services/typeconge.service';

@Component({
  selector: 'app-modifier-typeconge',
  templateUrl: './modifier-typeconge.component.html',
  styleUrls: ['./modifier-typeconge.component.scss']
})
export class ModifierTypecongeComponent implements OnInit {
  currentTypeconge = new typeconge();
  typeconges: typeconge[];
  totaltypeConges: number = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private typeCongeService : TypecongeService) { }

  ngOnInit(): void {
    this.typeCongeService.listetypeconge().subscribe(typeconges => {
      this.typeconges = typeconges;
      console.log(typeconges);
    });

    this.typeCongeService.consultertypeconge(this.activatedRoute.snapshot.params['id']).subscribe(typeconge => {
      this.currentTypeconge = typeconge;
      console.log(typeconge);
      });

      this.counter();




  }
  updatetypeconge() {
    this.typeCongeService.updatetypeconge(this.currentTypeconge).subscribe(() => {
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
