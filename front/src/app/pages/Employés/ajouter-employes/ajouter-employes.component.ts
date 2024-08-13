
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employes } from 'src/app/models/Employes.model';
import { contrat } from 'src/app/models/contrat.model';
import { departement } from 'src/app/models/departement.model';
import { Image } from 'src/app/models/image.model';
import { role } from 'src/app/models/role.model';
import { TypeContrat } from 'src/app/models/typecontrat.model';
import { EmployesService } from 'src/app/services/employes.service';
import { ResponsableService } from 'src/app/services/responsable.service';
import { RHService } from 'src/app/services/rh.service';

@Component({
  selector: 'app-ajouter-employes',
  templateUrl: './ajouter-employes.component.html',
  styleUrls: ['./ajouter-employes.component.scss']
})
export class AjouterEmployesComponent implements OnInit {
  NewEmploye = new Employes();
  contrats :contrat[];
  roles: role[];
  departements: departement[];
  Newidtypecontrats : number;
  NewidDep : number;
  NewidRole : number;
  typecontrats: TypeContrat[];
  uploadedImage!: File;
imagePath: any;
totalEmployes: number = 0;
totalEmployesArchiver: number = 0;
totalEmployesActiver: number = 0;
totalRhsActiver: number = 0;
totalResponsablesActiver: number = 0;
togglePasswordVisibility(passwordField: any) {
  passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
}
  constructor(private router :Router,  private employesService:EmployesService,private rhService:RHService, private responsableService:ResponsableService) { }

  ngOnInit(): void {  this.employesService.listecontrat().subscribe(data => {
    this.contrats = data});


    this.employesService.listeRole().subscribe(data =>{
      this.roles = data;
    });
    this.employesService.listedepartement().subscribe(data =>{
      this.departements= data;
    });
    this.employesService.listetypecontrat().subscribe(data => {
      this.typecontrats =data;
    });
    this.counter();
    this.counterArchiver();
    this.counterActiver();
    this.counterRH();
    this.counterResponsable();
  }
 /*  addemploye() {
    this.NewEmploye.typeContrat=this.typecontrats.find(typ=>typ.id ==this.Newidtypecontrats)!;
    this.NewEmploye.role=this.roles.find(typ=>typ.idRole ==this.NewidRole)!;
    this.NewEmploye.departement=this.departements.find(typ=>typ.idDepartement ==this.NewidDep)!;
    console.log("vvvvvvvv");
    this.employesService.ajouterEmploye(this.NewEmploye)
                      .subscribe(emp => {
                      console.log(emp);
                      this.router.navigate(['consulteremployes']);
                      });
  } */


  addemploye() {
    this.employesService.uploadImage(this.uploadedImage, this.uploadedImage.name)
     .subscribe((img:Image) => {
 
     this.NewEmploye.images=img;
 
     this.NewEmploye.role=this.roles.find(typ=>typ.idRole ==this.NewidRole)!;
     this.NewEmploye.typeContrat=this.typecontrats.find(typ=>typ.id ==this.Newidtypecontrats)!;
     this.NewEmploye.departement=this.departements.find(typ=>typ.idDepartement ==this.NewidDep)!;
     console.log("vvvvvvvv");
 
     this.employesService.ajouterEmploye(this.NewEmploye)
                       .subscribe(emp => {
                         this.employesService.uploadImageFS(this.uploadedImage,this.uploadedImage.name,emp.id).subscribe((response: any)=> {}
                       );
                       console.log(emp);
                       this.router.navigate(['consulteremployes']);
 
                       });
                     });
   }
 
 
 
 
 
   onImageUpload(event: any) {
     this.uploadedImage = event.target.files[0];
     var reader = new FileReader();
     reader.readAsDataURL(this.uploadedImage);
     reader.onload = (_event) => { this.imagePath = reader.result; }
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

    isFormComplete(): boolean {
      // Vérifiez si tous les champs requis sont remplis
      return !!this.NewEmploye.nom && !!this.NewEmploye.prenom && !!this.NewEmploye.etat &&
             !!this.NewEmploye.adresse && !!this.NewEmploye.ville && !!this.NewEmploye.email &&
             !!this.NewEmploye.motdepasse && !!this.NewEmploye.userNName && !!this.NewEmploye.salaire &&
             !!this.NewEmploye.solde && !!this.NewEmploye.joursConge && !!this.NewEmploye.statut &&
             !!this.NewEmploye.d && !!this.NewEmploye.repassword && !!this.NewEmploye.genre &&
             !!this.NewEmploye.archive && !!this.NewEmploye.maladie && !!this.NewEmploye.dateEntree &&
             !!this.NewEmploye.cin && !!this.Newidtypecontrats && !!this.NewidDep && !!this.NewidRole;
    }

  
}
