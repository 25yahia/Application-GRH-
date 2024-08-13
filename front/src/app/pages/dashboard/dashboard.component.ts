import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,

} from "../../variables/charts";
import { CandidatService } from 'src/app/services/candidat.service';
import { RHService } from 'src/app/services/rh.service';
import { ResponsableService } from 'src/app/services/responsable.service';
import { UtilisateursService } from 'src/app/services/utilisateurs.service';
import { EmployesService } from 'src/app/services/employes.service';
import { DemandeAdminService } from 'src/app/services/demande-admin.service';
import { demande } from 'src/app/models/demandeadmin.model';
import { conge } from 'src/app/models/congé.model';
import { CongeService } from 'src/app/services/conge.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  static totalCandidats: number = 0;
  static totalCandidatsEnAttente: number = 0;
  static totalCandidatsAccepter: number = 0;
  static totalRhsActiver:number=0;
  static totalResponsablesActiver:number=0;
  static totalEmployes: number = 0;

   totalHommes: number = 0;
   totalFemmes: number = 0;
   totalUtilisateurs:number=0;
   demandes: demande[]
   alldemandes: demande[];
   conges: conge[]
   allconges: conge[];

  static totalEmployesInJanuary:number=0;
  static totalEmployesInFebruary:number=0;
  static totalEmployesInMarch:number=0;
  static totalEmployesInApril:number=0;
  static totalEmployesInMay:number=0;
  static totalEmployesInSeptember:number=0;
  static totalEmployesInOctober:number=0;
  static totalEmployesInNovember:number=0;

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  
  constructor(private candidatService: CandidatService,private rhService:RHService,
     private responsableService:ResponsableService,private utilisateursService:UtilisateursService,
     private employesService : EmployesService,private demandeAdminService : DemandeAdminService,private congeService : CongeService) { }
  
  ngOnInit() {
     DashboardComponent.count(this.candidatService);
   /* DashboardComponent.counterAttente(this.candidatService); */
     DashboardComponent.counterAccepter(this.candidatService);
    DashboardComponent.counterRH(this.rhService);
    this.counterUtilisateurs(this.utilisateursService);
    DashboardComponent.counterResponsable(this.responsableService);
    DashboardComponent.counter(this.employesService);
    this.counterHomme(this.employesService);
    this.counterFemme(this.employesService);
    this.chargerdemande();
    this.chargerconge();

    DashboardComponent.counterJanuary(this.employesService);
    DashboardComponent.counterFebruary(this.employesService);
    DashboardComponent.counterMarch(this.employesService);
    DashboardComponent.counterApril(this.employesService);
    DashboardComponent.counterMay(this.employesService);
    DashboardComponent.counterSeptember(this.employesService);
    DashboardComponent.counterOctober(this.employesService);
    DashboardComponent.counterNovember(this.employesService);



    






    var chartOrders = document.getElementById('chart-orders');
    parseOptions(Chart, chartOptions());

    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options, // Utilisation des options de chartExample2
      data: chartExample2.data // Utilisation des données de chartExample2
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
      type: 'line',
      options: chartExample1.options,
      data: chartExample1.data
    });
  }


  chargerdemande(){
    this.demandeAdminService.getDemandeEnAttente().subscribe(dmd => {
      console.log(dmd);
      this.demandes = dmd;
      this.alldemandes = dmd;
      
      console.log(this.demandes);

    });

  }

  chargerconge(){
    this.congeService.getCongeEnAttente().subscribe(cns => {
      console.log(cns);
      this.conges = cns;
      this.allconges = cns;

    });

  }


   counterUtilisateurs(utilisateursService:UtilisateursService):void{
    utilisateursService.countUtilisateurs().subscribe(
      count => {
        
        this.totalUtilisateurs = count;

      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );

    
  } 



  static counterResponsable(responsableService:ResponsableService):void{
    responsableService.countResponsableActive().subscribe(
      count => {
        
        DashboardComponent.totalResponsablesActiver = count;

        chartExample2.data.datasets[0].data[1] = DashboardComponent.totalResponsablesActiver;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 





  static counterRH(rhService:RHService):void{
    rhService.countRhActive().subscribe(
      count => {
        
        DashboardComponent.totalRhsActiver = count;

        chartExample2.data.datasets[0].data[2] = DashboardComponent.totalRhsActiver;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 


  static counter(employesService : EmployesService):void{
    employesService.countEmploye().subscribe(
      count => {
        
        DashboardComponent.totalEmployes = count;

        chartExample2.data.datasets[0].data[3] = DashboardComponent.totalEmployes;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 




   counterHomme(employesService : EmployesService):void{
    employesService.countHommeActiver().subscribe(
      count => {
        
        this.totalHommes = count;

       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 

   counterFemme(employesService : EmployesService):void{
    employesService.countFemmeActiver().subscribe(
      count => {
        
        this.totalFemmes = count;

       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 



  static count(service: CandidatService): void {
    service.countCandidat().subscribe(
      count => {
        console.log(DashboardComponent.totalCandidats);
        DashboardComponent.totalCandidats = count;
     
        console.log(DashboardComponent.totalCandidats);
   
        chartExample2.data.datasets[0].data[4] = DashboardComponent.totalCandidats;
        
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );
  }






















  static counterJanuary(employesService : EmployesService):void{
    employesService.countEmployejoinInJanuary().subscribe(
      count => {
        
        DashboardComponent.totalEmployesInJanuary = count;

        chartExample1.data.datasets[0].data[0] = DashboardComponent.totalEmployesInJanuary;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 

  static counterFebruary(employesService : EmployesService):void{
    employesService.countEmployejoinInFebruary().subscribe(
      count => {
        
        DashboardComponent.totalEmployesInFebruary = count;

        chartExample1.data.datasets[0].data[1] = DashboardComponent.totalEmployesInFebruary;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 

  static counterMarch(employesService : EmployesService):void{
    employesService.countEmployejoinInMarch().subscribe(
      count => {
        
        DashboardComponent.totalEmployesInMarch = count;

        chartExample1.data.datasets[0].data[2] = DashboardComponent.totalEmployesInMarch;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 


  static counterApril(employesService : EmployesService):void{
    employesService.countEmployejoinInApril().subscribe(
      count => {
        
        DashboardComponent.totalEmployesInApril = count;

        chartExample1.data.datasets[0].data[3] = DashboardComponent.totalEmployesInApril;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 


  static counterMay(employesService : EmployesService):void{
    employesService.countEmployejoinInMay().subscribe(
      count => {
        
        DashboardComponent.totalEmployesInMay = count;

        chartExample1.data.datasets[0].data[4] = DashboardComponent.totalEmployesInMay;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 


  static counterSeptember(employesService : EmployesService):void{
    employesService.countEmployejoinInSeptember().subscribe(
      count => {
        
        DashboardComponent.totalEmployesInSeptember = count;

        chartExample1.data.datasets[0].data[5] = DashboardComponent.totalEmployesInSeptember;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 


  static counterOctober(employesService : EmployesService):void{
    employesService.countEmployejoinInOctober().subscribe(
      count => {
        
        DashboardComponent.totalEmployesInOctober = count;

        chartExample1.data.datasets[0].data[6] = DashboardComponent.totalEmployesInOctober;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 


  static counterNovember(employesService : EmployesService):void{
    employesService.countEmployejoinInNovember().subscribe(
      count => {
        
        DashboardComponent.totalEmployesInNovember = count;

        chartExample1.data.datasets[0].data[7] = DashboardComponent.totalEmployesInNovember;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } 


  /*static counterAttente(candidatService: CandidatService): void {
    candidatService.countCandidatEnAttente().subscribe(
      count => {
        console.log(DashboardComponent.totalCandidatsEnAttente);
        DashboardComponent.totalCandidatsEnAttente = count;
     
        console.log(DashboardComponent.totalCandidatsEnAttente);
   
        chartExample2.data.datasets[0].data[5] = DashboardComponent.totalCandidatsEnAttente;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );


  } */
 

  static counterAccepter(service: CandidatService): void {
    service.countCandidatAccepter().subscribe(
      count => {
        console.log(DashboardComponent.totalCandidatsAccepter);
        DashboardComponent.totalCandidatsAccepter = count;
     
        console.log(DashboardComponent.totalCandidatsAccepter);
   
        chartExample2.data.datasets[0].data[5] = DashboardComponent.totalCandidatsAccepter;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
      }
    );
  }

  
  /*counterRefuser() {
    this.candidatService.countCandidatRefuser().subscribe(
      count => {
        this.totalCandidatsRefuser = count;
        console.log('Total des candidats refusés : ', this.totalCandidatsRefuser);
        // Vous pouvez effectuer d'autres actions avec cette valeur ici
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats refusés : ', error);
      }
    );
  }*/
  

  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }  
}

// Ne placez pas le code ci-dessous dans le même fichier
export const chartExample2 = {
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function(value) {
              if (!(value % 10)) {
                return value;
              }
            }
          }
        }
      ]
    },
    tooltips: {
      callbacks: {
        label: function(item, data) {
          var label = data.datasets[item.datasetIndex].label || "";
          var yLabel = item.yLabel;
          var content = "";
          if (data.datasets.length > 1) {
            content += label;
          }
          content += yLabel;
          return content;
        }
      }
    }
  },
  data: {
    labels: [ "Adhérents", "Responsables","RH", "Employés", "Candidats",],
    datasets: [
      {
        label: "Sales",
        data: [12, 1, 1, 10, 3], 
        maxBarThickness: 10
      }
    ]
  }
}

export const chartExample1 = {
  options: {
    scales: {
      yAxes: [{
        gridLines: {
          color: "#333", 
          zeroLineColor: "#333",
          drawOnChartArea: false
        },
        ticks: {
          callback: function(value) {
            if (!(value % 10)) {
              return value;
            }
          }
        }
      }]
    }
  },
  data: {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Septembre', 'Octobre', 'Novembre'], 
    datasets: [{
      label: 'Performance',
      data: [0, 10, 10, 0, 15, 40, 20, 60, 60] 
    }]
  }
}

