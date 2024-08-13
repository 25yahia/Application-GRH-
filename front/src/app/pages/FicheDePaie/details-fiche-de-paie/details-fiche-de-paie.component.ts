import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FicheDePaie } from 'src/app/models/FicheDePaie.model';
import { FicheDePaieService } from 'src/app/services/fiche-de-paie.service';

@Component({
  selector: 'app-details-fiche-de-paie',
  templateUrl: './details-fiche-de-paie.component.html',
  styleUrls: ['./details-fiche-de-paie.component.scss']
})
export class DetailsFicheDePaieComponent implements OnInit {
  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;
  FicheDePaies: FicheDePaie[];
  alleFicheDePaies: FicheDePaie[];
  totalFicheDePaies: number = 0;
  currentFicheDePaie = new FicheDePaie ();
  apiURL1: string ='http://localhost:8080/ApplicationSystemeRessourcesHumaines/api';
  constructor(private ficheService : FicheDePaieService,
    private activatedRoute: ActivatedRoute,
                       private router :Router) { }

  ngOnInit(): void {
    this.chargerFicheDePaies();
    this.counter();
  }

  chargerFicheDePaies(){
    this.ficheService.consulterFicheDePaie(this.activatedRoute.snapshot.params['id']).subscribe(fiche => {
      this.currentFicheDePaie = fiche;
      console.log(fiche);

      });



  }
  counter(){
    this.ficheService.countFicheDePaie().subscribe(
      count => {

        this.totalFicheDePaies = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des fiches de paie: ', error);
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
      pdf.save('details-fiche de paie.pdf');
    });
  }












}
