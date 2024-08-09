import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  baseUrl :string= 'http://localhost:8080/ApplicationSystemeRessourcesHumaines';

  constructor(private http: HttpClient) { }


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);                             //hedhi mtaa l file kahaw

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  onupload(file: File, candidatId: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('candidat_id', candidatId.toString()); // Utilisez 'candidat_id' comme clé

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }



  getFiles(id: number): Observable<any> {
  const url = `${this.baseUrl}/files/candidat/${id}`;
    return this.http.get<any>(url);
   }


























}
