import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employes } from 'src/app/models/Employes.model';
import { departement } from 'src/app/models/departement.model';
import { Reunion } from 'src/app/models/reunion.model';
import { typeReunion } from 'src/app/models/typeReunion.model';
import { ReunionService } from 'src/app/services/reunion.service';

@Component({
  selector: 'app-ajouter-reunion',
  templateUrl: './ajouter-reunion.component.html',
  styleUrls: ['./ajouter-reunion.component.scss']
})
export class AjouterReunionComponent implements OnInit {
  NewReunion = new Reunion();
  departements: departement[];
  typeReunions: typeReunion[];
  employes:Employes[];
  Newid: number;
  Newid1: number;
  Newid2: number;

  selectedIds: number[] = [];
  id_meet:number;
  id_user: number;
  selectedEmployees: number[] = [];
  searchQuery: string = '';
  totalreunions: number = 0;




  constructor(private router :Router,  private reunionService:ReunionService) { }

  ngOnInit(): void {
    this.reunionService.listedepartement().subscribe(data => {
      this.departements = data;
    });

      this.reunionService.listeEmployes().subscribe(data => {
        this.employes =data;
      });

      this.reunionService.listetypereunion().subscribe(data => {
        this.typeReunions =data;
      });
      this.counter();

}




/*addReunion() {

  this.NewReunion.departement=this.departements.find(typ=>typ.idDepartement ==this.Newid1)!;

    console.log("vvvvvvvv");

                                                     //!!!!!!!!!!!!!hedhi loula esshiha
    console.log(this.NewReunion);
    this.reunionService.ajouterReunion(this.NewReunion)
                      .subscribe(rn => {
                        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
                        console.log(this.Newid);
                       this.reunionService.addUsertoReuinin(rn.id,this.Newid).subscribe((response: any)=> {}
                      );
                      console.log(rn);
                      this.router.navigate(['consulterreunion']);
                      });
  }*/
  /*addReunion() {
    this.NewReunion.departement = this.departements.find(typ => typ.idDepartement == this.Newid1)!;

    console.log("vvvvvvvv");
    console.log(this.NewReunion);

    this.reunionService.ajouterReunion(this.NewReunion).subscribe(rn => {
        console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
        console.log(this.selectedParticipants);                                             //hedhi ma nedrich ala bouha

        // Ajouter chaque participant sélectionné à la réunion
        this.selectedParticipants.forEach(participantId => {
            this.reunionService.addUsertoReuinin(rn.id, participantId).subscribe((response: any) => {
                // Réaction à l'ajout de l'utilisateur à la réunion (facultatif)
            });
        });

        console.log(rn);
        this.router.navigate(['consulterreunion']);
    });
}*/
/* addReunion() {
  this.NewReunion.departement = this.departements.find(typ => typ.idDepartement == this.Newid1)!;
  console.log("vvvvvvvv");
  console.log(this.NewReunion);
  this.reunionService.ajouterReunion(this.NewReunion).subscribe(rn => {
      console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      console.log(this.selectedEmployees); // Afficher les identifiants des employés sélectionnés     //hedhi tekhdem ama takrib tselectionni id wehed
      // Boucler à travers les employés sélectionnés et les ajouter à la réunion
      for (const employeeId in this.selectedEmployees) {
          if (this.selectedEmployees.hasOwnProperty(employeeId) && this.selectedEmployees[employeeId]) {
              this.reunionService.addUsertoReuinin(rn.id, parseInt(employeeId)).subscribe((response: any) => {});
          }
      }
      console.log(rn);
      this.router.navigate(['consulterreunion']);
  });
} */

/* addReunion() {
  this.NewReunion.departement = this.departements.find(typ => typ.idDepartement == this.Newid1)!;

  console.log("vvvvvvvv");
  console.log(this.NewReunion);

  this.reunionService.ajouterReunion(this.NewReunion).subscribe(rn => {
      console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      console.log(this.selectedEmployees);

      // Ajouter chaque participant sélectionné à la réunion
      this.selectedEmployees.forEach(participantId => {
          this.reunionService.addUsertoReuinin(rn.id, participantId).subscribe((response: any) => {
              // Réaction à l'ajout de l'utilisateur à la réunion (facultatif)
          });
      });

      console.log(rn);
      this.router.navigate(['consulterreunion']);
  });
} */

addReunion() {
  // Associer le département sélectionné à la nouvelle réunion
  this.NewReunion.departement = this.departements.find(typ => typ.idDepartement == this.Newid1)!;
  this.NewReunion.typeReunion = this.typeReunions.find(typ => typ.id == this.Newid2)!;

  // Récupérer les IDs des employés sélectionnés
  const selectedEmployeeIds = this.selectedEmployees
    .filter((selected, index) => selected)
    .map((selected, index) => this.employes[index].id);

  // Ajouter la réunion avec les employés sélectionnés
  this.reunionService.ajouterReunion(this.NewReunion).subscribe(rn => {
    // Ajouter chaque employé sélectionné à la réunion
    selectedEmployeeIds.forEach(employeeId => {
      this.reunionService.addUsertoReuinin(rn.id, employeeId).subscribe((response: any) => {
        // Logique supplémentaire si nécessaire
      });
    });
    this.router.navigate(['consulterreunion']);
  });
}
filteredEmployes() {
  return this.employes.filter(employe =>
      employe.email.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
}

counter(){
  this.reunionService.countreunion().subscribe(
    count => {

      this.totalreunions = count;
    },
    error => {
      console.error('Une erreur s\'est produite lors de la récupération du nombre des réunions: ', error);
    }
  );

}
}