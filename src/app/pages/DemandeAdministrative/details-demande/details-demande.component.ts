import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { demande } from 'src/app/models/demandeadmin.model';
import { typedemande } from 'src/app/models/typedemande.model';
import { AuthService } from 'src/app/services/auth.service';
import { DemandeAdminService } from 'src/app/services/demande-admin.service';

@Component({
  selector: 'app-details-demande',
  templateUrl: './details-demande.component.html',
  styleUrls: ['./details-demande.component.scss']
})
export class DetailsDemandeComponent implements OnInit {
  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;
  currentDemande = new demande();
  demandes: demande[];
  typesdemandeadministrative: typedemande[];
  Newid: number;
  totalDemandes: number = 0;
  totalDemandesEnAttente: number = 0;
  totalDemandesUser: number = 0;
  totalDemandesEnAttenteUser: number = 0;
  public loggedid:number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
       private demandeAdminService:DemandeAdminService,public authService:AuthService) { }

  ngOnInit(): void {

    this.demandeAdminService.listeDemande().subscribe(demandes => {
      this.demandes = demandes;
      console.log(demandes);
    });
    this.demandeAdminService.consulterDemande(this.activatedRoute.snapshot.params['id']).subscribe(demande => {
      this.currentDemande = demande;
      console.log(demande);});

      this.demandeAdminService.listetypedemande().subscribe(data => {
        this.typesdemandeadministrative = data;
      });
      this.RecupererID()  ;
      this.counter();
      this.counterAttente();
      this.counterAttenteParUser();
      this.counterParUser();
  }


  counter(){
    this.demandeAdminService.countDemande().subscribe(
      count => {

        this.totalDemandes = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des demandes administratives : ', error);
      }
    );

  }








  updateDemande() {
   
  this.currentDemande.etatdeDemandeAdmin ="etudié";
    this.demandeAdminService.updateDemande(this.currentDemande).subscribe(() => {
      this.router.navigate(['consulterdemande']);
    });
  }

  counterAttente(){
    this.demandeAdminService.countCongeEnAttente().subscribe(
      count => {
       
        this.totalDemandesEnAttente = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }

  exportPDF() {
    const data = this.pdfContent.nativeElement;
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('details-demande administrative.pdf');
    });
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

  counterAttenteParUser(){
    this.demandeAdminService.countDemandeEnAttenteUser(this.loggedid).subscribe(
      count => {
       
        this.totalDemandesEnAttenteUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );   


  }

  counterParUser(){
    this.demandeAdminService.countDemandeUser(this.loggedid).subscribe(
      count => {
       
        this.totalDemandesUser = count;
       
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des conges : ', error);
      }
    );


  }


}
