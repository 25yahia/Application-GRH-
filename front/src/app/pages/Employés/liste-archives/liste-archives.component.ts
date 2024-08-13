import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employes } from 'src/app/models/Employes.model';
import { Image } from 'src/app/models/image.model';
import { EmployesService } from 'src/app/services/employes.service';
import { ResponsableService } from 'src/app/services/responsable.service';
import { RHService } from 'src/app/services/rh.service';

@Component({
  selector: 'app-liste-archives',
  templateUrl: './liste-archives.component.html',
  styleUrls: ['./liste-archives.component.scss']
})
export class ListeArchivesComponent implements OnInit {
employes: Employes[];
employesArchive: Employes[];
apiURL1: string ='http://localhost:8080/ApplicationSystemeRessourcesHumaines/api';
totalEmployes: number = 0;
totalEmployesArchiver: number = 0;
totalEmployesActiver: number = 0;
totalRhsActiver: number = 0;
totalResponsablesActiver: number = 0;
allemployes: Employes[];
id: number;
p:number=1;
  constructor(private employesService :EmployesService,
    private router: Router,private rhService:RHService, private responsableService:ResponsableService
  ) { }

  ngOnInit(): void {
    this.chargerEmployesArchive();
    this.counter();
    this.counterArchiver();
    this.counterActiver();
    this.counterRH();
    this.counterResponsable();

  }
  chargerEmployesArchive() {
    this.employesService.getEmployeArchive().subscribe(emp => {
      console.log(emp);
      this.employes = emp;
      this.employesArchive = emp;
      this.employes.forEach((prod) => {

        this.employesService
        .loadImage(prod.images.idImage)
        .subscribe((img: Image) => {
        prod.imageStr = 'data:' + img.type + ';base64,' + img.image;
        });
        });

    });

}
activerEmploye(id: number): void{
  console.log(id);
  let conf = confirm("Etes-vous sûr ?");
  if (conf) {
    this.employesService.activerEmploye(id).subscribe(() => {
      console.log("Employé activé");
      this.chargerEmployesArchive();
      this.router.navigate(['/consulteremployes'])
    });
  }
}
counter(){
  this.employesService.countEmploye().subscribe(
    count => {

      this.totalEmployes = count;
    },
    error => {
      console.error('Une erreur s\'est produite lors de la récupération du nombre des employés : ', error);
    }
  );





}

counterArchiver(){
  this.employesService.countEmployeArchiver().subscribe(
    count => {
     
      this.totalEmployesArchiver = count;
     
    },
    error => {
      console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
    }
  );


}
 
counterActiver(){
  this.employesService.countEmployeActiver().subscribe(
    count => {
     
      this.totalEmployesActiver = count;
     
    },
    error => {
      console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
    }
  );


}


counterRH(){
  this.rhService.countRhActive().subscribe(
    count => {
     
      this.totalRhsActiver = count;
     
    },
    error => {
      console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
    }
  );


}


counterResponsable(){
  this.responsableService.countResponsableActive().subscribe(
    count => {
     
      this.totalResponsablesActiver = count;
     
    },
    error => {
      console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
    }
  );

}

rechercherEmploye() {
  this.employesService.rechercherParID(this.id).
    subscribe(cont => {
     // console.log(rls)
      this.employes = [cont];});
  
}

onKeyUp(filterText: string) { 
  this.employes = this.employesArchive.filter(item => 
      item.id.toString().toLowerCase().includes(filterText.toLowerCase())
  ); 
}


}
