import { Injectable } from '@angular/core';
import { candidat } from '../models/candidat.model';
import { FileUploadService } from './file-upload.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CondidatService {
  apiURL: string = 'http://localhost:8080/ApplicationSystemeRessourcesHumaines/Candidat';
  candidats: candidat[];
  private baseUrl = 'http://localhost:8080';
  constructor(private http : HttpClient, private fileUploadService: FileUploadService
  ) { }


  onuploadFile(file: File, candidatId: number): Observable<any> {
    return this.fileUploadService.onupload(file, candidatId);
  }






}
