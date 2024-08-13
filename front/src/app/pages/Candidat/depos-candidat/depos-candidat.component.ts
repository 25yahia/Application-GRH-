import { CandidatService } from 'src/app/services/candidat.service';
import { Component, OnInit } from '@angular/core';
import { candidat } from 'src/app/models/candidat.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-depos-candidat',
  templateUrl: './depos-candidat.component.html',
  styleUrls: ['./depos-candidat.component.scss']
})
export class DeposCandidatComponent implements OnInit {
  NewCandidat= new candidat();
  confirmationMessage: string;
  currentFile?: File;
  selectedFiles: { cvFile?: FileList; lettreFile?: FileList } = {};
  currentFiles: { cvFile?: File; lettreFile?: File } = {};
  progress = { cvFile: 0, lettreFile: 0 };
  message = { cvFile: '', lettreFile: '' };

  candidatId : number;




  fileInfos?: Observable<any>;
  constructor(private candidatService: CandidatService,
    private uploadService: FileUploadService,private router: Router
  ) { }


  ngOnInit(): void {
    console.log(this.fileInfos);
  }
  selectFile(event: any, fileType: 'cvFile' | 'lettreFile'): void {
    this.selectedFiles[fileType] = event.target.files;
  }
  adddemande(): void {
    // Commencez par ajouter la nouvelle demande de candidat
    this.candidatService.ajouterdemande(this.NewCandidat).subscribe({
      next: (dmd: any) => {
        console.log(dmd);
        this.confirmationMessage = "Candidature déposée avec succès!";
        // Si la demande est ajoutée avec succès, effectuez l'upload des fichiers
        if (this.selectedFiles.cvFile) {
          this.uploadFile(this.selectedFiles.cvFile.item(0), dmd.id, 'cvFile');
        }
        if (this.selectedFiles.lettreFile) {
          this.uploadFile(this.selectedFiles.lettreFile.item(0), dmd.id, 'lettreFile');
        }
      },
      error: (err: any) => {
        console.log(err);
        this.confirmationMessage = 'Erreur lors du dépôt de la candidature!';
      }
    }); 
    this.router.navigate(['login']);
  }

  uploadFile(file: File | null, candidatId: number, fileType: 'cvFile' | 'lettreFile'): void {
    if (file) {
      this.currentFiles[fileType] = file;

      this.uploadService.onupload(file, candidatId).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress[fileType] = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message[fileType] = "Fichier téléchargé avec succès!";
          }
        },
        error: (err: any) => {
          console.log(err);
          this.progress[fileType] = 0;
          this.message[fileType] = err.error?.message || 'Could not upload the file!';
          this.currentFiles[fileType] = undefined;
        }
      });
    }
  }

}





