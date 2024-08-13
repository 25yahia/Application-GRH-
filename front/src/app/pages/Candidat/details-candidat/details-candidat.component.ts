import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { candidat } from 'src/app/models/candidat.model';
import { AuthService } from 'src/app/services/auth.service';
import { CandidatService } from 'src/app/services/candidat.service';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-details-candidat',
  templateUrl: './details-candidat.component.html',
  styleUrls: ['./details-candidat.component.scss']
})
export class DetailsCandidatComponent implements OnInit {
  @ViewChild('pdfContent', { static: false }) pdfContent!: ElementRef;
  candidats: candidat[];
  allCandidats: candidat[];
  totalcandidats: number = 0;
  currentcandidat = new candidat ();
  candidat: candidat[];
  fileInfos: any[];
// pdfContent!: ElementRef;
  constructor( private candidatService: CandidatService,private activatedRoute: ActivatedRoute,private fileservice:FileUploadService,
    private router :Router,public authService:AuthService,) { }

  ngOnInit(): void {
    this.chargercandidat();
    this.counter();
    this.chargerfile();
  }
  chargercandidat(){
    this.candidatService.consultercandidat(this.activatedRoute.snapshot.params['id']).subscribe(candidat => {
      this.currentcandidat = candidat;
      console.log(candidat);
      });



  }
  chargerfile(){
    this.fileservice.getFiles(this.activatedRoute.snapshot.params['id']).subscribe(cdd => {
      console.log(cdd);
      this.fileInfos = cdd;
     
      console.log(this.fileInfos);

    });


  }
  accepterdemande(id: number): void {
    console.log(id);
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.candidatService.accepterdemande(id).subscribe(() => {
        console.log("Demande  acceptée");
        this.router.navigate(['consultercandidat']);


      });
    }
  }
  refuserdemande(id: number): void{
    console.log(id);
    let conf = confirm("Etes-vous sûr?");
    if (conf) {
      this.candidatService.refuserdemande(id).subscribe(() =>  {
        console.log("Demande refusée ");
        this.router.navigate(['consultercandidat']);

      });
    }
  }

  counter(){
    this.candidatService.countCandidat().subscribe(
      count => {

        this.totalcandidats = count;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération du nombre des candidats : ', error);
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
      pdf.save('details-employe.pdf');
    });
  }


    


}
