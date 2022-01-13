import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documento } from 'src/app/models/Documento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  private apiServerUrl = environment.apiBaseUrl+"/documento";

  constructor(private http: HttpClient) { }

  public getAllDocumento(): Observable<Documento[]> {
    return this.http.get<Documento[]>(`${this.apiServerUrl}/findAll`);
  }

  public findById(DocumentoID : number): Observable<Documento> {
    return this.http.get<Documento>(`${this.apiServerUrl}/findId/${DocumentoID}`);
  }

  public deleteDocumento(DocumentoId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteId/${DocumentoId}`);
  }

  public insertDocumento(Documento: Documento): Observable<Documento> {
    return this.http.post<Documento>(`${this.apiServerUrl}/insert`, Documento);
  }

  public updateDocumento(Documento: Documento): Observable<Documento> {
    return this.http.put<Documento>(`${this.apiServerUrl}/update`, Documento);
  }
}
