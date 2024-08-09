import { EmployesService } from './../../../services/employes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employes } from 'src/app/models/Employes.model';
import { Image } from 'src/app/models/image.model';
import { AuthService } from 'src/app/services/auth.service';
import { ResponsableService } from 'src/app/services/responsable.service';
import { RHService } from 'src/app/services/rh.service';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';

@Component({
  selector: 'app-consulter-employes',
  templateUrl: './consulter-employes.component.html',
  styleUrls: ['./consulter-employes.component.scss']
})
export class ConsulterEmployesComponent implements OnInit {
  employes: Employes[];
  employes1: Employes[];
  nom : string;
  allemployes: Employes[];
  filterText: string = '';
  totalEmployes: number = 0;
  totalEmployesArchiver: number = 0;
  totalEmployesActiver: number = 0;
  totalRhsActiver: number = 0;
  totalResponsablesActiver: number = 0;
  public loggedid!:number;
  apiURL1: string ='http://localhost:8080/ApplicationSystemeRessourcesHumaines/api';
  birthdate:Date;
  age:number;
  IDdepartementdeResponsable:number;
  employesActifs: any[];
  employesArchive: Employes[];
  id: number;
  p:number=1;
  constructor(private employesService : EmployesService,private rhService:RHService, private responsableService:ResponsableService,
    private router: Router,public authService:AuthService,private utilisateursService : UtilisateursService
  ) { }

  ngOnInit(): void {
   this.chargerEmployes();
   this.counter();
   this.counterArchiver();
   this.counterActiver();
   this.counterRH();
   this.counterResponsable();
   this.RecupererID();
   this.getDepartmentIdOfLoggedInUser();
   this.getDateOfLoggedInUser()

  }
  chargerEmployes(){
    this.employesService.listeEmployes().subscribe(emp => {
      console.log(emp);
      this.employes = emp;
      this.allemployes = emp;
      this.employes.forEach((prod) => {

        this.employesService
        .loadImage(prod.images.idImage)
        .subscribe((img: Image) => {
        prod.imageStr = 'data:' + img.type + ';base64,' + img.image;
        });
        });

      

    });

   
    

  }
  chargerEmployesParResponsable(){
    this.employesService.listeEmployesParDepartement(this.IDdepartementdeResponsable).subscribe(emp => {
      console.log(emp);
      this.employes1 = emp;
    

    });

  }

  rechercherEmploye() {
    this.employesService.rechercherParID(this.id).
      subscribe(cont => {
       // console.log(rls)
        this.employes = [cont];});
    
  }

  onKeyUp(filterText: string) { 
    this.employes = this.allemployes.filter(item => 
        item.id.toString().toLowerCase().includes(filterText.toLowerCase())
    ); 
}





    archiverEmploye(id: number): void {
      console.log(id);
      let conf = confirm("Etes-vous sûr ?");
      if (conf) {
        this.employesService.archiverEmploye(id).subscribe(() => {
          console.log("Employé archivé");
          this.chargerEmployes();
          this.router.navigate(['/listearchives'])
        });
      }
    }


 
  chargerEmployesArchive() {
    this.employesService.getEmployeArchive().subscribe(
      (data: Employes[]) => {
        this.employesArchive = data;
        console.log(this.employesArchive); // Vous pouvez faire ce que vous voulez avec les données ici
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des employés archivés : ', error);
      }
    );
  }



  RecupererID() {
    // Récupérer l'ID de l'utilisateur connecté depuis le localStorage
    const loggedidString = localStorage.getItem('loggedid');
    
    if (loggedidString) {
      // Convertir la valeur en nombre
      this.loggedid = parseInt(loggedidString, 10);
      
      // Afficher l'ID de l'utilisateur dans la console
      console.log('ID de l\'utilisateur connecté :', this.loggedid);
    } else {
      console.error('ID de l\'utilisateur non trouvé dans le localStorage');
    }
  }


  getDepartmentIdOfLoggedInUser(): void {
    this.utilisateursService.consulterUtilisateurs(this.loggedid).subscribe(
      user => {
        if (user && user.departement) {
           this.IDdepartementdeResponsable = user.departement.idDepartement;
          console.log('ID du département de l\'utilisateur connecté :', this.IDdepartementdeResponsable);
           this.chargerEmployesParResponsable();
        } else {
          console.error('Département de l\'utilisateur non trouvé');
        }
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération de l\'utilisateur : ', error);
      }
    );
  }

  calculateAge(birthdate: Date): number {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  getDateOfLoggedInUser(): void {
    this.utilisateursService.consulterUtilisateurs(this.loggedid).subscribe(
      user => {
        if (user &&  user.d ) {
          const userDate = new Date(user.d);
          if (!isNaN(userDate.getTime())) {
              this.birthdate = userDate;
              console.log('Date de naissance utilisateur:', this.birthdate);
              this.age = this.calculateAge(this.birthdate);
              console.log(this.age);
          } else {
              console.error('La date de naissance de l\'utilisateur est invalide');
          }
      } else {
          console.error('Date de naissance de l\'utilisateur non trouvée ou de type incorrect');
      }
      
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération de l\'utilisateur : ', error);
      }
    );
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
  
  }



