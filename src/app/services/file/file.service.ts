import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiServerUrl=environment.apiBaseUrl+"/file";


  constructor(private http: HttpClient) { }

  upload(formData: FormData): Observable<HttpEvent<String[]>>{
    return this.http.post<String[]>(`${this.apiServerUrl}/upload`,formData,{
      reportProgress:true,
      observe:'events'
    })
  }

  download(fileName: string): Observable<HttpEvent<Blob>>{
    return this.http.get(`${this.apiServerUrl}/download/${fileName}`,{
      reportProgress:true,
      observe:'events',
      responseType: 'blob'
    })
  }

  

  
}
